(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

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