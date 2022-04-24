$(document).ready(function () {
  "use strict";

  // banner-slider;

  $(".banner-slider").slick({
    prevArrow: '<i class="fa-solid fa-chevron-left slick-prev left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slick-next right-arrow"></i>',
  });

  //   branding slider;
  $(".brand-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-chevron-left slick-prev left-arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right slick-next right-arrow"></i>',
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
