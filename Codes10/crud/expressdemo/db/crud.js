var UserSchema = require("./schema");
const UserOperations={
	register:function(userObject,response){
		var userSchObject = new UserSchema({userid:userObject.userid,pwd:userObject.pwd});
		userSchObject.save(function(err,result){
			if(err){
				response.send("Error During Register....");
			}
			else{
				response.send("Register SuccessFully");
			}
		})
	},
	login:function(userObject,request,response){
		UserSchema.find({userid:userObject.userid,pwd:userObject.pwd},function(err,docs){
			if(docs && docs.length>0){
				console.log(docs[0].userid);
				doLoginThings(request,response,userObject);
			}
			else{
				response.send("Invalid Userid or Password");
			}
		})
	}
}
module.exports=UserOperations;

function doLoginThings(request,response,userObject){
	request.session.uid = userObject.userid;
		//var normalPath = path.normalize(__dirname+"/..");
		//var fullPath = path.join(normalPath,"/public/welcome.html");
		//response.sendFile(fullPath);
		const menuOptions = [{"name":"Add New User","link":"/admin/hello"},{"name":"Delete User","link":"http://www.flipkart.com"},{"name":"Profile User","link":"http://www.amazon.com"}]
		var img = {"image":"/images/y.png"}
		var userDetails = {
			data:["Sales Report","Purchase Report","Employee Report","Assets Report"]
		}
		response.render('welcome',{"user":userObject.userid,"userdetails":userDetails,"menu":menuOptions,"images":img});
}
