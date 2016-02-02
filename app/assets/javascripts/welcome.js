$(function(){
  var subtitle = $("#head-jumbotron-subtitle");
  $('.head-jumbotron').hover(function(){
    subtitle.html("Give me 5 minutes to introduce myself.")
  }, function() {
    subtitle.html("A Web Developer, Coffee Lover & Traveller.")

  });
});