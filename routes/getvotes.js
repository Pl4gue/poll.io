var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/vote.js');

/* GET users listing. */
<<<<<<< HEAD
router.get('/getvotes', function(req, res, next) {

  // Get votes from db
  Vote.find().then(votes => res.json({ success: true, votes: votes }));
=======
router.get('/', function(req, res, next) {

	// Get votes from db
	Vote.find().then(votes => res.json({ success: true, votes: votes }));
>>>>>>> master

});

module.exports = router;
