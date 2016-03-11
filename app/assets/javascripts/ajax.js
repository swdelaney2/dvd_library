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

// loadMovieInfo('tt0275022');
