// function getSliderImgParams() {
//     $(".slider_2_img").css({
//       "width" : "auto"
//     });
//     $(".slider_2_img").css({
//       "width" : $(".slide_2_descript").offset().left + "px"
//     });
// }

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {

  // getSliderImgParams();

});

$(document).scroll(function() {



});

$(document).ready(function() {

  // getSliderImgParams();

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

    $('.slider_2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      slideImg = $(".slider_2_img img");
      slideImgSrc = $(".slider_2 .slide_2:eq("+nextSlide+")").attr("data-imagesrc");
      // slideImg.removeClass("visible");
      slideImg.attr("src", slideImgSrc);
      // setTimeout(function() {
      //   slideImg.addClass("visible");
      // }, 700);
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
        // appendDots: $("#sl_pg")
    });
  }

});