
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

var onScroll = function(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    nav.addClass("f-nav");
  } else {
    nav.removeClass("f-nav");
  }
  $(document).on("scroll", onScroll);
});



});



