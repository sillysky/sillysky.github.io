
var template = function(wishes,recipient) {
  return '<p><i class="fa fa-heart"></i><span>' + wishes + '-' + recipient +'</span><i class="fa fa-times"></i></p>';
};

var icon = function(heartList, removeList){
  heartList.on('click',function(){
      $(this).toggleClass('active');  
    });
  removeList.on('click',function(){
      $(this).parent('p').remove();   	     
    });
  };



$(document).ready(function() {
		$('form').submit(function() {    
    var wishes = $('input[id=wishes]').val();
    var recipient = $('input[id=recipient]').val();
    if(wishes !== "" && recipient !== "" ) {
      var html =template(wishes, recipient);
      var newItem = $('div.list').append(html);
      icon(newItem.find('i.fa-heart'), newItem.find('i.fa-times'));
      $('#wishes').val("");
      $('#recipient').val("");
    }  
    return false;   
  });	
  icon($('i.fa-heart'), $('i.fa-times'));
});