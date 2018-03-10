const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');

let index = require('./routes/index');
let getpoll = require('./routes/getpoll');
let getpollslisting = require('./routes/getpollslisting');
let getvotes = require('./routes/getvotes');
let postpoll = require('./routes/postpoll');
let postvote = require('./routes/postvote');

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

// Socket.io

// TODO: add getpoll, getpollslisting, postpoll und postvote

app.use('/', index);
app.use('/getpoll', getpoll);
app.use('/getpollslisting', getpollslisting);
app.use('/getvotes', getvotes);
app.use('/postpoll', postpoll);
app.use('/postvote', postvote);
 
module.exports = app;
