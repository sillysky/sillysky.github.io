var counter=0;

function like(counter){
 $('#counter').text(counter);
};

$(document).ready(function() {
	$('#update').click(function() {
		counter+=1;
		like(counter);
	});
});
