$(document).ready(function() {
  $('.list').hide();
  $('.menu-button').on('click', function () {
    $('.list').slideToggle();
  });
  $('.list a').on('click', function () {
    $('.list').slideUp();
  });


  $('.slideshow').slick({
    dots: false,
    infinite: true,
  	speed: 1000,
  	slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });


});
