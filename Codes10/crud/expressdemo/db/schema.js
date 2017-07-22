const mongoose = require("./connection");
var Schema = mongoose.Schema;
var User = new Schema({userid:{type:String,required:true,unique:true},pwd:String});

var UserSchema = mongoose.model("users",User);
module.exports = UserSchema;
