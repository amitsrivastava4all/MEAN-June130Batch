
var validateObject = {
	validateUser:(userObject)=>{
		var validationObject = require("../utils/common");
		if(validationObject.isBlank(userObject.userid)){
			return "Userid is Blank";
		}
		if(validationObject.isBlank(userObject.password)){
			return "Password is Blank";
		}
		return "";
	},
	process:(userObject)=>{
		if(validateObject.validateUser(userObject).length==0){
			var isUserExist = require("../db/userdb");
			if(isUserExist(userObject)){
				return "Welcome "+userObject.userid
			}
			else{
				return "Invalid Userid or Password ";
			}
			// Call DB
		}
		else{
			return "User Validation Fail";
		}
	}
}
module.exports = validateObject;

