var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send({
        roll: Math.floor(Math.random()*6)+1
    });
});
app.listen(8080);
