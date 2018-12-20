<template>
<!--   <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit();">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group"><label>Email:</label> <input type="email" class="form-control" v-model="email" /></div>
        <div class="form-group">
          <label>Password:</label> <input type="password" class="form-control" v-model="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div> -->

      <section id="home" class="fullscreen t-center fullwidth cover" data-background="images/backgrounds/bg-09.jpg">
        <!-- Container -->
        <div class="container-xs mxw-350 v-center">
           <div class="t-center white">
               <h1 class="bold-title">Login On Site</h1>
               <h4 class="xxs-mt merriweather italic light">
                   Nice to see you! Please log in with your account.
               </h4>
               <div class="form dark xs-mt normal-title">
      <form v-on:submit.prevent="submit();">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group"><label>Email:</label> <input type="email" class="form-control" required placeholder="Email" v-model="email" /></div>
        <div class="form-group">
          <label>Password:</label> <input type="password" class="form-control" required placeholder="password" v-model="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
               </div>
               <h5>Did you lost your password? <a href="#" class="underline">Click Here.</a></h5>
               <h5>Do you want see more? <a href="index.html" class="underline">Back to Quadra.</a></h5>
           </div>
        </div>
        <!-- End Container -->
    </section>


</template>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
