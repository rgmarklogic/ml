var numbers = require("./numbers");

console.log("Welcome to the lottery!");
console.log(numbers);

var n = new numbers.Numbers();
n.on("lottery", function(num) {
    console.log("Got a lottery number:", num);
});
