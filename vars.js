#!/usr/bin/env node
// https://github.com/jeremyosborne/ml.git

console.log("Hello world!");

//function MyObject(name, message) {
var MyObject = function(name, message) {
    name = name.toString();
    this.name = name.toString();
    this.getName = function() {
        return name;
    };

    this.message = message.toString();
    this.getMessage = function() {
        return this.message;
    };
};
MyObject.prototype.name = "Lucy";

var o = new MyObject("hello", "you are awesome!");
console.log("Testing out o instance");
console.log(o.name);
console.log(o.getName());
