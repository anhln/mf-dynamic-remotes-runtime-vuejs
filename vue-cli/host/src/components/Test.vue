// Use the components in the home project
<template>
  <div></div>
</template>

<script>
  import sto from "remoteA/store";
  export default {
    name: "App",
    components: {},
    computed: {
      count() {
        return sto.state.access_token;
      },
    },
    created() {
      console.log("Store", sto);
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
