var userid = "amit2";  // Come from AngularJS
var password = "122";

var User = require("./user");
var userObject = new User(userid, password);
//console.log(userObject);
var helper = require("../helper/userhelper");
var result = helper.process(userObject);
console.log(result);