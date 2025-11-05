(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.owl = {
    attach: function (context, settings) {
      
      let isRtl = false;
      if ($("html").attr("dir")=="rtl") {
        isRtl = true;
      }

    if ($(window).width()<769){
      if ($(".page-node-type-lp-new .paragraph--type--grid .field--name-field-items > .field__item").length > '1') {
        $(".page-node-type-lp-new .paragraph--type--grid .field--name-field-items").owlCarousel({
              rtl: isRtl,
              autoplay:false,
              loop:false,
              margin:20,
              dots: false,
              nav: true,
              navRewind: false,
              rewindNav: false,
              items: 1,
              slideBy: 1,
        });
      }
    }
  $(window).resize(function() {
      if ($(window).width()>768){
        $(".page-node-type-lp-new .paragraph--type--grid .field--name-field-items").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $(".page-node-type-lp-new .paragraph--type--grid .field--name-field-items").find('.owl-stage-outer').children().unwrap();
      } else {
        if ($(".page-node-type-lp-new .paragraph--type--grid .field--name-field-items > .field__item").length > '1') {
          $(".page-node-type-lp-new .paragraph--type--grid .field--name-field-items").owlCarousel({
              rtl: isRtl,
              autoplay:false,
              loop:false,
              margin:20,
              dots: false,
              nav: true,
              navRewind: false,
              rewindNav: false,
              items: 1,
              slideBy: 1,
          });
        }
      }
  });

    if ($(window).width()<769){
      if ($(".field--name-field-four-images > .field__item").length > '1') {
        $(".field--name-field-four-images").owlCarousel({
              rtl: isRtl,
              autoplay:false,
              loop:false,
              margin:20,
              dots: false,
              nav: true,
              navRewind: false,
              rewindNav: false,
              items: 1,
              slideBy: 1,
        });
      }
    }
  $(window).resize(function() {
      if ($(window).width()>768){
        $(".field--name-field-four-images").trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $(".field--name-field-four-images").find('.owl-stage-outer').children().unwrap();
      } else {
        if ($(".field--name-field-four-images > .field__item").length > '1') {
          $(".field--name-field-four-images").owlCarousel({
              rtl: isRtl,
              autoplay:false,
              loop:false,
              margin:20,
              dots: false,
              nav: true,
              navRewind: false,
              rewindNav: false,
              items: 1,
              slideBy: 1,
          });
        }
      }
  });
  
      //example
      /*

      $('.paragraph--type--content .gallery').each(function() {
        if ($(this).children(".views-row").length > '1') {
          $(this).owlCarousel({
            rtl: isRtl,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            loop:true,
            margin:0,
            nav: true,
            dots: false,
            navRewind: false,
            items: 1,
            singleItem: true,
            lazyLoad: true

          });
        }
    });

*/


     }
  };

})(jQuery, Drupal);

