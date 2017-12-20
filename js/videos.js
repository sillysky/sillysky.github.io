

$(document).ready(function() {
	$('.update').click(function() {
		 var counterEl = $(this).next('.counter'),
		 counter = 0;
		 if(counterEl.text() != "_ _ _ _") {
		 	counter = parseInt(counterEl.text());
		 }
		 counterEl.text(counter+1);
	});
});
