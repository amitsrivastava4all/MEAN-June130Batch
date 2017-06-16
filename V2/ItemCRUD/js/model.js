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
	sortByPrice:function(){
		  this.itemList.sort(function(itemFirst, itemSecond){
			  
			return itemFirst.price - itemSecond.price;
		});
		return this.itemList;
	},
	delete:function(){
		this.itemList = this.itemList.filter(function(itemObject){
			return itemObject.markForDeletion == false;
		});
	},
	searchById:function(itemno){
		var itemArr=this.itemList.filter(function(itemObject){
			return itemObject.id == itemno;
		});
		itemArr[0].markForDeletion= !itemArr[0].markForDeletion;
	},
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