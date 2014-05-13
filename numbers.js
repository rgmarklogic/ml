var EventEmitter = require("events").EventEmitter;

var Numbers = function() {
    var self = this;
    //EventEmitter.call(this, arg1, arg2, arg3);
    setInterval(function() {
        self.emit("lottery", Math.random());
    }, 1000);
};
Numbers.prototype = new EventEmitter();

// export our Numbers class.
exports.Numbers = Numbers;

// node numbers.js
if (require.main === module) {
    var n = new Numbers();
    n.on("lottery", function(num) {
        console.log("I got the number", num);
    });
    n.once("lottery", function(num) {
        console.log("I got the number (only once)", num);
    });
}
