 $("button").click(function(){
 	$( ".error" ).remove();
 	$("article").remove();
    var artist=$("#artist").val();
	$.ajax( 'https://api.spotify.com/v1/search', {
	  type: 'GET',
	  dataType: 'json',
	  data:  {q:artist, type: "album"},
	  success: function(response){
	   showAlbums(response.albums.items);
	  },

	  error: function( req, status, err ) {
	    console.log( 'something went wrong', status, err );
	  }
	});
});

function showAlbums(albums){
	if (albums.length!=0) {
		albums.forEach(function(album) {
		    //console.log(album.name);
		    $("#info").append('<article>'
		    +'<p><label> Nombre: </label>' +album.name+ '</p>'
		    +'<p><label> Type: </label>' +album.album_type+ '</p>'
		    +'<p><label> Image: </label></br><img src="' +album.images[0].url+ '"></p>'
		    +'<p><label> Realease Dates: </label>' +album.release_dates+ '</p>'/*No funciona*/
		    +'<p><label> Link to Spotify: </label> <a href="' +album.external_urls.spotify+ '">'+album.name+'</a></p>'
		    +'</article>');
		});
	}
	else{
		$("#search").append('<p class="error"> The artist does not exist </p> ')
	}
}