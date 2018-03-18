var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Poll = require('../models/poll.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

	// If no poll is selected, return with error
  if(req.query.poll == null) {

    res.json({ success: false, err: "Please specify a poll by id as a GET request!" });

  } else {

    // Get poll from db
    Poll.find({ "PollMeta.PollId": parseInt(req.query.poll) }).then(poll => res.json({ success: true, poll: poll }));

  }

});

module.exports = router;
