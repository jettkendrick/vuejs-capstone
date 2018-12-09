<template>
  <div class="home">
    <div class="container">
      <img v-bind:src="outfit.image" class="img-fluid" alt="Responsive image" />
      <h3>{{ outfit.name }}</h3>
      <p>{{ outfit.description }}</p>
      <div v-for="product in outfit.products">
        <h4>{{ product.name }}</h4>
        <a v-bind:href="product.product_url">
          <img v-bind:src="product.image" width="200" height="200" alt="..." class="img-thumbnail" />
        </a>
        <p>{{ product.price }}</p>
      </div>
      <div v-for="recommendation in outfit.recommendations">
        <h2>Recommendations</h2>
        <a v-bind:href="recommendation.recommendation_url">
          <img v-bind:src="recommendation.image" width="200" height="200" alt="..." class="img-thumbnail" />
        </a>
        <p>user {{ recommendation.user_id }} : {{ recommendation.comment }}</p>
      </div>
      <h5>Add New Recommendation</h5>
      <p>Image: <input v-model="newRecommendationImage" type="text" /></p>
      <p>Url: <input v-model="newRecommendation" type="text" /></p>
      <p>comments:</p>
      <textarea v-model="newRecommnedationComments" type="text" cols="40" />
      <p><button v-on:click="createRecommendation();" class="btn btn-primary">Post Recommendation</button></p>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      outfit: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/outfits/" + this.$route.params.id).then(response => {
      this.outfit = response.data;
      console.log(this.outfit);
    });
  },
  methods: {},
  computed: {}
};
</script>
