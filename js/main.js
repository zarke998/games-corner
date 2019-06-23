$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
    duration: 500
  });
  
autoplay();
function autoplay() {
    $('.carousel.carousel-slider').carousel('next');
    setTimeout(autoplay, 8500);
}

$(document).ready(function(){
  $('select').formSelect();
});