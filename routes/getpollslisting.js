var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Poll = require('../models/poll.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

    // Get votes from db
		// TODO: filter by "public" setiing
    Poll.find({}, {'PollMeta.PollId': 1, 'PollMeta.PollTitle': 1, '_id': 0}).then(polls => res.json({ success: true, polls: polls }));

});

module.exports = router;
