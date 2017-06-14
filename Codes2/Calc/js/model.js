/* 
Model - It contain the logic 
*/
/* Functional Style
function add(x,y){
return parseInt(x) + parseInt(y);
}
function subtract(x,y){
return x-y;
}
function multiply(x,y){
return x*y;
}
function divide(x,y){
return x/y;
}
*/
/*  OOPS Style
var calcObject = {
 add:function(x,y){
return parseInt(x) + parseInt(y);
},
subtract:function (x,y){
return x-y;
},
multiply:function (x,y){
return x*y;
},
divide:function (x,y){
return x/y;
}
}*/
//  
function commonOperation(firstno, secondno, operator){
	var expr = firstno + operator + secondno;
	return eval(expr);
}