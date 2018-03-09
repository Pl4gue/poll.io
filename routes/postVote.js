var express = require('express');
// const Pusher = require('pusher');
var router = express.Router();

/* // Pusher
var pusher = new Pusher({
	appId: '485099',
	key: '279e1b477e33bd9e19a4',
	secret: '823fc6980ff75283010c',
	cluster: 'eu',
	encrypted: true
}); */

/* GET users listing. */
router.get('/', function(req, res, next) {
	/* pusher.trigger('poll', 'voting', {
		votes: req.body.votes
	}); */

	console.log(req);
	// TODO: Implement pushing vote to database

	return res.json({ success: true, message: 'Your votes have been proccessed. Thank you!' });
});

module.exports = router;