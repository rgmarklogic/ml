var more_hello = require("../more_hello");
var assert = require("chai").assert;

describe("parseReqURL", function() {
    it("should work", function() {
        // Test parseReqURL
        var mockRequest = {
            "url": "http://marklogic.com/passwd"
        };
        var expected = "passwd";
        var mockNext = function(err, req, res, filePath) {
            assert(filePath === expected, "filePath is trimmed");
        };
        more_hello.parseReqURL(mockRequest, null, mockNext);
    });
});

describe("readFileFromDisk", function() {
    var path = require("path");
    var readFileFromDisk = more_hello.readFileFromDisk;
    var fileExists = path.resolve(__dirname, "..", "package.json");
    var fileNotExists = "OMGNOMOREJSKTHNKSBAI.txt";
    it("it gives me an error when files don't exist", function(done) {
        readFileFromDisk(null, null, fileNotExists, function(err) {
            if (err) {
                done();
            }
            else {
                done(new Error("did not get an error."));
            }
        });
    });

    it("it gives me a buffer when the file exists", function(done) {
        readFileFromDisk(null, null, fileExists, function(err, req, res, buffer) {
            assert(buffer.length);
            assert(!err);
            done();
        });

    });
});






