<template>

  <div id="map">

    <l-map ref="myMap" @ready="initMap()" :zoom="zoom" :center="center" :options="mapOptions">
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-geo-json :geojson="geojson" :options="options"></l-geo-json>
    </l-map>
    <vue-fab icon="download" size="big" mainBtnColor="#3599DB">
      <fab-item @clickItem="clickItem('gpx')" :idx="0" title="GPX" icon="download" />
      <fab-item @clickItem="clickItem('geojson')" :idx="1" title="GeoJSON" icon="download" />
      <fab-item @clickItem="goBack()" :idx="2" title="Upload new file" icon="upload" />
    </vue-fab>
  </div>
</template>

<script>
  import {
    latLng,
    featureGroup
  } from "leaflet";
  import {
    LMap,
    LTileLayer,
    // LPopup,
    LGeoJson
  } from "vue2-leaflet";
  import {
    Icon
  } from 'leaflet';
  /* import {getDistance} from 'geolib'; */
  import Router from '../router'


  delete Icon.Default.prototype._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
  //LMarker, LPopup, LTooltip,

  export default {
    name: 'Map',
    components: {
      LMap,
      LTileLayer,
      // LPopup,
      /*       LMarker,
            LPopup,
            LTooltip,  */
      LGeoJson
    },
    data() {
      return {
        zoom: 13,
        center: latLng(48.8359, 10.0903),
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        enableTooltip: true,

        /* withPopup: latLng(47.41322, -1.219482),
        withTooltip: latLng(47.41422, -1.250482),
        currentZoom: 14,
        currentCenter: latLng(47.41322, -1.219482),
        showParagraph: false, */
        mapOptions: {
          zoomSnap: 0.5,
        },
        geojson: null,
        originalFile: null,
        options: {
          onEachFeature: function onEachFeature(feature, layer) {
            if (feature.geometry.type == "Point") {
              let tooltipString = "";
              if (feature.properties.name) {
                tooltipString += "Name:\t" + feature.properties.name + "</br>";
              }
              if (feature.properties.time) {
                tooltipString += "Time:\t" + feature.properties.time +
                  "</br>"
              }
              if (feature.properties.desc) {
                let strshort;
                strshort = "Desc:\t" + feature.properties.desc;
                tooltipString += strshort.substr(0, 30) + "...</br>";
              }
              tooltipString += "Coord (Lon, Lat, Ele): </br>[" + feature.geometry.coordinates + "]";
              layer.bindTooltip(tooltipString);

            } else {
              let colorarray = ["black", "blue", "brown", "green", "red", "orange", "purple"];
              layer.setStyle({
                color: colorarray[Math.floor(Math.random() * 8)],
              });
              let tooltipString = "";
              if (feature.properties.name) {
                tooltipString += "Name:\t" + feature.properties.name + "</br>";
              }
              if (feature.properties.time) {
                tooltipString += "Time:\t" + feature.properties.time +
                  "</br>"
              }
              if (feature.properties.desc) {
                let strshort;
                strshort = "Desc:\t" + feature.properties.desc;
                tooltipString += strshort.substr(0, 30) + "...</br>";
              }



              

              if (feature.properties.coordTimes) {
                let times = feature.properties.coordTimes;
                let maxDate = Math.max(...times);
                let minDate = Math.min(...times);


                let diff = new Date((maxDate - minDate));
                let diffH = diff.getUTCHours();
                let diffM = diff.getUTCMinutes();
                let diffS = diff.getUTCSeconds();

                tooltipString += "Start:\t" + new Date(minDate) + "</br>End:\t" + new Date(maxDate) +
                  "</br>Duration:\t" + ('0' + diffH).slice(-2) + ":" + ('0' + diffM).slice(-2) + ":" + ('0' + diffS)
                  .slice(-2) + "\t(HH:MM:SS) </br>";
              }

              let distancesum = 0;
              let arraycoord = feature.geometry.coordinates;
              for (let i = 0; i < arraycoord.length; i++) {
                if (arraycoord[i + 1]) {
                  let lon1 = arraycoord[i][0] * Math.PI / 180;
                  let lat1 = arraycoord[i][1] * Math.PI / 180;
                  let lon2 = arraycoord[i + 1][0] * Math.PI / 180;
                  let lat2 = arraycoord[i + 1][1] * Math.PI / 180;

                  let deltaLat = lat2 - lat1;
                  let deltaLon = lon2 - lon1;

                  let a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(
                    deltaLon / 2), 2);
                  let c = 2 * Math.asin(Math.sqrt(a));
                  let EARTH_RADIUS = 6371;
                  distancesum += c * EARTH_RADIUS;
                }
              }
              tooltipString += "Distance in km:\t" + Math.round(distancesum * 1000) / 1000;
              layer.bindPopup(tooltipString);
            }
          },
        }

      };

    },
    async mounted() {

      let convFile = await this.$route.params.convFile;
      this.geojson = convFile;
      this.originalFile = await this.$route.params.file;

      this.$nextTick().then(() => {
        var group = new featureGroup();

        this.$refs.myMap.mapObject.eachLayer(function (layer) {
          if (layer.feature != undefined)
            group.addLayer(layer);
        });

        this.$refs.myMap.mapObject.fitBounds(group.getBounds(), {
          padding: [100, 100]
        });
      });


    },
    methods: {


      initMap() {
        // this.map = this.$refs.myMap.mapObject
      },
      clickItem(type) {
        var filename = "";
        var text = "";
        var date = new Date().toISOString();
        if (type == "geojson") {
          filename = date + "GPX.geojson";
          text = JSON.stringify(this.geojson, null, 4);
        }
        if (type == "gpx") {
          filename = date + "GPX.gpx";
          text = this.originalFile;
        }
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      },
      goBack() {
        Router.go(-1);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #map {
    height: calc(100% - 56px);
    width: 100%;
  }
</style>