<template>
  <div class="home">
    <div class="container">
      <h1>Add New Outfit</h1>
      <p>name: <input v-model="newOutfitName" type="text" /></p>
      <p>Image URL: <input v-model="newOutfitImage" type="text" /></p>
      <p>Celebrity: <input v-model="newOutfitCelebrity" type="text" /></p>
      Gender: <br />
      <input v-model="newOutfitGender" type="radio" name="genders" value="Male" /> Male
      <input v-model="newOutfitGender" type="radio" name="genders" value="Female" /> Female
      <p>Description:</p>
      <textarea v-model="newOutfitDescription" type="text" cols="40" rows="5" />
      <h5>Add Outfit Products</h5>
      <div v-for="newProduct in newProducts">
        <p>name: <input v-model="newProduct.name" type="text" /></p>
        <p>Image URL: <input v-model="newProduct.image" type="text" /></p>
        <p>Product URL: <input v-model="newProduct.product_url" type="text" /></p>
        <p>Price: <input v-model="newProduct.price" type="text" /></p>
      </div>
      <p><button v-on:click="addEmptyProduct();" class="btn btn-primary">Add More Products</button></p>
      <button v-on:click="createOutfit();" class="btn btn-primary">Create</button>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      newOutfitName: "",
      newOutfitImage: "",
      newOutfitCelebrity: "",
      newOutfitGender: "",
      newOutfitDescription: "",
      errors: [],
      newProducts: [
        {
          name: "",
          image: "",
          price: "",
          product_url: ""
        }
      ]
    };
  },
  created: function() {},
  methods: {
    addEmptyProduct: function() {
      this.newProducts.push({
        name: "",
        image: "",
        price: "",
        product_url: ""
      });
    },
    createOutfit: function() {
      console.log("createOutfit");
      this.errors = [];
      var genderIds = {
        Male: 1,
        Female: 2,
        Unisex: 3
      };
      var params = {
        name: this.newOutfitName,
        image_url: this.newOutfitImage,
        celebrity: this.newOutfitCelebrity,
        gender_id: genderIds[this.newOutfitGender],
        description: this.newOutfitDescription,
        products: this.newProducts
      };
      axios.post("http://localhost:3000/api/outfits", params).then(function(response) {
        console.log(response);
      });
    }
  },
  computed: {}
};
</script>
