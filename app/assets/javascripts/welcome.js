$(function(){
  var title = $(".jumbotron div h1");
  var subtitle = $(".jumbotron div h3");
  var button = $(".jumbotron div a");
  $('.jumbotron').hover(function(){

    title.animate({
      width: '200px',
      opacity: 0.6
    }, function(){
      title.css({"background-color": "#484848", "opacity": "0.8", color: "#F8F8F8"});
      subtitle.css({"color": "#F8F8F8"});
    }

    );
  });
});
