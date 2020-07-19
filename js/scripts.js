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

});