$(document).ready(function(){
    bannerSize();
});

$(window).resize(function(){
    bannerSize();
});

function bannerSize()
  {
    if ($(window).width() <= 767)
    {
      var bannerHeight = $(window).height()-60;
      $('#carousel .carousel-item').css('height', bannerHeight);
    }
    else
    {
      var bannerHeight = $(window).height()-90;
      $('#carousel .carousel-item').css('height', bannerHeight);
    }
  }