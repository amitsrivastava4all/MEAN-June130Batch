app.factory("myfactory",function($http,$q){
	//var object = {};
	var object = {
	callServer : function(userObject,url){
		var defered = $q.defer();
		$http.post(url,userObject).then(function(data){
			defered.resolve(data);
		},function(err){
			defered.reject(err);
		});
		return defered.promise;
	}
			}
	return object;
})