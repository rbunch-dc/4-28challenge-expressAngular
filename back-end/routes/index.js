var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongoUrl = "mongodb://localhost:27017/btb";
var connection = mongoose.connect(mongoUrl);
var Student = require('../models/students');
// var config = require('../config/keys');

var fs = require('fs'); //Include the file system module
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var type = upload.single('uploadedFile');

router.post('/uploads', type, function(req, res, next){
	// res.json(req.file);
	var targetPath = 'public/images/' + req.file.originalname
	fs.readFile(req.file.path, function(error, data){
		res.json((data.data));
		fs.writeFile(targetPath, data, function(error){
			if(error){
				res.json('There was an error. ' + error);
			}else{
				// db.colleciton('cars').insertOne()
				res.json('Success!');
			}
		})
	})
});

/* GET home page. */
router.get('/students/:sortMethod', function(req, res, next) {

	students = [];
	Student.find({}, function(error, document){
		for(i=0; i<document.length; i++){
			students.push(document[i].name);
		}
		if(req.params.sortMethod == "sort"){
			students.sort()	
		}else if(req.params.sortMethod == "reverse"){
			students.sort()	
		  	students.reverse();
	  	}
		res.json(students);
	});

 
});

module.exports = router;
