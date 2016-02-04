$(function(){
  var title = $(".jumbotron div h1");
  var subtitle = $(".jumbotron div h3");
  var button = $(".jumbotron div a");
  $('.jumbotron').hover(function(){
    title.animate({
      height: '200px',
      width: '200px'
    }, function(){
      title.css({"background-color": "#888888", "opacity": "0.8"});
    });
  });
});
