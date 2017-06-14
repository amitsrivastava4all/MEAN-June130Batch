/*
Glue B/w View and Model
1. Get All Operation Buttons
*/
window.addEventListener("load",bindEvents);
function bindEvents(){
	var btArray = document.getElementsByClassName("operation");
	Array.prototype.forEach.apply(btArray,[function(currentBt){
//console.log(bt.innerHTML);
		currentBt.addEventListener("click",doOperation);
}])
//	for(var i = 0; i<btArray.length; i++){
//		btArray[i].addEventListener("click",doOperation);
//	}
}
function doOperation(){
	//var opr = this.getAttribute("data-opr");
	//console.log("Opr is ",opr);
	var opr = this.innerHTML;
	var firstNo = document.getElementById("firstno").value;
	var secondNo = document.getElementById("secondno").value;
	var result= 0;
	result= commonOperation(firstNo,secondNo,opr);
	//result = calcObject[opr](firstNo,secondNo);
//	if(opr=='+'){
//		result = add(firstNo,secondNo);
//	}
//	else
//	if(opr=='-'){
//		result = subtract(firstNo,secondNo);
//	}
//	else
//	if(opr=='*'){
//		result = multiply(firstNo,secondNo);
//	}
//	else
//	if(opr=='/'){
//		result = divide(firstNo,secondNo);
//	}
	document.getElementById("result").innerHTML = result;
}

