<template>
  <div class="home">
      <section id="headings" class="py container t-center">
      <h2 class="merriweather italic light colored1 bold">Create New Outfit</h2>
      <div class="title-strips xxs-mt dark"></div>
      </section>
    <div class="container gap-10">
      <p> <input v-model="newOutfitName" type="text" name="name" id="name" required placeholder="Name" class="classic_form big radius-lg bg-gray2 bs-light-focus"/></p>
      <p><input v-model="newOutfitImage" type="text" name="Image_URL" id="Image_URL" required placeholder="Image URL" class="classic_form big radius-lg bg-gray2 bs-light-focus" /></p>
        <div class="col-md-6 col-sm-12">
        <input type="file" name="file10" id="file10" class="inputfile" data-multiple-caption="{count} Images Selected" accept="image/x-png,image/gif,image/jpeg" multiple />
        <label for="file10" class="radius-lg"> <strong class="bg-colored">Choose a file&hellip;</strong><span></span></label>
        </div>
      <p> <input v-model="newOutfitCelebrity" type="text" name="celebrity" id="celebrity" required placeholder="Celebrity" class="classic_form big radius-lg bg-gray2 bs-light-focus" /> </p>
      <div class="classic_checkbox radio">
        <input v-model="newOutfitGender" type="radio" name="genders" id="radioOne" value="Male" checked> <label for="radioOne">Male</label>
      </div>
      <div class="classic_checkbox radio">
        <input v-model="newOutfitGender" type="radio" name="genders" id="radioTwo" value="Female" checked> <label for="radioTwo">Female</label>
      </div>
      <textarea v-model="newOutfitDescription" name="description" id="description" placeholder="Description" class="classic_form large radius bg-gray2 bs-light-focus"></textarea>
        <div class="divider-1 container sm-mt xs-mb">
          <span class="h3 merriweather italic light colored1">Add Products</span>
        </div>
      <div v-for="newProduct in newProducts">
        <p> <input v-model="newProduct.name" type="text" name="name" id="name" required placeholder="Name" class="classic_form big radius-lg bg-gray2 bs-light-focus"/></p>
        <p><input v-model="newProduct.image" type="text" name="Image_URL" id="Image_URL" required placeholder="Image URL" class="classic_form big radius-lg bg-gray2 bs-light-focus" /></p>
        <div class="col-md-6 col-sm-12">
        <input type="file" name="file10" id="file10" class="inputfile" data-multiple-caption="{count} Images Selected" accept="image/x-png,image/gif,image/jpeg" multiple />
        <label for="file10" class="radius-lg"> <strong class="bg-colored">Choose a file&hellip;</strong><span></span></label>
        </div>
        <p> <input v-model="newProduct.product_url" type="text" name="Product_URL" id="Product_URL" required placeholder="Product URL" class="classic_form big radius-lg bg-gray2 bs-light-focus"/></p>
        <p> <input v-model="newProduct.price" type="integer" name="price" id="price" required placeholder="price" class="classic_form big radius-lg bg-gray2 bs-light-focus"/> </p>
      </div>
      <p><button v-on:click="addEmptyProduct();"  class="stay lg-btn bg-gradient white qdr-hover-2-rotate radius-lg">Add More Products</button></p>
      <p><button v-on:click="createOutfit();"  class="stay lg-btn bg-gradient white qdr-hover-2-rotate radius-lg">Create</button></p>
    </div>
  </div>
</template>

<style>
</style>

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
