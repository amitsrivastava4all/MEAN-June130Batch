//alert("Hello I am Here....");

window.addEventListener("load",init);
function init(){
var bt = document.getElementsByTagName("button");
//console.log("Read Button ",bt.length);
for(var i = 0; i<bt.length; i++){
	//console.log("Iam in the loop");
bt[i].addEventListener("click",update);
	
}
}
var counter =0;
		function update(){
			var opr = this.innerHTML;
			counter = opr=='+'?++counter:--counter;
			document.getElementById("count").innerHTML=counter;
			//console.log("Update Call "+this.innerHTML);
		}