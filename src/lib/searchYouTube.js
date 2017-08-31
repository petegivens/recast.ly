var searchYouTube = (options, callback) => {
  // TODO

// See full sample for buildApiRequest() code, which is not
// specific to a particular youtube or youtube method.
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {'maxResults': options.max,
     'q': options.query,
     'key': options.key,
     'part': 'snippet',
     'type': 'video'},
    success: function(data) {callback(data.items);},
    dataType: 'json'
  });


};

window.searchYouTube = searchYouTube;
