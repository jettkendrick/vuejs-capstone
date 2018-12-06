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
        <h5>Recommendations</h5>
        <a v-bind:href="recommendation.recommendation_url">
          <img v-bind:src="recommendation.image" width="200" height="200" alt="..." class="img-thumbnail" />
        </a>
        <p>user {{ recommendation.user_id }} : {{ recommendation.comment }}</p>
      </div>
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
