// My Module

const Calc = require("./calc");

var calObject = new Calc(100,200);
//console.log("Add is "+calObject.add());

function showResult(){
	console.log("Add is "+calObject.add());
	console.log("Subtract is "+calObject.subtract());
}
showResult();
module.exports = showResult;