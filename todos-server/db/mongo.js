// https://mongoosejs.com/docs/index.html

const mongoose = require('mongoose');
const Cat = require('./Cat');
const Todo = require('./Todo');
mongoose.set('useFindAndModify', false);

function connect(url, callback) {
	// 'mongodb://localhost:27017/test'
	console.log('mongo connecting', url);
	
	if (callback) {
		var db = mongoose.connection;
		db.once('open', function() {
			console.log('mongo connected');
			callback();
		});
		
		db.on('error', function(e) {
			console.log(e, 'connection error:');
			process.exit();
		});
	}
	
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
}

module.exports = {
	connect,
	Cat,
	Todo,
	mongoose
};