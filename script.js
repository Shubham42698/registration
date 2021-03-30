$(document).ready(function(){
  //alert("Here we are running the jquery code");
  $("#drag").draggable();
  $("#example1").hover(function(){
    $("#example2").show();
  });

  $("#example3").hover(function(){
    $("#example4").hide();
  });

  $("#heading").hover(function(){
    $("#drag").css("background-color","orange");
  });

  $("#example5").hover(function(){
    $("#example6").append("you can hide me if you want");
  });
})
