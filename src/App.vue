<template>
  <div id="app">


    <!-- LOADER -->
    <div class="page-loader bg-white">
        <div class="v-center t-center">
            <div class="spinner">
                <div class="spinner__item1 bg-dark"></div>
                <div class="spinner__item2 bg-dark"></div>
                <div class="spinner__item3 bg-dark"></div>
                <div class="spinner__item4 bg-dark"></div>
            </div>
        </div>
    </div>

    <!-- PAGETOP -->
    <div id="pagetop">
        <div class="container">
            <!-- Left texts -->
            <div class="left font-12">
                <a href="tel:000000" class="colored-hover">+01 234 567 890</a>
                <a href="mailto:support@goldeyestheme.com" class="colored-hover" data-toggle="tooltip" data-placement="bottom" title="Send us an e-mail">info@goldeyestheme.com</a>
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
    <!--END PAGETOP -->



  <nav id="navigation" class="dark-nav logo-centered static shrink modern hover4 border dotted radius-drop" data-offset="70">
    <div class="columns clearfix container">
        <div class="nav-menu f-left">
            <ul class="nav clearfix font-12 bold uppercase">
              <li><a href="index.html">Mens</a></li>
               <li><a href="index.html">Womens</a></li>
               <li><a href="index.html">stuff</a></li>
               <li><a href="index.html">stuff</a></li>
            </ul>
        </div>
        <div class="logo">
            <a href="#pagetop">
                <img src="https://ih1.redbubble.net/image.478115041.1589/raf,360x360,075,t,fafafa:ca443f4786.jpg" data-second-logo="https://ih1.redbubble.net/image.478115041.1589/raf,360x360,075,t,fafafa:ca443f4786.jpg" class="m-auto" alt="Quadra Logo">
            </a>
        </div>
        <div class="nav-menu f-right">
            <ul class="nav clearfix font-12 bold uppercase">
              <li><a href="index.html">Signup</a></li>
              <li><a href="index.html">Login</a></li>
              <li><a href="#" class="search-form-trigger"><i class="fa fa-search"></i></a></li>
            </ul>
        </div>
    </div>
  </nav>


<router-view />



    <footer id="footer" class="classic_footer">
        <!-- Container -->
        <div class="footer-body container">
            <div class="row clearfix">
                <!-- Column -->

                <!-- Column -->
                <div class="col-md-3 col-sm-6 col-xs-12 sm-mb-mobile">
                    <h6 class="uppercase white extrabold sm-mb">Instagram Feed</h6>
                    <!-- Instagram Feed - You can create a Client ID on here: https://instagram.com/developer/
                        And get your access token on here: https://instagram.com/developer/authentication/ -->
                    <div id="instafeed" class="sm-mt qdr-col-3 gap-2" data-count="6" data-userid="user_id" data-clientid="client_id" data-accesstoken="access_token"><div class="will-remove"><img src="images/loader1.gif" alt="instagram loader"></div></div>
                    <!-- Sub Title -->
                    <h6 class="xxs-mt bold gray8">STALK US</h6>
                    <p class="mini-mt">
                        <a href="https://www.instagram.com/gldeyes/" target="_blank" class="mini-mt underline-hover gray6-hover">
                            You can get Quadra news from our instagram profile: @gldeyes
                        </a>
                    </p>
                </div>
                <!-- End Column -->
                <!-- Column -->
                <!-- End Column -->
                <!-- Column -->
                <div class="col-md-3 col-sm-6 col-xs-12 ">
                    <!-- Title -->
                    <h5 class="uppercase white extrabold no-pm">SUBSCRIBE US</h5>
                    <!-- Sub Title -->
  
                    <!-- End Form -->
                    <h6 class="xs-mt xxs-mb bold gray8">FOLLOW US</h6>
                    <a href="#" class="icon-xs radius bg-dark facebook white-hover slow1"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="icon-xs radius bg-dark twitter white-hover slow1"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="icon-xs radius bg-dark instagram white-hover slow1"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="icon-xs radius bg-dark pinterest white-hover slow1"><i class="fa fa-pinterest"></i></a>
                </div>
                <!-- End Column -->
            </div>
        </div>
        <!-- End Container -->
        <!-- Footer Bottom -->

    </footer>


    <div class="fs-searchform">
        <form id="fs-searchform" class="v-center container" action="pages-search-results.html" method="get">
            <!-- Input -->
            <input type="search" name="q" id="q" placeholder="Search on website.com" autocomplete="off">
            <!-- Search Button -->
            <button type="submit">
                <i class="fa fa-search"></i>
            </button>
            <div class="recommended font-14 normal">
                <h5 class="rcm-title">Recommend Links;</h5>
                <a href="demo-antares.html">Quadra, Antares version</a>
                <a href="demo-athena.html">Beautiful Athena demo</a>
                <a href="elements-all.html">Awesome Quadra Elements</a>
                <a href="demo-feronia.html">Why i will use the Quadra?</a>
                <a href="demo-sun.html">Checkout the Sun demo</a>
                <a href="index.html">See 700+ templates</a>
            </div>
        </form>
        <div class="form-bg"></div>
    </div>


</div>

</template>

<style></style>
