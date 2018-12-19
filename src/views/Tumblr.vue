<template>
  <div class="home">
    <section id="blog" class="qdr-blog post-radius gray6 post-shadow lh-lg py bg-gray2">


        <!-- Container for top elements -->
        <div class="container blog-utilities sm-pb t-center">
            <div class="qdr-col-2 row">
            <!-- Col -->
              <div>
                <!-- Title -->
                <div class="inline-block waypoint load-with-waypoint bg-white">
                    <h1 class="extrabold-title no-pm bg-primary white px-10">Celeb</h1>
                </div>
                <!-- Title -->
                <div class="inline-block waypoint load-with-waypoint bg-white">
                    <h3 class="light no-pm bg-dark white px-10 mini-py">pics</h3>
                </div>
              </div>
            </div>
        </div>
        <!-- End Container for top elements -->

        <!-- Container for posts -->
        <div class="container-md">
            <!-- Blog Posts -->
            <div id="posts" class="cbp">

                <!-- Post -->
                <a v-for="photo in blog.posts"  class="cbp-item art music">
                    <!-- Mark -->
                    <!-- Image -->
                    <div>
                        <img v-bind:src="photo.photos[0].original_size.url"  alt="">
                    </div>
                    <!-- Post Texts -->
                </a>
                <!-- End Post -->

            </div>
            <!-- End Blog Posts -->
        </div>
        <!-- End Container for posts -->

        <!-- Pagination -->
        <div class="t-center pt">
            <nav aria-label="Page navigation">
                <ul class="pagination pagination-lg">
                    <li class="active">
                        <a href="#" aria-label="Previous" class="stay bg-gray3 bold gray6 sm-px">
                            <i class="fa fa-angle-double-left mini-mr"></i>
                            Prev
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Next" class="bg-transparent gray9 bold bg-gray3-hover sm-px slow">
                            Next
                            <i class="fa fa-angle-double-right mini-ml"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- End Pagination -->

    </section>
    <!-- END BLOG -->
    </div> 
<!--       <div class="row">
        <div v-for="photo in blog.posts" class="col-md-4">
          <img v-bind:src="photo.photos[0].original_size.url" class="img-fluid"> 
        </div>
    </div>
  </div> -->
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      blog: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/tumblr").then(response => {
      this.blog = response.data;
    });
  },
  updated: function() {
    (function($, window, document, undefined) {
      // init cubeportfolio
      $("#posts").cubeportfolio({
        filters: "#tags",
        search: "#blog-search",
        gapHorizontal: 7,
        layoutMode: "grid",
        gapVertical: 7,
        gridAdjustment: "responsive",
        mediaQueries: [
          {
            width: 1050,
            cols: 3
          },
          {
            width: 950,
            cols: 3
          },
          {
            width: 850,
            cols: 2
          },
          {
            width: 770,
            cols: 2
          },
          {
            width: 640,
            cols: 2
          },
          {
            width: 480,
            cols: 1
          },
          {
            width: 320,
            cols: 1
          }
        ],
        caption: "none",
        animationType: "quicksand",
        displayType: "bottomToTop",
        displayTypeSpeed: 60
      });
    })(jQuery, window, document);
  },
  methods: {},
  computed: {}
};
</script>
