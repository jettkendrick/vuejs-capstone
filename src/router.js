import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Show from "./views/Show.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Womens from "./views/Womens.vue";
import Mens from "./views/Mens.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/outfits/:id", name: "show", component: Show },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/womens", name: "womens", component: Womens },
    { path: "/men", name: "men", component: Mens }
  ]
});
