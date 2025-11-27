(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

            $.fn.isInViewport = function() {
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();

              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();

              return elementBottom > viewportTop && elementTop < viewportBottom;
            };

            $(window).on('resize scroll', function() {
              if ($('.paragraph--type--grid .field--name-field-items').isInViewport()) {
                $('.paragraph--type--grid .field--name-field-items .field__item').each(function(index) {
                var delay = 0.8 + (index * 0.5);
                $(this).css('animation-delay', delay + 's');
              });
                $('.paragraph--type--grid').addClass('inview');
              } else {
                $('.paragraph--type--grid').removeClass('inview');
              }
            });

			$(".header .field--name-field-link a").on('click',function(e) {
				var url = e.target.href;
				var hash = url.substring(url.indexOf("#")+1);
				$('html, body').animate({scrollTop: $('#'+hash).offset().top - 90}, 500);
        $("body").removeClass("open-menu");
				return false;
			});

     }
  };

})(jQuery, Drupal);