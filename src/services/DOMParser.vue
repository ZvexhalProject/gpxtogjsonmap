<script>
  import {
    defineComponent
  } from '@vue/composition-api'

  export default defineComponent({
    async parse(data) {

      var lat;
      var lon;
      var elevation;
      var time;
      var coordTimestrk = [];
      var coordtrk = [];
      var coordinatestrk = [];
      var coordTimewpt = [];
      var coordwpt = [];
      var propertynamewpt;
      var features = [];
      var metatime
      var propertynametrk;
      var propertydescription;
      let gpxdocument = data;

      
      const parser = new DOMParser().parseFromString(gpxdocument, "text/xml");
      let elements = parser.getElementsByTagName("gpx")[0].children;

      if (parser.getElementsByTagName("metadata") && parser.getElementsByTagName("metadata").length>0) {
        let meta = parser.getElementsByTagName("metadata")[0].children;
        for (let i = 0; i < meta.length; i++) {
          if (meta[i].tagName == "time") {
            metatime = new Date(meta[i].textContent);
          }
        }
      }

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].tagName == "wpt") {
          let wpt = elements[i].children;
          lat = Number(elements[i].getAttribute("lat"));
          lon = Number(elements[i].getAttribute("lon"));
          for (let j = 0; j < wpt.length; j++) {
            coordwpt = [];
            coordTimewpt=[];
            if (wpt[j].tagName == "ele") {
              elevation = Number(wpt[j].textContent);
            }
            if (wpt[j].tagName == "time") {
              time = new Date(wpt[j].textContent);
              coordTimewpt.push(time);
            }
            if (wpt[j].tagName == "name") {
              propertynamewpt = wpt[j].textContent;
            }
            if(wpt[j].tagName =="desc"){
              propertydescription = wpt[j].textContent;
            }
            if(elevation){
            coordwpt.push(lon, lat, elevation);}
            else {
              coordwpt.push(lon, lat)
            }
          }
          features.push(await this.buildJSONpt(propertynamewpt,propertydescription,coordTimewpt,coordwpt));
        }

        if(elements[i].tagName=="rte"){
          coordinatestrk=[];

          let rte=elements[i].children;
          for(let j= 0; j<rte.length;j++){
            if(rte[j].tagName =="rtept"){
              coordtrk=[];
              lat = Number(rte[j].getAttribute("lat"));
              lon = Number(rte[j].getAttribute("lon"));
              coordtrk.push(lon, lat);
            }
            coordinatestrk.push(coordtrk);
          }
          features.push(await this.buildJSON(null,null,null,null,coordinatestrk));
        }

        if (elements[i].tagName == "trk") {

          coordTimestrk=[];
          coordinatestrk=[];
          coordtrk=[];
          let trk = elements[i].children;
          for (let j = 0; j < trk.length; j++) {
            if (trk[j].tagName == "name") {
              propertynametrk = trk[j].textContent;
            }
             if (trk[j].tagName == "desc") {
             propertydescription = trk[j].textContent}
            if (trk[j].tagName == "trkseg") {
              let trkseg = trk[j].children
              for (let k = 0; k < trkseg.length; k++) {
                let trksegvalue = trkseg[k].children;
                lat = Number(trkseg[k].getAttribute("lat"));
                lon = Number(trkseg[k].getAttribute("lon"));

                for (let l = 0; l < trksegvalue.length; l++) {
                  coordtrk = [];
                  if (trksegvalue[l].tagName == "ele") {
                    elevation = Number(trksegvalue[l].textContent);
                  }
                  if (trksegvalue[l].tagName == "time") {
                    time = new Date(trksegvalue[l].textContent)
                    coordTimestrk.push(time);
                  }

                  if (elevation) {
                    coordtrk.push(lon, lat, elevation)
                  } else {
                    coordtrk.push(lon, lat);
                  }
                }
                coordinatestrk.push(coordtrk);
              }
            }
          }
          features.push(await this.buildJSON(propertynametrk,propertydescription,metatime,coordTimestrk,coordinatestrk));

        }
      }

      





      var inh = {
        "type": "FeatureCollection",
        "features": features
      }

      console.log(JSON.stringify(inh, null, 2))


       return inh;
      
    },
    async buildJSON(nametrk,description,time,timestrk,coordinates){
        var obj={
          "type": "Feature",
          "properties": {
          },
          "geometry": {
            "type": "LineString",
            "coordinates": coordinates
          }}
          if(nametrk){
            obj.properties.name=nametrk;
          }
           if(description){
            obj.properties.desc=description;
          }
          if(time){
            obj.properties.time=time;
          }
          if(timestrk){
            obj.properties.coordTimes=timestrk;
          }
          return obj;
    },
    async buildJSONpt(name,desc,time,coordinates){
        var obj= {
            "type": "Feature",
            "properties": {
            },
            "geometry": {
              "type": "Point",
              "coordinates": coordinates
            }
          }
           if(name){
            obj.properties.name=name;
          }
           if(desc){
            obj.properties.desc=desc;
          }
          if(time.length>0){
            obj.properties.time=time;
          }

          return obj;
    }
  })
</script>