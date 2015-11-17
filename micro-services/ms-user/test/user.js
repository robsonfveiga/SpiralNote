var app = require('../app.js');
var request = require('supertest');


describe('GET /api/user/ ', function () {
    it('respond with json', function (done) {
        request(app)
        .get('/api/user/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done); 
    });
})