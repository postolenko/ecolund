// function getSliderImgParams() {
//     $(".slider_2_img").css({
//       "width" : "auto"
//     });
//     $(".slider_2_img").css({
//       "width" : $(".slide_2_descript").offset().left + "px"
//     });
// }

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {

  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getAnimation();

});

$(document).scroll(function() {
  getAnimation();
});

$(document).ready(function() {

  getAnimation();

  if( $(".promo_slider").length > 0 ) {
      $(".promo_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendDots: $("#sl_pg")
      });
  }

  if( $(".slider_2").length > 0 ) {

    var slideImg, slideImgSrc;
    slideImg = $(".slider_2_img img");

    $('.slider_2').on('init', function(){
      slideImgSrc = $(".slider_2 .slick-current .slide_2").attr("data-imagesrc");
      slideImg.attr("src", slideImgSrc);
      slideImg.addClass("visible");
    });

    $('.slider_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      slideImg.removeClass("visible");
      slideImgSrc = $(".slider_2 .slide_2:eq("+nextSlide+")").attr("data-imagesrc");
    });

    $('.slider_2').on('afterChange', function(event, slick, currentSlide, nextSlide){
      slideImg.attr("src", slideImgSrc);
      slideImg.addClass("visible");
    });

    $(".slider_2").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendDots: $("#sl_2_controls")
    });
  }

  // -----------

  $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  $("#resp_nav .close_nav").on("click", function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
      $(".respmenubtn").removeClass("active");
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 900) {
              $("#resp_nav").fadeOut(300);
              $(".respmenubtn").removeClass("active");
      }
  });


});