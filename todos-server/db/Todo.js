const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
	name: String,
	done: Boolean
});
TodoSchema.methods.speak = function () {
	// var greeting = this.name
	// 	? "Meow name is " + this.name
	// 	: "I don't have a name";
	// console.log(greeting);
};

const Todo = mongoose.model('Todo', TodoSchema);

Todo.create = function(name) {
	const cat = new Todo({
		name,
		done: false
	});
	return cat.save();
};
Todo.update = function(_id, name, done) {
	var query = Todo.where({ _id });
	return query.findOneAndUpdate({
		name,
		done
	}).then(function(query) {
		console.log('update then', query);
		return Todo.findOne(query._id);
	});
	// return query;
};
Todo.remove = function(_id) {
	return Todo.deleteOne({
		_id
	});
};
Todo.list = function() {
	return Todo.find();
};

module.exports = Todo;