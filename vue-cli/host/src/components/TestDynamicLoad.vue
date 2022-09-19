<template>
  <div>
    <VBtn @click="loadRemoteComponent">Load Dynamically</VBtn>
    <template>
      <component :is="remoteComponent" />
    </template>
  </div>
</template>

<script>
  import { loadComponent } from "../utils/index";
  export default {
    name: "App",
    components: {},
    data() {
      return {
        remoteComponent: null,
      };
    },
    methods: {
      async loadRemoteComponent() {
        this.remoteComponent = await loadComponent(
          "remoteB",
          "http://localhost:3302",
          "./HelloWorld"
        );
      },
    },
  };
</script>
