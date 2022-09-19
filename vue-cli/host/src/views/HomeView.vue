<template>
  <hello-world />
</template>

<script>
  const HelloWorld = () => import("remoteA/HelloWorld");

  export default {
    name: "Home",

    components: {
      HelloWorld,
    },
  };
</script>
