const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;

// Connect mongoose
mongoose
	.connect('mongodb://35.157.232.179:27017/pollio')
	.then(() => console.log('MongoDB connnected...'))
	.catch(err => console.log(err));
