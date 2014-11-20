'use strict';

app.controller('MainCtrl', function($scope, List){

   // I did this project in both Angular and in JQuery.
  // You can find the JQuery version in scripts/main.js
  // and the view for the JQuery version is in "root"/views/index.html
  // access the jquery version on the browser at localhost:3000/pure

  $scope.quotes = [];
  $scope.quote = {};

  List.getQuotes().then( function ( quotes ) {
    $scope.quotes = quotes.data;
  } );

  $scope.getQuote = function( one ) {
    List.getOne( one ).then( function ( quote ) {
      $scope.quote = quote.data;
    } );
  };

} );
