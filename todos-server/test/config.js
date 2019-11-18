console.log('starting...');

const mongo = require('../db/mongo');
const app = require('../app');
const server = require('http').createServer(app);

before(function(done) {
	this.timeout(5000);
	
	// start MongoDB with test database
	var mongo = require('../db/mongo');
	var MONGO_DB_NAME = 'test';
	mongo.connect('mongodb://localhost:27017/' + MONGO_DB_NAME, function() {
		
		// mongo.Todo.deleteMany({}, function() {
		// 	console.log('deleted all test Todos');
			
			// start Node app on test port
			const TEST_PORT = 3002;
			server.listen(TEST_PORT, () => {
				console.log('App listening on port '+TEST_PORT);
				done();
			});
		// });
		
		
	});
	
	// mongo.mongoose.connection.once('open', function() {
	// 	done();
	// });
});

after(function(done) {
	console.log('stopping...');
	mongo.mongoose.connection.close();
	// server.close();
	done();
});