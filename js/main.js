// var headerNavBar = $("#headerNavBar");
// var headerNavBarHeight = headerNavBar.css("height");

$(document).ready(function(){
  initializeCarousel(); // Init carousel(bootstrap)

  $('select').formSelect(); // Init select(materialize)
  $('.materialboxed').materialbox();  // Init mareliaboxed (materialize)

  $("#rgbSwitch input[type='checkbox'").change(function(){  //Add RGB switch on change function
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

  initializeNoUiSlider();

  // $(document.body).css("padding-top", headerNavBarHeight);
  // updateFixedNavPadding(); 
});


function initializeCarousel(){
  $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      duration: 500
    });
    
    autoplayCarousel();
}
function autoplayCarousel(){
  $('.carousel.carousel-slider').carousel('next');
  setTimeout(autoplayCarousel, 8500);
}

// function updateFixedNavPadding(){
//   if (headerNavBar.css('height') != headerNavBarHeight)
//   {
//       headerNavBarHeight = headerNavBar.css('height'); 
//       $(document.body).css("padding-top", headerNavBarHeight);
//   }

//   setTimeout(updateFixedNavPadding, 500);
// }

function initializeNoUiSlider() {
  var nonLinearStepSlider = document.getElementById('noui-slider');

  try{
    noUiSlider.create(nonLinearStepSlider, {
      start: [20, 99],
      connect: true,
      range: {
          'min': [0],
          '10%': [10, 5],
          'max': [150]
      }
    });
  }
  catch(err){
  }
  

  var nonLinearStepSliderValueElement = document.getElementById('noui-slider-values');

  try{
    nonLinearStepSlider.noUiSlider.on('update', function (values) {
      nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
    });
  }
  catch(err){
  }
    
}




