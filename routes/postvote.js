var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/vote.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
	const newVote = {
		req.body
	}

	new Vote(newVote).save().then(vote => {
		//TODO: trigger socket.io
		// Successfully added nre vote to db
		console.log(vote);
	});

	return res.json({ success: true, message: 'Your votes have been proccessed. Thank you!' });
});

module.exports = router;
