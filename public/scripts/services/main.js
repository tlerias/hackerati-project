'use strict';

app.factory('List', function ( $http ){

  var List = {
    getQuotes: function () {
      var getQuotesPromise = $http.get('/quotes').success(function(quotes) {
        return quotes;
      });
      return getQuotesPromise;
    },

    getOne: function ( data ) {
      var getOnePromise = $http.get('/quote/'+ data.id ).success(function(quote) {
        return quote;
      });
      return getOnePromise;
    }
  };

  return List;
});
