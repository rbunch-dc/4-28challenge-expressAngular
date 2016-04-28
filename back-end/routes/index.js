var express = require('express');
var router = express.Router();
	var students = [
		'Tristan',
		'Josh',
		'Bogdan',
		'Keith',
		'Will',
		'Curtis',
		'Joe',
		'Kochan',
		'Patrick',
		'Jonathan',
		'Jeremy'		
	];

/* GET home page. */
router.get('/students', function(req, res, next) {
	students.sort()
  	res.json(students);
});

/* GET home page. */
router.get('/students/reverse', function(req, res, next) {
	students.sort();
  	students.reverse();
  	res.json(students);
});

module.exports = router;
