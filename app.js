const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');

const app = express();

// Set public folder
app.use(express.static(path.join(__dirname, 'client')));

// Bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// CORS
app.use(cors());

// Pusher
var pusher = new Pusher({
	appId: '485099',
	key: '279e1b477e33bd9e19a4',
	secret: '823fc6980ff75283010c',
	cluster: 'eu',
	encrypted: true
});

app.get('/getpoll', (req, res) => {
	res.send('RES');
	// TODO: Implement getting records from database
});

app.post('/submitpoll', (req, res) => {
	pusher.trigger('poll', 'voting', {
		votes: req.body.votes
	});

	console.log(req);
	// TODO: Implement pushing vote to database

	return res.json({ success: true, message: 'Your votes have been proccessed. Thank you!' });
});

const port = 3000;

// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
