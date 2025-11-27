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
              if ($('.paragraph--type--grid.grid_3.id-1 .field--name-field-items').isInViewport()) {
                var delay = 0; // Reset delay here, inside the event handler
                
                $('.paragraph--type--grid.grid_3.id-1 .field--name-field-items > .field__item').each(function(index) {
                  delay = delay + 0.3;
                  
                  if (index % 3 === 0) {
                    delay += 0.5;
                  }
                  
                  $(this).css('transition-delay', delay + 's');
                });
                
                $('.paragraph--type--grid.grid_3.id-1').addClass('inview');
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