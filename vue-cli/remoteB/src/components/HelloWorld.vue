<template>
  <v-container>
    <v-btn @click="addClick"><v-icon left dark>mdi-check</v-icon> Add</v-btn>
    <div>{{ count }}</div>
    <v-tooltip left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Left </v-btn>
      </template>
      <span>Left tooltip</span>
    </v-tooltip>
  </v-container>
</template>
<script>
  export default {
    computed: {
      count() {
        return this.$store.state.access_token;
      },
    },
    methods: {
      addClick() {
        this.$store.commit("setAccessToken");
      },
    },
  };
</script>
