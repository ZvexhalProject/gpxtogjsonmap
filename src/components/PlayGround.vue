<template>
  <div id="playground">
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
</template>

<script>
export default {
  name: 'PlayGround',
  props: {
  },
  data() {
    return {
      file1: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #playground{
    height: calc(100% - 56px);
    width: 100%;
  }
</style>
