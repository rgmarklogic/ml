var request = require("request");

request("http://localhost:4242/dice?howmany=1",
function(err, res, body) {
    if (err) {
        console.err("oops, error:", err);
    }
    else {
        console.log("SUCCESS!", body);
    }
});
