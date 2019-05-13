$("ul").on("click","li",function(){
  $(this).toggleClass("completed")
})


$('ul').on('click','span',function(event){
  $(this).parent().fadeOut(500,function(){ //fadeOut on li
    $(this).remove();
  });
  event.stopPropagation();
})
$('ul').on('mouseover','span',function(){
  this.style.display;
}).on('click','span',function(){
  this.style.display = "none";
})

$("input[type='text']").on('keypress',function(enter_key){

//if enter key is pressed then add the list
  if(enter_key.which === 13)
  {
    var text = $(this).val(); // extract the text
    $(this).val("");
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i> </span> "+text+"</li>");
  }

})
