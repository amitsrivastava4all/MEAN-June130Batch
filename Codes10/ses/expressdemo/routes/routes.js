const express = require("express");
const route = express.Router();
const path = require("path");
route.post("/login",(request,response)=>{
	var userid = request.body.userid;
	var pwd = request.body.pwd;
	//var userid = request.query.userid;
	//var pwd = request.query.pwd;
	if(userid==pwd){
		request.session.uid = userid;
		//var normalPath = path.normalize(__dirname+"/..");
		//var fullPath = path.join(normalPath,"/public/welcome.html");
		//response.sendFile(fullPath);
		const menuOptions = [{"name":"Add New User","link":"/admin/hello"},{"name":"Delete User","link":"http://www.flipkart.com"},{"name":"Profile User","link":"http://www.amazon.com"}]
		var userDetails = {
			data:["Sales Report","Purchase Report","Employee Report","Assets Report"]
		}
		response.render('welcome',{"user":userid,"userdetails":userDetails,"menu":menuOptions});
	}
	else{
		response.send("Invalid Userid or password");
	}
	console.log("Query is ",request.body);	
});
route.get('/hello',(req,res)=>{
	if(req.session.uid){
		res.send("session is present, welcome "+req.session.uid);
	}
	else{
		var normalPath = path.normalize(__dirname+"/..");
		var fullPath = path.join(normalPath,"/public/login.html");
		res.sendFile(fullPath);
		
	}
});
route.get('/',(request,response)=>{
	console.log("CURRENT DIR "+__dirname);
	
	response.sendFile(__dirname+"/pages/index.html");
	//response.send("<b>Hello User</b>");
});
route.get('/welcome',(request,response)=>{
	response.send("{id:1001,name:'Ram',salary:99999}");	
});
module.exports = route;