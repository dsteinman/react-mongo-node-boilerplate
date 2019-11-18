const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('should-http');
chai.use(chaiHttp);
const expect = chai.expect;

const mongo = require('../db/mongo');
const {Cat} = mongo;

// const url = 'http://localhost:3002';
//
// describe('/ping', function() {
// 	it('should return pong', function(done) {
// 		chai.request(url)
// 		.get('/ping')
// 		.end(function(err, res){
// 			res.should.have.status(200);
// 			expect(res.text).to.be.equal('pong');
// 			done();
// 		});
// 	});
// });

// describe('something', function() {
// 	it('should do something', function(done) {
// 		let name = "Fluffy";
// 		let model = Cat.create(name);
// 		model.then(function(cat) {
// 			console.log(cat);
// 			expect(true).to.be.equal(true);
// 			done();
// 		})
// 		.catch(function(err) {
// 			assert.throw(err);
// 		});
//
// 		// expect(function(){
// 		// 	model.get('z');
// 		// }).to.throw('Property does not exist in model schema.');
// 	});
//
// });

