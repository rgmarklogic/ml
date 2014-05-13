// npm init
// npm i --save async
// npm i --save-dev mocha
// npm i --save-dev chai

var http = require('http');
var fs = require("fs");
var async = require("async");
var url = require("url");

var parseReqURL = function(req, res, next) {
    // Trim off the inevitable forward slash.
    var filepath = url.parse(req.url).pathname.slice(1);
    next(null, req, res, filepath);
};

var readFileFromDisk = function(req, res, filepath, next) {
    fs.readFile(filepath, function(err, buffer) {
        if (err) {
            next(err, req, res, null);
        }
        else {
            next(null, req, res, buffer);
        }
    });
};

var sendResponse = function(err, req, res, buffer) {
    if (err) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Error\n');
    }
    else {
        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Content-Length': buffer.length
        });
        res.end(buffer);
    }
};
// Lab
// Make a function that parses the URL for a file.
// Make a function that finds the file on disk and reads it in
// Make a function that sends the file out to a response object.
// Implement these functions using async.waterfall inside of
// the http.createServer callback to serve the files requested.
// If the file is not found, send out hello Errror.
http.createServer(function (req, res) {
    async.waterfall([
        function(next) {
            next(null, req, res);
        },
        parseReqURL,
        readFileFromDisk
    ], sendResponse);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


/*
async.waterfall([
    function(next) {
        var a = Math.random();
        next(null, a);
    },
    function(num, next) {
        console.log("Got the number in the second step:", num);
        //next(null, 42);
        next(new Error("RUNNING WITH SCISSORS!"));
    },
    function(num, next) {
        console.log("Got the number in the third step:", num);
        next(null, "YAYAYAYAYAYYA! NODEJS IS AWESOME! IT MAKES MAKE FACES!");
    }
], function(err, results) {
    if (err) {
        console.error("oops, got an error", err);
    }
    else {
        console.log("Did we get results?", results);
    }
});
*/
