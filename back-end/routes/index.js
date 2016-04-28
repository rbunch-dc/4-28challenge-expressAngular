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
router.get('/students/:sortMethod', function(req, res, next) {
	if(req.params.sortMethod == "sort"){
		students.sort()	
	}else if(req.params.sortMethod == "reverse"){
		students.sort()	
	  	students.reverse();
  	}
  	res.json(students);
});

module.exports = router;
