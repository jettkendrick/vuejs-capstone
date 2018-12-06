<template>
  <div class="home">
    <div class="container">
      <input type="text" v-model="searchFilter" />
      <div class="row">
        <div v-for="outfit in outfits" class="col-md-4 mb-2">
          <div class="card">
            <img class="card-img-top" v-bind:src="outfit.image" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{ outfit.name }}</h5>
              <p class="card-text">Celebrity: {{ outfit.celebrity }}</p>
              <a v-bind:href="`/#/outfits/${outfit.id}`" class="btn btn-primary">more</a>
            </div>
          </div>
        </div>
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
      message: "Welcome to Vue.js!",
      outfits: [],
      searchFilter: ""
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/womens").then(response => {
      this.outfits = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
