var UserSchema = require("./schema.js");

var dbOperations = {
	addNewUser: function (userObject, response) {
		var userObject = new UserSchema({
			userid:userObject.userid, password:userObject.password
		});
		userObject.save(function (err) {
			if (!err) {
				response.send("Record Added....");
			} else {
				response.send("Error in Addition");
			}

		})

	},
	getUser: function (userObject, response) {
		UserSchema.find({
			userid: userObject.userid,
			password: userObject.password
		}, function (err, user) {
			if(err){
				response.send("Some DB Problem");
			}
			else{
				if(user[0]){
				response.send("Welcome "+user[0].userid);
				console.log(user);	
				}
				else{
					response.send("Invalid Userid or Password");
				}
				
			}
		})
	},
	deleteUser:function(userObject,response){
		UserSchema.findOneAndRemove({userid:userObject.userid},function(err){
			if(err){
				response.send("Record not found , can't delete the record");
			}
			else{
				response.send("Record Deleted...");
			}
		})
	},
	updateUser:function(userObject,response){
		UserSchema.findOneAndUpdate({userid:userObject.userid},{$set:{userid:'amit',password:'123'}},function(err){
			if(err){
				response.send("Record not Found, Can't Update the record");
			}
			else{
				response.send("Record Updated..");
			}
		})
	}
}
module.exports=dbOperations;