
$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');
    $dropdown=$('.nav ul')
  
$menulink.click(function() {
    $menu.toggleClass('active');
  return false;
});

$(".sub-menu-link").click(function(){
  $menu.removeClass("active");
});

var shiftWindow = function() { scrollBy(0, -20) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

$(".fixedmenu li a").click(function(){
    var str = $(this).index();
    $(".fixedmenu li a").removeClass("active");
   $(this).addClass( "active" );
});

var nav = $('.fixedmenu');

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    nav.addClass("f-nav");
  } else {
    nav.removeClass("f-nav");
  }
});

});



