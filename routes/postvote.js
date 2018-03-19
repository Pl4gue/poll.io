var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/vote.js');

/* GET users listing. */
router.post('/', function(req, res, next) {

 console.log(req.body)

	const newVote = req.body;

	new Vote(newVote).save().then(vote => {
		//Trigger socket.io
    io.emit('vote', vote);

    // Successfully added new vote to db 
		console.log(vote);
	});

	return res.json({ success: true, message: 'Your votes have been proccessed. Thank you!' });
});

module.exports = router;
