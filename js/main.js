var sf, body;
var breakpoint = 650;
jQuery(document).ready(function($) {
  body = $('body');
  sf = $(".main-menu");
  if(body.width() >= breakpoint) {
    // enable superfish when the page first loads if we're on desktop
    sf.superfish();
  }
  $(window).resize(function() {
    if(body.width() >= breakpoint && !sf.hasClass('sf-js-enabled')) {
      // you only want SuperFish to be re-enabled once (sf.hasClass)
      sf.superfish('init');
    } else if(body.width() < breakpoint) {
      // smaller screen, disable SuperFish
      sf.superfish('destroy');
    }
  });
});

$(".main-menu__link--has-children").click(function(){
  $(this).next(".main-menu--level-2").toggleClass("main-menu--level-2--visible");
  $(this).toggleClass("main-menu__link--active");
});
