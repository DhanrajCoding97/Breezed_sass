$(document).ready(function() {
  //for hamburger
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    $('body').toggleClass('hidden');
  })

  //go down btn
  $('.go-down-btn').click(function(){
    var nextSection = $(this).closest('section').next('section');
    $('html, body').animate({
      scrollTop: $(nextSection).offset().top
    }, 1500);
});
});