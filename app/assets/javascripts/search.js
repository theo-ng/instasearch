$(function() {

  $('#clicked').on('click', function() {
    search();
  });

  function search() {
    var $term = $('#search').val();
    $.ajax({
      url: 'http://localhost:3000/pictures/'+$term,
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: showImage
    });
  };
});

function showImage(res) {
  var $content = $('#content');
  $content.html('');
  var pics = res['data'];
  for(var i=0; i<12; i++) {
    var img = $('<img>').attr("src", pics[i].images.thumbnail.url);
    img.appendTo($content);
  }
};