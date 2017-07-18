const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));
//app.set("view","views");
app.set('view engine','ejs');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
const routes = require("./routes/routes");
app.use('/admin',routes);
// parse application/json
app.use(bodyParser.json())

app.listen(1234,()=>{
	console.log("Server Start");
})