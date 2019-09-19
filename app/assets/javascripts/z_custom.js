$(document).ready(function(){
    bannerSize();

    //Fixed Header

    $(window).scroll(function()
    {
      if ($(window).scrollTop() >= '10')
      {
        $('#header-bg').addClass('fixed-header');
      }
      else
      {
        $('#header-bg').removeClass('fixed-header');
      }

    });
});

$(window).resize(function(){
    bannerSize();
});

function bannerSize(){
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
