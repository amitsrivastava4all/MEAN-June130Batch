var fs = require("fs");
 fs.readFile("Sample.txt",function(err,content){
	 if(!err){
	console.log("Content is "+content);
	 }
	 else{
		 console.log("error in loading file...");
	 }
});

var a = 100;
var b = 200;
var c = a + b;
console.log("Sum is "+c);