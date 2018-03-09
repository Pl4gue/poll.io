var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	// TODO: get data from database
	res.json([{
		id: 1,
		vote: {
			author: 'Quentin Oschatz',
			vote: 'Linux'
		}
	}, {
		id: 2,
		vote: {
			author: 'David Wu',
			vote: 'Windows'
		}
	}]);
});

module.exports = router;