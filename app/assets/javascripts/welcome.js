$(function(){
  var title = $(".jumbotron div h1");
  var subtitle = $(".jumbotron div h3");
  var button = $(".jumbotron div a");
  $('.jumbotron').hover(function(){
    title.animate({
      height: '200px',
      width: '200px'
    }, function(){
      title.css({"background-color": "#E0E0E0", "opacity": "0.8"});
      subtitle.css({"color": "#F5F5F5"});
    });
  });
});
