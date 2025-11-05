(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.my_custom_basic = {
    attach: function (context, settings) {


      /**** hamburger  **********/

      $("body").addClass("close-menu");
      $("#menu-toggle").unbind('click').bind('click', function (e) {
        if ($("body").hasClass("open-menu")){
          $("body").removeClass("open-menu");
          $("body").addClass("close-menu");
        }
        else {
          $("body").addClass("open-menu");
          $("body").removeClass("close-menu");
        }
      });

      $(".layout-center").unbind('click').bind('click', function (e) {
          $("body").removeClass("open-menu");
          $("body").addClass("close-menu");

      });
    
      $("body").unbind('click').bind('click', function (e) {
        if(!$(e.target).closest($(".menu-wrapper")).length) {
          if(!$(e.target).closest($("#menu-toggle")).length) {
            $("body").removeClass( "open-menu" );
            $("body").addClass( "close-menu" );
          }
        }
      });
    

 /******  input & textarea ********/


$("input").on("input",function(){
  if($(this).val() != ''){
    $(this).parent().addClass("input-full");
  } else {
    $(this).parent().removeClass("input-full");
  }
});

$("input").each(function(){
  if($(this).val() == ''){
    $(this).parent().removeClass("input-full");
  }
  else{
    $(this).parent().addClass("input-full");
  }
});

$("input").blur(function(){
  if($(this).val() == ''){
    $(this).parent().removeClass("input-full");
  }
  else{
    $(this).parent().addClass("input-full");
  }
});


$("textarea").on("input",function(){
if($(this).val() != ''){
  $(this).parent().parent().addClass("input-full");
} else {
  $(this).parent().parent().removeClass("input-full");
}
});

$("textarea").each(function(){
  if($(this).val() == ''){
    $(this).parent().parent().removeClass("input-full");
  }
  else{
    $(this).parent().parent().addClass("input-full");
  }
});

$("textarea").blur(function(){
  if($(this).val() == ''){
    $(this).parent().parent().removeClass("input-full");
  }
  else{
    $(this).parent().parent().addClass("input-full");
  }
});


      /********  link active   ***********/

     var path = window.location.href; 
     $('a').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });



        /********  scroll ********/

        var scroll_pos = 0;
        $(document).scroll(function(e) {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 0) {
              $("body").addClass('scroll');
              $("body").removeClass('not-scroll');
            }
            else {
              $("body").removeClass('scroll');
              $("body").addClass('not-scroll');
            }
        });

        var screenTop = $(document).scrollTop();
        if (screenTop > 0){
              $("body").addClass('scroll');
        } else{
              $("body").addClass('not-scroll');
        }



     }
  };

})(jQuery, Drupal);