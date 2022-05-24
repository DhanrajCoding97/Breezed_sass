$(document).ready(function() {
  //for hamburger
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('body').toggleClass('hidden');
    $('.slick-prev').toggleClass('active');
  })

  //go down btn
  $('.go-down-btn').click(function(){
    var nextSection = $(this).closest('section').next('section');
    $('html, body').animate( { scrollTop: $(nextSection).offset().top }, 1500);
  });

  //slick slider
  function slickSlider(sliderHolder, $dots, $arrows, $slideToShow, $slidesToScroll) {
    sliderHolder.slick({
      dots: $dots,
      arrows: $arrows,
      infinite: true,
      speed: 400,
      slidesToShow: $slideToShow,
      slidesToScroll: $slidesToScroll,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });
  }

  slickSlider($('.banner-slider'), false, true, 1, 1);  
  slickSlider($('.team-cards'), true, false, 3, 3);  
});