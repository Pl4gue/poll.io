const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;

// Connect mongoose
mongoose
  .connect('mongodb://localhost/pollio')
  .then(() => console.log('MongoDB connnected...'))
  .catch(err => console.log(err));
