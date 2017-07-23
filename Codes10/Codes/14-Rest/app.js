var express = require("express");
var app = express();
//app.use(express.static("public"));
// Rest Param (/:param name)
app.get('/search/cars/hatchback/:carname',function(request,response){
	var carName = request.params.carname;
	var object = {
		name:'Swift',
		price:'5 Lakh',
		average:'21'
	}
	response.send(object);
});
app.get('/search/cars/sedan',function(request,response){
	
});
app.listen(2222,function(){
	console.log("Server Start...");
});