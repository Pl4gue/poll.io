const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
<<<<<<< HEAD
const socketio = require('socket.io')
=======
const socketio = require('socket.io');

let index = require('./routes/index');
let getpoll = require('./routes/getpoll');
let getpollslisting = require('./routes/getpollslisting');
let getvotes = require('./routes/getvotes');
let postpoll = require('./routes/postpoll');
let postvote = require('./routes/postvote');
>>>>>>> master

const app = express();

// DB Config
require('./config/dbconfig.js');

<<<<<<< HEAD
// Set public folder
app.use(express.static(path.join(__dirname, 'client')));
=======
// Serve React production build as public folder
app.use(express.static(path.join(__dirname, 'client/build/')));

// Logging middleware
app.use(morgan('combined'));
>>>>>>> master

// Bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// CORS
app.use(cors());

<<<<<<< HEAD
// Socket.io

// TODO: add getpoll, getpollslisting, postpoll und postvote

// Starting server handled by ./bin/www
=======
// TODO Socket.io

// Endpoint Routes
app.use('/', index);
app.use('/getpoll', getpoll);
app.use('/getpollslisting', getpollslisting);
app.use('/getvotes', getvotes);
app.use('/postpoll', postpoll);
app.use('/postvote', postvote);
 
// catchall handler - return index page on any unknown request
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = app;
>>>>>>> master
