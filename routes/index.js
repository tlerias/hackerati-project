'use strict';

var express = require('express'),
    router = express.Router(),
    Quotes = require( '../quotes').Quotes;

/* GET home page. */
// for angular version
router.get('/quotes', function(req, res) {
  res.send( Quotes, 200 );
} );

router.get('/quote/:id', function(req, res) {
  var quoteId = parseInt( req.params.id );

  for ( var i = 0; i < Quotes.length; i++ ) {
    if ( quoteId === Quotes[i].id ) {
      return res.send(  Quotes[i], 200 );
    }
  }
  res.send(404);
} );
// for jquery version
router.get('/jquery', function(req, res) {
  res.render('index', {quotes: Quotes });
} );

module.exports = router;

