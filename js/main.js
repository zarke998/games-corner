// Init carousel(bootstrap)
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

// Init select(materialize)
$(document).ready(function(){
  $('select').formSelect();
});
// Init mareliaboxed (materialize)
$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


// RGB Switch
$(document).ready(function(){
  $("#rgbSwitch input[type='checkbox'").change(function(){
    if(this.checked){
      $(".seperator-wrapper").css("display", "block");
      $(".headerNav").css("border-bottom-style", "hidden");
      $("#footer").css("border-top-style", "hidden");
    }
    else{
      $(".seperator-wrapper").css("display", "none");
      $(".headerNav").css("border-bottom-style", "solid");
      $("#footer").css("border-top-style", "solid");
    }
    });
});
     
// Init noui-slider
var nonLinearStepSlider = document.getElementById('noui-slider');

noUiSlider.create(nonLinearStepSlider, {
    start: [20, 99],
    connect: true,
    range: {
        'min': [0],
        '10%': [10, 5],
        'max': [150]
    }
});

var nonLinearStepSliderValueElement = document.getElementById('noui-slider-values');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});



