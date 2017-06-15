function Item(id, name, desc , price, qt, url){
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.price = price;
	this.qt = qt;
	this.url = url;
	this.markForDeletion = false;
}




var itemOperations = {
	itemList:[],
	id :1,
	//addNewItem:function(id,name,desc,price,qt,url){
	addNewItem:function(name,desc,price,qt,url){
	
		var itemObject = new Item(this.id, name, desc,price, qt,url);
		this.itemList.push(itemObject);
	this.id ++;
	},
	getLastObject:function(){
	return this.itemList[this.itemList.length-1];
},
getId:function(){
return this.id;
}
}