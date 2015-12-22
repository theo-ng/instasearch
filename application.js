$(function() {

  // $.ajax({
  //   url: 'https://api.instagram.com/v1/tags/coffee/media/recent?access_token=417427825.1677ed0.d25bf87aa1334cbd93998af6f68b00e1&callback=search'
  // });

  $('#clicked').on('click', function() {
    search();
  });

  function search() {
    var $term = $('#search').val();
    $.ajax({
      url: 'https://api.instagram.com/v1/tags/'+$term+'/media/recent?access_token=417427825.1677ed0.d25bf87aa1334cbd93998af6f68b00e1',
      dataType: 'jsonp',
      jsonpCallback: 'showImage'
    });
  };
});

function showImage(res) {
  var $content = $('#content');
  $content.html('');
  // console.log(res);
  var pics = res['data'];
  for(var i=0; i<12; i++) {
    var img = $('<img>').attr("src", pics[i].images.thumbnail.url);
    img.appendTo($content);
  }
};