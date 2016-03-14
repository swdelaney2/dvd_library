$(document).on('page:load', function() {
$('#search_form').submit(function(e) {
    e.preventDefault();
    var keyword = $(":input[name=keyword]", this).val();
    searchMovieByTitle(keyword)
});
});

$(document).ready(function() {
$('#search_form').submit(function(e) {
    e.preventDefault();
    var keyword = $(":input[name=keyword]", this).val();
    searchMovieByTitle(keyword)
});
});

function loadMovieInfo(searchTerm) {
  var ajaxArgument = {
    type: 'get',
    url: 'http://www.omdbapi.com/?i=' + searchTerm + '&y=&plot=short&r=json',
    dataType: 'json',
    success: function(data) {
        console.log("success");
        console.log(data);
        $('#movieInfo').append("<p><a href='http://www.imdb.com/title/" + searchTerm + "' target=_blank>" + data.Title + "</a> was released in " + data.Year + ".");

    },
    error: function(error) {
        console.log("error")
        console.log(error);
    }
};
// make the ajax call
$.ajax(ajaxArgument);
}

function searchMovieByTitle(searchTerm) {
  var ajaxArgument = {
    type: 'get',
    url: 'http://www.omdbapi.com/?s=' + searchTerm + '&y=&plot=short&r=json',
    dataType: 'json',
    success: function(data) {
        console.log("success");
          $('#searchResults').html('');
        // console.log(data.Search[0]);
        // console.log(data.Search.length);
        for (var i = 0; i < data.Search.length; i++) {
          $('#searchResults').append('<ul><li><img src="' + data.Search[i].Poster + '" onError="this.onerror=null;this.src=\'/images/poster-not-available.jpg\';"></li><ul><li><strong>' + data.Search[i].Title + '</strong> (' + data.Search[i].Year + ')</li></ul></ul>');
        }

        // $('#searchResults').append('test');



    },
    error: function(error) {
        console.log("error")
        console.log(error);
    }
};
// make the ajax call
$.ajax(ajaxArgument);
}

// loadMovieInfo('tt0275022');
