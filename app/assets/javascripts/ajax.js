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
        $('#movieInfo').append("<li><strong>Plot: </strong>" + data.Plot +
      "<li><strong>Actors: </strong>" + data.Actors +
      "<li><strong>Director: </strong>" + data.Director +
      "<li><strong>Writer: </strong>" + data.Writer +
      "<li><strong>Genre: </strong>" + data.Genre +
      "<li><strong>Awards: </strong>" + data.Awards +
      "<li><strong>Rated: </strong>" + data.Rated +
      "<li><strong>Released: </strong>" + data.Released +
      "<li><strong>Runtime: </strong>" + data.Runtime
        );

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
          $('#searchResults').append('<ul><li><img src="' + data.Search[i].Poster + '" onError="this.onerror=null;this.src=\'/images/poster-not-available.jpg\';"></li><ul><li><strong>' + data.Search[i].Title + '</strong> (' + data.Search[i].Year + ')</li></ul></ul>' + '<form action="/movies" method="post"><input type="hidden" name="authenticity_token" value="' + window.authToken +
          '"><input type="hidden" name="movie[imdbID]" id="movie[imdbID]" value="' + data.Search[i].imdbID + '"><input type="hidden" name="movie[Title]" id="movie[Title]" value="' + data.Search[i].Title + '"><input type="hidden" name="movie[Year]" id="movie[Year]" value="' + data.Search[i].Year + '"><input type="hidden" name="movie[Poster]" id="movie[Poster]" value="' + data.Search[i].Poster + '"><input type="submit" name="commit" value="Add Movie"/></form>');
        }




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
