const express = require("express");
const route = express.Router();
const path = require("path");
const crud = require("../db/crud");
const User = require("../helper/user");
route.post("/register",(req,res)=>{
	var userid = req.body.userid;
	var pwd = req.body.pwd;
	var userObject = new User(userid, pwd);
	crud.register(userObject,res);
});
route.post("/login",(request,response)=>{
	var userid = request.body.userid;
	var pwd = request.body.pwd;
	var userObject = new User(userid, pwd);
	//var userid = request.query.userid;
	//var pwd = request.query.pwd;
	crud.login(userObject,request, response)
	
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