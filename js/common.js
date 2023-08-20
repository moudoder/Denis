$(document).ready(function () {


  $('.news-slider').slick({
  	infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
  })

  $('.news .slick-dots').wrap('<div class="dots-wrapper" />'); 

  $('.news .dots-wrapper').prepend('<div class="news-prev news-arrow" href="#"><img src="img/slider-arrow.svg" alt=""></div>');
  $('.news .dots-wrapper').append('<div class="news-next news-arrow" href="#"><img src="img/slider-arrow.svg" alt=""></div>');

  $('.news-prev').on('click', function() {
  	$('.news-slider').slick('slickPrev');
  	return false;
  })
  $('.news-next').on('click', function() {
  	$('.news-slider').slick('slickNext');
  	return false;
  })
})