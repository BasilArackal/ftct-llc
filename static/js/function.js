$(document).ready(function(){
  //alert("Change log: imgCarousel");
  $('li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});


 });
