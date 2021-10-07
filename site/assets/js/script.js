(function ($) {
  'use strict';

  //自定義
  if($(window).width() > 991){
    largeVerDropdownSet();
  }
  else{
    $("#navogation .dropdown-menu")
    .css("margin",0)
    // .addClass("text-left")

    $("#navogation .dropdown-menu ul")
    .css("padding",0);
  }

  $(window).on('resize', function () {
    if($(window).width() >= 991){
      // $("#navogation .dropdown-menu").removeClass("text-left")
      largeVerDropdownSet();
    }
    else{
      $("#navogation .dropdown-menu")
      // .addClass("text-left")
      .css("position","static")
      .width($("header").width()-40-16)
      .css("top","100%")
      .css("margin",0)
      .removeClass("d-flex");

      $("#navogation .dropdown-menu ul")
      .css("padding",0);
    }
  });

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(300);
  });

  // headroom js
  $('.navigation').headroom();

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  $('.featured-post-slider').slick({
    dots: false,
    speed: 300,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Masonry
  setTimeout(function(){
    $('.masonry-container').masonry({
      itemSelector: '.masonry-container > div',
      columnWidth: 1
    });
  }, 500);


  // instafeed
  if (($('#instafeed').length) !== 0) {
    var accessToken = $('#instafeed').attr('data-accessToken');
    var userFeed = new Instafeed({
      get: 'user',
      resolution: 'low_resolution',
      accessToken: accessToken,
      template: '<a class="instagram-post" href="{{link}}" target="_blank"><img class="img-fluid w-100" src="{{image}}" alt="instagram-image"></a>'
    });
    userFeed.run();
  }

  setTimeout(function () {
    $('.instagram-slider').slick({
      dots: false,
      speed: 300,
      autoplay: true,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  }, 1500);

  // article reading time
  $('article').each(function () {

    let _this = $(this);

    _this.readingTime({
      readingTimeTarget: _this.find('.eta'),
      remotePath: _this.attr('data-file'),
      remoteTarget: _this.attr('data-target')
    });
  });

  function largeVerDropdownSet(){
    $("#navogation .dropdown-menu")
      .width($(window).width())
      .css("position","fixed")
      .css("top",$("header").height()+10)
      .addClass("d-flex");
    $("#navogation .dropdown-menu ul")
      .removeAttr("style");
    $(window).on('scroll', function () {
      if($("header").offset().top>=$("header").height())
        $("#navogation .dropdown-menu").fadeOut(300);
      else
        $("#navogation .dropdown-menu").fadeIn(300);
    });
  }


})(jQuery);
