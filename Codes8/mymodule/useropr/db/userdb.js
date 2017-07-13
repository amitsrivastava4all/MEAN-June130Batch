function isUserExist(userObject){
	var users= prepareUsers();
	var subUsers = users.filter((user)=>{
		return user.userid==userObject.userid && user.password == userObject.password;
	});
	return subUsers.length==1?true:false;
}
function prepareUsers(){
	var User = require("../views/user");
	var users = [];
	for(var i = 1; i<=5; i++){
		var userObject = new User("amit"+i,"12"+i);
		users.push(userObject);
	}
	return users;
}
module.exports=isUserExist;