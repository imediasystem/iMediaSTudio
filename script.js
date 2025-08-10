// jQuery FadeIn Section //

$(document).ready(function(){
    $(".banner h1, .banner a, .logo").hide();
    $(".logo").fadeIn();
    $(".banner a").fadeIn("slow");
    $(".banner h1").fadeIn(3000);
});