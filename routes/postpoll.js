var express = require('express');
var router = express.Router();

const Poll = require('../models/poll.js');

/* GET users listing. */
router.post('/', function(req, res, next) {

  const newPoll = req.body;

	new Poll(newPoll).save().then(poll => {
    //Trigger socket.io
    io.emit('addpoll', poll);

    // Successfully added new poll to db 
		console.log(poll);
	});

	return res.json({ success: true, message: 'New poll added!' });
});

module.exports = router;
