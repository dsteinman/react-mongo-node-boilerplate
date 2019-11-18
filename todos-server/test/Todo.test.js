const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('should-http');
const assert = require('assert');
chai.use(chaiHttp);
const expect = chai.expect;

const mongo = require('../db/mongo');
const {Todo} = mongo;

before(function(done) {
	Todo.deleteMany({}, function() {
		console.log('deleted all test Todos');
		done();
	});
});

describe('Todo', function() {
	it('create', function(done) {
		let name = "Something to do";
		let model = Todo.create(name);
		model.then(function(todo) {
			
			console.log('created', todo);
			
			expect(todo.name).to.be.equal(name);
			expect(todo.done).to.be.equal(false);
			done();
		})
		.catch(function(err) {
			throw err;
		});
	});
	
	it('fineOne', function(done) {
		let name = "Something to do";
		var query = Todo.where({name});
		query.findOne().then(function(something) {
			
			console.log('found', something);
			
			expect(something).to.exist;
			expect(something.name).to.be.equal(name);
			expect(something.done).to.be.equal(false);
			done();
		})
		.catch(function(err) {
			throw err;
		});
	});
	
	it('update', function(done) {
		let name = "Something to do";
		var query = Todo.where({name});
		query.findOne().then(function(something) {
			
			console.log('update found', something);
			
			let newName = "Something done";
			Todo.update(something._id, newName, true).then(function(newsomething) {
				
				console.log('newsomething', newsomething);
				
				expect(newsomething.name).to.be.equal(newName);
				expect(newsomething.done).to.be.equal(true);
				done();
			})
			
		});
	});
	
	it('remove', function(done) {
		let name = "Something done";
		var query = Todo.where({name});
		query.findOne().then(function(something) {

			Todo.remove(something._id).then(function(result) {
				expect(result.deletedCount).to.be.equal(1);
				done();
			})

		});
	});
	
});

