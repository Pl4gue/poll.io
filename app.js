const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');

let index = require('./routes/index');
let users = require('./routes/users');
let getpoll = require('./routes/getPoll');
let postVote = require('./routes/postVote');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// "catchall", send back React's index.html file on 404
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// CORS
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/getpoll', getpoll);
app.use('/postVote', postVote);

module.exports = app;