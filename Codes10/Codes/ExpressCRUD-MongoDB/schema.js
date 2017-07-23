var connection = require("./connection.js");
var Schema = connection.Schema;
var userSchema = new Schema({userid:{type:String,required:true,unique:true},password:String});
var User = connection.model("masterusers",userSchema);
module.exports=User;