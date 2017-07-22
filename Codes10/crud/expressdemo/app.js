const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(session({
	  secret: 'cat keyboard dog',
	  	cookie: { secure: false,maxAge: 60000
				  }  // 1 min session
	}));
	app.use(cookieParser())

//app.set("view","views");
app.set('view engine','ejs');
app.set("views","./views");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
const routes = require("./routes/routes");
app.use('/admin',routes);
// parse application/json
app.use(bodyParser.json())

app.listen(1234,()=>{
	console.log("Server Start");
})