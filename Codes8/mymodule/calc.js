class Calculator{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	add(){
		return this.x + this.y;
	}
	subtract(){
		return this.x- this.y;
	}
}
function show(){
console.log("this is show");
}
var obj={
display:()=>{
console.log("this is display");
},
output:()=>{
console.log("this is output");
}	
}
var calcObject = new Calculator(100,200);
/*module.exports.cal = calcObject;
module.exports.my=show;
module.exports.myobject=obj;
*/
var myNewObject = {
	showKey:show,
	myObject:obj,
	calcKey:calcObject
}
module.exports=myNewObject;
