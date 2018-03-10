var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/vote.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

	// Get votes from db
	Vote.find().then(votes => res.json({ success: true, votes: votes }));

});

module.exports = router;
