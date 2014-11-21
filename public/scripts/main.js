// JQuery Way
// JQuery version can be found in the browser at localhost:3000/jquery
// Also did the project in angular. Can view angular version in the browser at localhost:3000/

$( document ).ready( function () {
  $('ul').on( 'click', 'li', function( evt ) {

    // prevent default behavior of anchor tags.
    evt.preventDefault();

    // no need to spill needless information to ancestors, so we will stop propogation here.
    evt.stopPropagation();

    $.ajax({
      url: '/quote/'+ $( this ).data( 'id' ),
      type: 'GET'
    }).done(function( data ) {
      $( '.quote' ).text( data.text );
      $( '.author' ).text( data.author );
    });

  } );
} );
