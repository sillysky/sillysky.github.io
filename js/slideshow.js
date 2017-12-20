function cycleItems(currentIndex) {
  var item = $('.demo div img').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
  };


$(document).ready(function() {
  var currentIndex = 0;
  items = $('.demo div img');
  itemAmt = items.length;

  var autoSlide = function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems(currentIndex);
};

  var autoSlideStart = setInterval(autoSlide, 1500 );

  $('.next').click(function() {
  clearInterval(autoSlideStart);
  $('.play').removeClass("fa-pause");
  $('.play').addClass("fa-play");
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems(currentIndex);
});

$('.prev').click(function() {
  clearInterval(autoSlideStart);
  $('.play').removeClass("fa-pause");
  $('.play').addClass("fa-play");
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems(currentIndex);
});

$('.play').click(function(){
  $('.dot').removeClass('active');
  if($(this).hasClass("fa-play")) {
    $(this).removeClass("fa-play");
    $(this).addClass("fa-pause");
    clearInterval(autoSlideStart);
    autoSlideStart = setInterval(autoSlide, 1200);
  } else {
    $(this).removeClass("fa-pause");
    $(this).addClass("fa-play");
    clearInterval(autoSlideStart);
  }
  // $(this).toggleClass("fa-play");
  // $(this).toggleClass("fa-pause");
  // clearInterval(autoSlideStart);
  // autoSlideStart = setInterval(autoSlide, 1200);
  });

$('.dot').click(function(){
  clearInterval(autoSlideStart);
  var imageId = $(this).attr('id');

   $('.dot').removeClass('active');
   $(this).addClass('active');

    if(imageId=="first"){
      currentIndex=0;
      cycleItems(currentIndex);
    }
    else if(imageId=="second"){
      currentIndex=1;
      cycleItems(currentIndex);
    }

    else if(imageId=="third"){
      currentIndex=2;
      cycleItems(currentIndex);
    }
   });

$('.container').mouseover(function(){
  $('.icons').show();
});

$('.container').mouseout(function(){
  $('.icons').hide();
});

});

/*$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});*/