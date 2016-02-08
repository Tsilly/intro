$(function(){
  var title    = $(".jumbotron div h1");
  var subtitle = $(".jumbotron div h3");
  var button   = $(".jumbotron div a");
  var intro    = $(".intro");
  var coding   = $(".coding");
  var lanCode    = $(".lan-code");
  var interests   = $(".interests");

  title.hide();
  subtitle.hide();
  button.hide();
  intro.hide();
  coding.hide();
  lanCode.hide();
  interests.hide();

  title.fadeIn(500, function(){
    subtitle.fadeIn(800, function(){
      button.fadeIn(500);
    });
  });

  $(window).scroll(function(){
    // var height = $(this).scrollTop();
    var speed  = 1500;
    intro.fadeIn(speed, function(){
      coding.fadeIn(speed, function(){
        lanCode.fadeIn(speed, function(){
          interests.fadeIn(speed);
        });
      });
    });
  });
});
