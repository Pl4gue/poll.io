var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/vote.js');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // If no poll is selected, return with error
  if(req.query.poll == null) {

    res.json({ success: false, err: "Please specify a poll by id as a GET request!" });

  } else {

    // Get votes from db
    Vote.find({ "VoteMeta.PollId": parseInt(req.query.poll) }).then(votes => res.json({ success: true, votes: votes }));

  }

});

module.exports = router;
