const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('should-http');
chai.use(chaiHttp);
const expect = chai.expect;

const TEST_PORT = 3002;

const host = 'http://localhost:'+TEST_PORT;

// describe('/api/cat', function() {
// 	it('should return array', function(done) {
// 		chai.request(host)
// 		.get('/api/cat')
// 		.end(function(err, res){
// 			res.should.have.status(200);
// 			expect(res.body).to.be.an('array');
// 			// expect(res.text).to.be.equal('pong');
// 			// expect(res.body).to.eql(['rat','tar']);
// 			done();
// 		});
// 	});
// });