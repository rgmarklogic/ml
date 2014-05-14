var express = require("express");
var path = require("path");

var app = express();

// ?howmany=something
// in the query string
// your job is to either send an error message
// if the user doesn't send a valid number
// or multiply the random number by the
// number the user sent back.
app.get("/dice", function(req, res) {
    var howMany = req.param("howmany");
    howMany = parseInt(howMany);
    if (!isNaN(howMany)) {
        res.send({
            roll: (Math.floor(Math.random()*6)+1) * howMany
        });
    }
    else {
        res.send(400, {
            error: "Please send me a number"
        });
        //res.send(400, "<a href='/'>Try again</a>");
    }
});
app.use(express.static(path.join(__dirname, "public")));
app.listen(4242);




