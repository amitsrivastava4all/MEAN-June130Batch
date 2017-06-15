window.addEventListener("load",()=>{
document.getElementById("add").addEventListener("click",addItem);
document.getElementById("cl").addEventListener("click",clearClass);	
clearFields();	
});
function clearClass(){
	var tbody = document.getElementById("itemlist");
	tbody.childNodes
}

function addItem(){
	var itemNo = document.getElementById("itemno").value;
	var name = document.getElementById("name").value;
	var desc = document.getElementById("desc").value;
	var price = document.getElementById("price").value;
	var qt = document.getElementById("qt").value;
	var url = document.getElementById("url").value;
	var tbody = document.getElementById("itemlist");
	itemOperations.addNewItem(name,desc,price,qt,url);
	
	var tr = tbody.insertRow();
	var itemObject = itemOperations.getLastObject();
	var index = 0;
	for(var key in itemObject){
		tr.insertCell(index).innerHTML = itemObject[key];
		index++;
	}
	var deleteImg = document.createElement("img");
	deleteImg.src = '../images/delete.jpg';
	deleteImg.className="showcursor";
	deleteImg.addEventListener("click",markForDeletion);
	tr.insertCell(index).append(deleteImg);
	//tr.insertCell(index).innerHTML = "<img id='hfdsjk' src='../images/delete.jpg'>&nbsp;<img src='../images/edit.png'>";
	clearFields();
//	tr.insertCell(0).innerHTML = itemNo;
//	tr.insertCell(1).innerHTML = name;
//	tr.insertCell(2).innerHTML = desc;
//	tr.insertCell(3).innerHTML = price;
//	tr.insertCell(4).innerHTML = qt;
//	tr.insertCell(5).innerHTML = url;
	
}
function markForDeletion(event){
var tr = event.srcElement.parentElement.parentElement;	

tr.classList.toggle("red");	
//alert("Mark For Deletion Call "+tr);
}
	
function clearFields(){
	var allfields = document.getElementsByClassName("clearfields");
	for(var i = 0; i<allfields.length; i++){
		allfields[i].value="";
	}
	document.getElementById("itemno").innerHTML=itemOperations.getId();	
document.getElementById("name").focus();
	
}