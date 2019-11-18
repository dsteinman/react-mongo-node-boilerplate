const express = require('express');
const router = express.Router();
const mongo = require('../db/mongo');
const {Cat} = mongo;

let data = 123;

router.get('/', function (req, res, next) {
	// console.log(req.params);
	res.send({
		data
	});
});

router.put('/', function (req, res, next) {
	console.log('put', req.body);
	
	if ('add' in req.body) {
		data += req.body.add;
	}
	if ('multiply' in req.body) {
		data *= req.body.multiply;
	}
	
	res.send({
		data
	});
});

router.post('/', function (req, res, next) {
	if ('reset' in req.body) {
		data = req.body.reset;
	}
	
	res.send({
		data: 1
	});
});

router.get('/cat', function (req, res, next) {
	Cat.list().then(function(cats) {
		console.log('cats', cats);
		res.send(cats);
	});
});

router.post('/cat', function (req, res, next) {
	console.log('/cat');
	if ('name' in req.body) {
		const name = req.body.name;
		console.log('create cat', name);
		Cat.create(name);
		// mongo.createCat(name).then((r) => {
		// 	console.log('meow', r);
		//
		// 	res.send({
		// 		success: true,
		// 		response: r
		// 	});
		//
		// }).catch((e) => {
		// 	console.log('error', e);
		// 	debugger;
		// })
	}
	else {
		res.send({
			error: 'no name'
		});
	}
});

module.exports = router;
