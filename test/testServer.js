var expect  = require('chai').expect;
var request = require('request');
var url = 'http://localhost:3000/api/cats'

//A sample cat is used to test post and delete Api
var sampleCat = {
    title: 'New Test Cat',
    color: 'Black',
    path: '/images/cat.jpg',
    description: 'This is a new cat to test API'
};


describe("Test Get API", function(){
    it("returns statusCode of 200", function(done) {
            request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
})

describe("Test Post API", function() {
    it("post cat to DB", function(done) {
        request.post({ url: url, form: sampleCat }, function(error, response, body) {
            let parsedBody = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(parsedBody.message).to.equal('Success')
            done();
        });
    });
});

describe("Test Delete API", function() {
    it("should delete a cat", function(done) {
        request.delete({ url: url, form: sampleCat }, function(error, response, body) {
            let parsedBody = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(parsedBody.message).to.equal('Success')
            done();
        });
    });
});