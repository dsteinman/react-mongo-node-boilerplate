const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
	name: String
});
CatSchema.methods.speak = function () {
	var greeting = this.name
		? "Meow name is " + this.name
		: "I don't have a name";
	console.log(greeting);
};

const Cat = mongoose.model('Cat', CatSchema);

Cat.create = function(name) {
	const cat = new Cat({
		name
	});
	return cat.save();
};
Cat.list = function() {
	return Cat.find();
};

module.exports = Cat;