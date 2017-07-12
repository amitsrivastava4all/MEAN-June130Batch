var fs = require("fs");
var content = fs.readFileSync("Sample.txt");
console.log("Content is "+content);
var a = 100;
var b = 200;
var c = a + b;
console.log("Sum is "+c);