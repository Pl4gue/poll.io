var express = require('express');
var router = express.Router();

const Poll = require('../models/poll.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  const newPoll = req.body;

	new Poll(newPoll).save().then(poll => {
		//TODO: trigger socket.io
		// Successfully added poll to db
		console.log(poll);
	});

	return res.json({ success: true, message: 'New poll added!' });
});

module.exports = router;
