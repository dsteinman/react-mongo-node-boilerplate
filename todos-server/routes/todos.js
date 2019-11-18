const express = require('express');
const router = express.Router();
const mongo = require('../db/mongo');
const {Todo} = mongo;

router.get('/', function (req, res, next) {
	Todo.list().then(function(todos) {
		res.send(todos);
	})
});

router.post('/', function (req, res, next) {
	console.log('create todo');
	if ('name' in req.body) {
		const name = req.body.name;
		let model = Todo.create(name);
		model.then(function(todo) {
			res.send(todo);
		})
		.catch(function(err) {
			res.send({
				error: err
			});
		});
	}
	else {
		res.send({
			error: 'no name'
		});
	}
});

router.put('/', function (req, res, next) {
	console.log('put', req.body);
	
	if ('_id' in req.body) {
		const _id = req.body._id;
		const name = req.body.name;
		const done = req.body.done;
		var query = Todo.where({_id});
		query.findOne().then(function(todo) {
			Todo.update(todo._id, name, done).then(function(updated) {
				res.send(updated);
			});
		});
	}
});

router.delete('/', function (req, res, next) {
	console.log('put', req.body);
	
	if ('_id' in req.body) {
		const _id = req.body._id;
		Todo.remove(_id).then(function(result) {
			if (result.deletedCount === 1) {
				res.send({success:_id});
			}
			else {
				res.send({error: result});
			}
		});
	}
});

module.exports = router;
