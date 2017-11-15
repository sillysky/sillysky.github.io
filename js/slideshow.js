function cycleItems(currentIndex) {
  var item = $('.container div img').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
  };


$(document).ready(function() {
  var currentIndex = 0;
  items = $('.container div img');
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
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems(currentIndex);
});

$('.prev').click(function() {
  clearInterval(autoSlideStart);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems(currentIndex);
});

$('.play').click(function(){
  $('.dot').removeClass('active');
  clearInterval(autoSlideStart);
  autoSlideStart = setInterval(autoSlide, 1200);
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