const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post("/login",(request,response)=>{
	var userid = request.body.userid;
	var pwd = request.body.pwd;
	//var userid = request.query.userid;
	//var pwd = request.query.pwd;
	if(userid==pwd){
		response.sendFile(__dirname+"/public/welcome.html");
	}
	else{
		response.send("Invalid Userid or password");
	}
	console.log("Query is ",request.body);	
});
app.get('/',(request,response)=>{
	console.log(__dirname);
	response.sendFile(__dirname+"/pages/index.html");
	//response.send("<b>Hello User</b>");
});
app.get('/welcome',(request,response)=>{
	response.send("{id:1001,name:'Ram',salary:99999}");	
});
app.listen(1234,()=>{
	console.log("Server Start");
})