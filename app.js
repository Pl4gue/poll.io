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

// Socket.io

// TODO: add getpoll, getpollslisting, postpoll und postvote

// Starting server handled by ./bin/www
