<template>
  <div class="home">
    <!-- BLOG -->
    <section id="blog" class="qdr-blog post-radius gray6 post-shadow lh-lg py bg-gray2">


        <!-- Container for top elements -->
        <div class="container blog-utilities sm-pb t-center">
            <div class="row clearfix">

                <!-- Search Form -->
                <div class="col-lg-8 offset-lg-1 col-md-8 col-12">
                    <div class="cbp-search fullwidth no-mb">
                        <input id="blog-search" type="text" placeholder="Search by title" autocomplete="off" data-search="h4" class="cbp-search-input bg-gray3 classic_form big radius-lg slow dark">
                        <div class="cbp-search-nothing">No results match for <i>{{query}}</i></div>
                    </div>
                </div>
                <!-- End Search Form -->
                <!-- Utilities -->
                <div class="col-lg-3 col-md-4 col-12 t-left t-center-mobile xxs-pt-mobile">
                    <div class="row clearfix">
                        <a href="pages-account-profile.html" class="blog-user bg-gray3-hover slow1 mini-mr">
                            <img src="images/thumbnails/thumb_01.jpg" alt="user profile avatar" class="circle">
                            <p class="gray8 bold-subtitle font-12">#BoyzWhoCode</p>
                        </a>
                        <!-- Filters Category -->
                        <div id="tags" class="dropdown drop-effect drop-icon">
                            <button class="dropdown-toggle extrabold font-10 circle bg-gray3 uppercase gray8 border-gray3 bg-colored-hover border-colored-hover white-hover slow" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tags
                            </button>
                            <ul class="dropdown-menu font-12 normal black" aria-labelledby="dropdownMenu2">
                                <li data-filter="*" class="cbp-filter-item-active cbp-filter-item" ><div class="link">All</div></li>
                                <li data-filter=".art" class="cbp-filter-item" ><div class="link">Art</div></li>
                                <li data-filter=".music" class="cbp-filter-item" ><div class="link">Music</div></li>
                                <li data-filter=".photography" class="cbp-filter-item" ><div class="link">Photography</div></li>
                                <li data-filter=".magazine" class="cbp-filter-item" ><div class="link">Magazine</div></li>
                                <li data-filter=".design" class="cbp-filter-item" ><div class="link">Design</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- End Utilities -->
            </div>
        <div class="qdr-col-2 row">
            <!-- Col -->
              <div>
                <!-- Title -->
                <div class="inline-block waypoint load-with-waypoint bg-white">
                    <h1 class="extrabold-title no-pm bg-primary white px-10">Womens</h1>
                </div>
                <!-- Title -->
                <div class="inline-block waypoint load-with-waypoint bg-white">
                    <h3 class="light no-pm bg-dark white px-10 mini-py">Outfits</h3>
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
                <a v-for="outfit in outfits" v-bind:href="`/#/outfits/${outfit.id}`"  class="cbp-item art music">
                    <!-- Mark -->
                    <div class="basic-mark to-left bold uppercase font-10 radius-lg bg-info white">Weeanz</div>
                    <div class="basic-mark to-left bold uppercase font-10 radius-lg bg-info white">Boyz</div>
                    <!-- Image -->
                    <div>
                        <img v-bind:src="outfit.image" alt="">
                    </div>
                    <!-- Post Texts -->
                    <div class="xs-px xs-py xs-px-mobile bg-white bs-sm">
                        <!-- Date -->
                        <p class="font-12 underline-hover">{{ outfit.created }}</p>
                        <!-- Title -->
                        <h4 class="bold-subtitle dark">{{ outfit.name }}</h4>
                        <!-- Sender, Tag, comments -->
                        <p class="font-11">
                           By <span class="underline-hover">{{ outfit.user }}</span> | <span class="underline-hover">{{ outfit.celebrity }}</span> | <span class="underline-hover">32 Comments</span>
                        </p>
                        <!-- Post Message -->
                        <p class="xxs-mt">
                            {{ outfit.description }}
                        </p>
                    </div>
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

  
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
    data: function() {
        return {
            message: "Welcome to Vue.js!!!!",
            outfits: []
        };
    },
    created: function() {
        axios.get("http://localhost:3000/api/womens").then(response => {
            this.outfits = response.data;
        });
    },
    updated: function() {
        (function($, window, document, undefined) {
            // init cubeportfolio
            $("#posts").cubeportfolio({
                filters: "#tags",
                search: "#blog-search",
                gapHorizontal: 50,
                layoutMode: "grid",
                gapVertical: 20,
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
