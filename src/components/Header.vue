<template>
    <div id="header">
        <b-navbar type="dark" variant="dark" fixed="top">
            <b-navbar-nav>
                <b-nav-item href="#"><router-link :to="{ name: 'upload'}">Home</router-link></b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
             <b-nav-item class="right_header">Muchtar Arefi - CMP SS21 - A2</b-nav-item>
             </b-navbar-nav>
        </b-navbar>
    </div>
</template>


<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #header{
    height: 56px;
    width: 97%;
    margin-left: 50px;
    margin-right: 50px;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  .right_header {
    pointer-events: none;
    color: inherit;
    float: right;
}
</style>
