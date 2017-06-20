app.factory("greetfactory",()=>{
	var object = {
//		initcap:function(str){
//			return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//		}
		initcap:(str)=>{
			return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
		}
	};
	console.log("Factory Call.....");
	return object;
});