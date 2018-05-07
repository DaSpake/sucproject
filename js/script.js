var newcensus = [118120, 314604, 20548];
var oldcensus = [113494, 296461, 18736];

$('#italian').attr('y', 235-(oldcensus[0]/2000));
$('#italian').attr('height', oldcensus[0]/2000);
$('#german').attr('y', 235-(oldcensus[1]/2000));
$('#german').attr('height', oldcensus[1]/2000);
$('#ladin').attr('y', 235-(oldcensus[2]/2000));
$('#ladin').attr('height', oldcensus[2]/2000);

$('#newdata').hide();
$('#data11').hide();
$('#border11').hide();

$('#oldbutton').on('click', function() {
  $('#newdata').hide();
  $('#olddata').show();
  $('#data11').hide();
  $('#data01').show();
  $('#border11').hide();
  $('#border01').show();
});

$('#newbutton').on('click', function() {
  $('#olddata').hide();
  $('#newdata').show();
  $('#data01').hide();
  $('#data11').show();
  $('#border01').hide();
  $('#border11').show();
});



var newcensus = ["Italienisch: 118.120", "Deutsch: 314.604", "Ladinisch: 20.548"];
var oldcensus = ["Italienisch: 113.494", "Deutsch: 296.461", "Ladinisch: 18.736"];

for (var i = 0; i < newcensus.length; i = i + 1) {
  $("#data01").append("<li>" + newcensus[i] + "</li>");
}

for (var i = 0; i < newcensus.length; i = i + 1) {
  $("#data11").append("<li>" + oldcensus[i] + "</li>");
}






//1y -> 2000 Wert
//235-(Wert/2000)
//height: (Wert/2000)
