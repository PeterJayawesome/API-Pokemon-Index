$(document).ready(function(){
  console.log("yeah!");
  for(var i=1; i<152; i++){
    $('#picture').append("<img id='"+i+"' src='http://pokeapi.co/media/img/"+i+".png'>");
    $('img').css("border","1px solid black");
  };
})


$(document).on('click','img',function(){
  var id = $(this).attr("id");

  $.get(("http://pokeapi.co/api/v1/pokemon/"+id+"/"),function(res) {
    console.log(res);
    $('#information').html("");
    $('#information').append("<p class='name'>"+res.name+"</p>");
    $('#information').append("<img class='pic' src='http://pokeapi.co/media/img/"+id+".png'>");
    $('#information').append("<p class='type'>Type:</p>");
    $('#information').append("<ul></ul>");
    for(var i=0; i< res.types.length; i++){
      $('#information ul').append("<li>"+res.types[i].name+"</li>");
    }
    $('#information').append("<p class='name'>height:"+res.height+"</p>");
    $('#information').append("<p class='name'>height:"+res.weight+"</p>");
  },"json");

})
