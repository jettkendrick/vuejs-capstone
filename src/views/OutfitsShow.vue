<template>
  <div class="home">
    <div class="container">
        <div id="pagetop">
        <div class="container">
            <!-- Left texts -->
            <div class="left font-12">
                <a href="tel:000000" class="colored-hover">+1 800 blog boyz</a>
                <a href="mailto:support@goldeyestheme.com" class="colored-hover" data-toggle="tooltip" data-placement="bottom" title="Send us an e-mail">#BoyzWhoCode</a>
            </div>
            <!-- Right, socials -->
            <div class="right clearfix">
                <a href="#" target="_blank" class="fa fa-twitter twitter"></a>
                <a href="#" target="_blank" class="fa fa-pinterest pinterest"></a>
                <a href="#" target="_blank" class="fa fa-instagram instagram"></a>
                <a href="#" target="_blank" class="fa fa-envelope mail"></a>
                <a href="#" target="_blank" class="fa fa-facebook facebook"></a>
            </div>
        </div>
    </div>


                <div class="container gray7 zi-4">

                    <!-- Slider -->
                    <div class="custom-slider container no-px block-img qdr-controls c-move sm-mt border-5 border-gray" data-slick='{"arrows":true, "fade": true, "draggable":true, "slidesToShow": 1, "slidesToScroll": 1, "responsive":[{"breakpoint": 1024,"settings":{"slidesToShow": 1}},{"breakpoint": 600,"settings":{"slidesToShow": 1}}]}'>
                        <img v-bind:src="outfit.image" alt="Responsive image" />
                    </div>
                    <!-- End Slider -->
                    <h3 class="bold-subtitle dark sm-mt">
                        {{ outfit.name }}
                    </h3>
                    <p class="xs-mt">
                        {{ outfit.description }}
                    </p>
                </div>
                <!-- lightbox gallery -->
                <div class="qdr-col-3 gap-3 lightbox_gallery">
                    <div v-for="product in outfit.products">
                        <a v-bind:href="product.product_url" class="thumbnail-img block-img" data-iframe="true">
                            <img v-bind:src="product.image" alt="">
                            <div class="img-overlay"><div class="overlay-wrap"><i class="fa fa-expand font-20"></i></div></div>
                        </a>
                    </div>
                </div>




<!--       <div id="lightboxes" class="container mt t-center mb">
                      <div class="qdr-col-3 gap-3 lightbox_gallery">
                        <div>
                            <a v-for="product in outfit.products" v-bind:href="product.product_url" class="thumbnail-img block-img" data-iframe="true"> 
                                <img v-bind:src="product.image" alt="">
                                <div class="img-overlay">
                                  <div class="overlay-wrap">
                                      <i class="fa fa-expand font-20"></i>
                                  </div>
                                </div>
                            </a>
                        </div>
                      </div>
      </div> -->
      <!-- lightbox gallery end -->
                  <div class="divider-1 container sm-mt xs-mb">
                  </div>
                <div class="container-sm block-img clearfix bt-1 border-gray2 sm-pt sm-mt">

                    <!-- Row for cols -->
                    <div class="row">

                        <!-- Sender Img -->
                        <div class="col-1 hidden-sm no-pm">
                            <img src="images/clients/avatar_06.jpg" alt="user avatar" class="circle">
                        </div>
                        <!-- Texts -->
                        <div class="col-11">
                            <h4 class="bold-subtitle dark">JETTTTTTT</h4>
                            <p class="xxs-my gray7">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth the master rationally encounter consequences that are extremely painful
                            </p>
                            <a href="#" class="md-btn border-btn border-gray4 font-10 bold uppercase bg-colored-hover white-hover slow qdr-hover-4 bs-light-hover radius-lg">
                                All Author Posts
                            </a>
                        </div>
                    </div>

                    <!-- End Row for cols -->
                </div>
        <div class="divider-1 container sm-mt xs-mb">
          <span class="h3 merriweather italic light colored1">Recommendations</span>
        </div>
    <section class="py  bg-gray border-1 border-gray2">

        <!-- Container for form -->
        <div class="container-sm">
            <!-- Form -->
            <div id="form" class="t-center gray7">
                <!-- Contact Form -->
                <form id="contact_form" name="contact_form" method="post" action="php/mail.php">
                    
                    <!-- Half Inputs -->
                    <div class="half clearfix">
                        <!-- Name -->
                        <input type="text" name="name" id="name" required placeholder="Name" class="classic_form big radius-lg bg-gray2 bs-light-focus">
                        <!-- Email -->
                        <input type="text" name="image" id="image" required placeholder="image" class="classic_form big radius-lg bg-gray2 bs-light-focus">
                    </div>
                    <!-- Subject -->
                    <input type="text" name="website" id="website" required placeholder="website" class="classic_form big radius-lg bg-gray2 bs-light-focus">
                    <!-- Message -->
                    <textarea name="message" id="message" placeholder="Message" class="classic_form large radius bg-gray2 bs-light-focus"></textarea>
                    <!-- Send Button -->
                    <button type="submit" id="submit" class="bg-colored1 xl-btn font-12 long-btn xxs-mt slow width-auto click-effect white bold qdr-hover-6 radius-lg">SEND MESSAGE</button>
                </form>
                <!-- End Form -->
            </div>
            <!-- End #form div -->
        </div>

    </section>
    </div>
  </div>
</template>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top: 50px;
  padding-bottom: 30px;
}

</style>

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
  updated: function() {
    console.log("updated...");
    //*********************************************
    //  LIGHTBOXES
    //*********************************************
        //Lightbox Gallery Class for containers. All "a" links will work for lightbox with click.
        //Also you can add .no-lightbox claass for no-lightbox links.
        $.fn.callLightboxGallery = function() {
            $('.lightbox_gallery').lightGallery({
                selector: 'a:not(.no-lightbox)',
                download: true,
                speed: 400,
                loop: true,
                controls: true,
                thumbWidth: 100,
                thumbContHeight: 100,
                thumbnail: true,
                thumbMargin: 8,
                share: true,
                cssEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                loadYoutubeThumbnail: true,
                youtubeThumbSize: 'default',
                iframeMaxWidth: '75%',
                loadVimeoThumbnail: true,
                vimeoThumbSize: 'thumbnail_medium',
                youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0, controls: 0 },
                vimeoPlayerParams: { byline : 0, portrait : 0, color : 'A90707' }
            });
            $('.lightbox_gallery:not(.no-lightbox)').addClass('lightboxed');
        }
        if ($(".lightbox_gallery").exists()) { $(window).callLightboxGallery(); }

        //Only .lightbox_selected classes will work in .lightbox_selected container
        $.fn.callLightboxSelected = function() {
            $('.lightbox_selected').lightGallery({
                selector: 'a.lightbox_item',
                download: true,
                speed: 500,
                loop: true,
                controls: true,
                thumbWidth: 100,
                thumbContHeight: 100,
                thumbMargin: 8,
                thumbnail: true,
                share: true,
                cssEasing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                loadYoutubeThumbnail: true,
                youtubeThumbSize: 'default',
                loadVimeoThumbnail: true,
                iframeMaxWidth: '75%',
                vimeoThumbSize: 'thumbnail_medium',
                youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0, controls: 0 },
                vimeoPlayerParams: { byline : 0, portrait : 0, color : 'A90707' }
            });
        }
        if ($(".lightbox_selected").exists()) { $(window).callLightboxSelected(); }

        //You can add .lightbox classes to single elements
        $.fn.callLightbox = function() {
            $('.lightbox').lightGallery({
                selector: 'this',
                download: true,
                thumbWidth: 100,
                thumbContHeight: 100,
                thumbnail: true,
                share: true,
                loadYoutubeThumbnail: true,
                youtubeThumbSize: 'default',
                iframeMaxWidth: '75%',
                loadVimeoThumbnail: true,
                youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0, controls: 0 },
                vimeoPlayerParams: { byline : 0, portrait : 0, color : 'A90707' }
            });
        }
        if ($(".lightbox").exists()) { $(window).callLightbox(); }

  },
  methods: {},
  computed: {}
};
</script>
