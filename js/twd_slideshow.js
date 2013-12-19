
/* Js DEMO 1 | Opacity Slideshow*/
$(document).ready(function() {
  $("#twd_opa_controls").on('click', 'span', function() {
    $("#twd_opa img").removeClass("opaque");

    var newImage = $(this).index();

    $("#twd_opa img").eq(newImage).addClass("opaque");

    $("#twd_opa_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});


/* Js DEMO 2 : Flip Slideshow */
$(document).ready(function() {
  $('#slide_flip_controls').on('click', 'span', function(){
    $("#slide_flip_images").css("transform","translateX("+$(this).index() * -600+"px)");
    $("#slide_flip_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});