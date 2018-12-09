<template>
  <div class="home">
    <div class="container">
      <h1>Add New Recommendation</h1>
      Image: <input v-model="newRecommendationImage" type="text" /> Url:
      <input v-model="newRecommendation" type="text" />
      <p>comments:</p>
      <textarea v-model="newRecommnedationComments" type="text" cols="40" rows="5" /></p>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
