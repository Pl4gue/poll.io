const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const socketio = require('socket.io');
const passport = require('passport');
const config = require('./config/secrets.json');
// const session = require("express-session");

const GitHubStrategy = require('passport-github').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// DB Config
require('./config/dbconfig.js');

// Set public folder
app.use(express.static(path.join(__dirname, 'client/build/')));

// Bodyparser middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// CORS
app.use(cors());

// Passport middleware
// app.use(session({ secret: "gIIwkZM9YE1XpArcRfSCXjOuVP28jWR0" }));
app.use(passport.initialize());
// app.use(passport.session());

// Passport user (de)-serialisation to avoid transmitting user info after login
passport.serializeUser(function(user, callback) {
  callback(null, user);
});

passport.deserializeUser(function(obj, callback) {
  callback(null, obj);
});

// Configure Github OAuth
passport.use(new GitHubStrategy({
    clientID: '2ec1ebabf5ae9436245e',
    clientSecret: config.GithubSecret,
    callbackURL: "http://poll.io.flxwu.com/auth/github/callback" //TODO: Change localhost to production host
  },
  (accessToken, refreshToken, profile, callback) => {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return callback(err, user);
    });
  }
));

// Configure Google OAuth
passport.use(new GoogleStrategy({
    clientID: '575257432848-6dklb9lm820lmpavgsvhkhv5u6mukshu.apps.googleusercontent.com',
    clientSecret: config.GoogleSecret,
    callbackURL: "http://poll.io.flxwu.com/auth/google/callback"
  },
  (accessToken, refreshToken, profile, callback) => {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return callback(err, user);
    });
  }
));

// Configure Twitter OAuth
passport.use(new TwitterStrategy({
    consumerKey: '6pXHPzq1acDs60wXozYjEvfY9',
    consumerSecret: config.TwitterSecret,
    callbackURL: "http://poll.io.flxwu.com/auth/twitter/callback"
  },
  (token, tokenSecret, profile, callback) => {
    User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return callback(err, user);
    });
  }
));

app.get("", (req, res) => res.send("Hi"));

// Import routes
var getpoll = require('./routes/getpoll');
var getpollslisting = require('./routes/getpollslisting');
var getvotes = require('./routes/getvotes');
var index = require('./routes/index');
var postpoll = require('./routes/postpoll');
var postvote = require('./routes/postvote');
var github = require('./routes/auth/github');
var githubcallback = require('./routes/auth/githubcallback');
var google = require('./routes/auth/google');
var googlecallback = require('./routes/auth/googlecallback');
var twitter = require('./routes/auth/twitter');
var twittercallback = require('./routes/auth/twittercallback');

app.use('/getpoll', getpoll);
app.use('/getpollslisting', getpollslisting);
app.use('/getvotes', getvotes);
app.use('/', index);
app.use('/postpoll', postpoll);
app.use('/postvote', postvote);
app.use('/auth/github', github);
app.use('/auth/guthub/callback', githubcallback);
app.use('/auth/google', google);
app.use('/auth/google/callback', googlecallback);
app.use('/auth/twitter', twitter);
app.use('/auth/twitter/callback', twittercallback);

// Export app
module.exports = app;
