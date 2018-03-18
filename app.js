const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io')

const app = express();

// DB Config
require('./config/dbconfig.js');

// Set public folder
app.use(express.static(path.join(__dirname, 'client')));

// Bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// CORS
app.use(cors());

app.get("", (req, res) => res.send("Hi"));

// Import routes
var getpoll = require('./routes/getpoll');
var getpollslisting = require('./routes/getpollslisting');
var getvotes = require('./routes/getvotes');
var index = require('./routes/index');
var postpoll = require('./routes/postpoll');
var postvote = require('./routes/postvote');

app.use('/getpoll', getpoll);
app.use('/getpollslisting', getpollslisting);
app.use('/getvotes', getvotes);
app.use('/', index);
app.use('/postpoll', postpoll);
app.use('/postvote', postvote);

module.exports = app;
