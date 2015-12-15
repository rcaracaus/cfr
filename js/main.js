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





(function($){

  $('#getting-started').countdown('2015/01/01', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
  });

  $('.banner__time').countdown('2016/01/29').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
       + '<span>%-m</span>M '
       + '<span>%-w</span>W '
       + '<span>%-d</span>D '
       + '<span>%H</span>H '
       + '<span>%M</span>M '
       + '<span>%S</span>S'));
  });

})(jQuery);

