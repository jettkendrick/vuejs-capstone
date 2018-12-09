import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import OutfitsShow from "./views/OutfitsShow.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Womens from "./views/Womens.vue";
import Mens from "./views/Mens.vue";
import Recommendation from "./views/Recommendation.vue";
import OutfitsNew from "./views/OutfitsNew.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/outfits/new", name: "outfits-new", component: OutfitsNew },
    { path: "/outfits/:id", name: "outfits-show", component: OutfitsShow },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/womens", name: "womens", component: Womens },
    { path: "/men", name: "men", component: Mens },
    { path: "/recommendations", name: "recommendations", component: Recommendation }
  ]
});
