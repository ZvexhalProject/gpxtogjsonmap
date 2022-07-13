<template>
  <div id="upload">
    <div>
      <b-jumbotron header="Standard-GPX-Trackingdaten zu GeoJSON" lead="Cross-Media-Publishing, Sommersemester 2021 - Hochschule Aalen">
        <p>Die .gpx Datei einfach mit Drag and Drop in das Feld hineinziehen oder über "Browse" hochladen</p>
      </b-jumbotron>
    </div>
    <div class="container">
      <b-form-group>
        <b-form-file id="file-large" v-model="file" size="lg" accept=".gpx, .GPX"></b-form-file>
      </b-form-group>
      <b-alert v-model="showAlert" show variant="danger" dismissible>
        <strong>Datei ist korrupt/fehlerhaft oder im falschen Format.</strong>
      </b-alert>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
  import DOMParser from '../services/DOMParser'
  import Router from '../router'

  export default {
    name: 'Upload',
    props: {},
    data() {
      return {
        file: null,
        showAlert: false,
      }
    },
    methods: {
      toggleAlert() {
        this.showAlert = true;
      }
    },
    watch: {
      file: async function (newFile) {
        try {
          let geojsonfile = await DOMParser.parse(await newFile.text());
          Router.push({
            name: 'map',
            params: {
              file: newFile.text(),
              convFile: geojsonfile
            }
          })
        } catch (error) {
          console.log(error);
          this.toggleAlert();
        }

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #upload {
    height: calc(100% - 56px);
    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-content: center;

    .container {
      height: 20%;
      width: 70%;
    }
  }
</style>