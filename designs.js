// Select color input
// Select size input
var colorVal = "#000000";
var colorSafe = "#000000";
var prevColor = "";
var targetId = "";
var targetHoverId
var eraser = false;
var bin = false;
var grid = false;
console.log("Default: "  + colorVal);
// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function makeGrid(event) {
  /*
    Usuwa porzednią tabelkę jeśli istnieje.
  */
  $('#pixel_canvas').find($("td")).remove();
  $('#pixel_canvas').find($("tr")).remove();

  /*
    Przypisuje wysokosc/szerokosc do zmiennych.
  */
  console.log("Testing");
  const height = $('#sizePicker').find($("#input_height")).val();
  console.log("height: " + height);
  const width = $('#sizePicker').find($("#input_width")).val();
  console.log("width: " + width);

  /*
    Tworzy tabelkę.
  */
  for(var row = 0; row<height; row++){
    $('#pixel_canvas').append("<tr id=\""+row+"\">");
    for(var col = 0; col<width; col++){
      $("#" + row).append("<td id=\""+row+"_"+col+"\"></td>")
    }
    $("#" + row).append("</tr>");
  }
  $('tr').removeAttr("id");

  //Zapobiega autorefreshowi
  event.preventDefault();

});

$('#colorPicker').change(function colorChange(){

  colorVal = $('#colorPicker').val();
  colorSafe = $('#colorPicker').val();
  console.log("Color has been changed to: " + colorVal);

});

$('#pixel_canvas').click(function paintCell(evt){

  targetId = evt.target.id;
  console.log("id: " + targetId);
  $('#' + targetId).css({'background-color': colorVal });

});

/*
BROKEN!
$('#pixel_canvas').hover(function highlightCell(event){
  targetHoverId = event.target.id;
  prevColor = $('#' + targetHoverId).attr("background-color");
  console.log(prevColor + " on " + targetHoverId);
  $('#' + targetHoverId).css({"background-color": "#d0d0d0"})
},function unHighlightCell(){
  $('#' + targetHoverId).css({"background-color": prevColor});
});
*/

$('#eraser').click(function(){

  if(eraser){
    eraser = false;
    colorVal = colorSafe;
    $(this).attr("src","Eraser.png");
  } else {
    eraser = true;
    colorVal = "#ffffff";
    $(this).attr("src","EraserClicked.png");
  }


});

$('#bin').click(function(){

    $('#pixel_canvas').find($('td')).css({"background-color":"#ffffff"});
    $(this).attr("src","BinClicked.png");

  setTimeout(function(){

    $(this).attr("src","Bin.png");

  },2000);
});

$('#grid').click(function(){

  if(grid){
    grid = false;
    $("#pixel_canvas").find($("td")).css({"border":"1px solid black"});
    $("#pixel_canvas").find($("tr")).css({"border":"1px solid black"});
    $(this).attr("src","Grid.png");
  } else {
    grid = true;
    $("#pixel_canvas").find($("td")).css({"border":"none"});
    $("#pixel_canvas").find($("tr")).css({"border":"none"});
    $(this).attr("src","GridClicked.png");
  }


});

$('#eraser').hover(function(){

  $(this).attr("src","EraserHover.png");

}, function(){
  if(!eraser){
    $(this).attr("src","Eraser.png");
  } else {
    $(this).attr("src","EraserClicked.png");
  }
});

$('#bin').hover(function(){

  $(this).attr("src","BinHover.png");

}, function(){
  if(!bin){
    $(this).attr("src","Bin.png");
  } else {
    $(this).attr("src","BinClicked.png");
  }
});

$('#grid').hover(function(){

  $(this).attr("src","GridHover.png");

}, function(){
  if(!grid){
    $(this).attr("src","Grid.png");
  } else {
    $(this).attr("src","GridClicked.png");
  }
});
