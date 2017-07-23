app.controller("myctrl",function($scope,myfactory){
	$scope.user={};
	$scope.login=function(){
		var userObject = {
			userid:$scope.user.userid,password:$scope.user.pwd
		}
		var promise= myfactory.callServer(userObject,url.loginurl);
		promise.then(function(data){
			$scope.result = data.data;
		},function(err){
			$scope.result = err;
		})
	}
	$scope.register=function(){
		var userObject = {
			userid:$scope.user.userid,password:$scope.user.pwd
		}
		var promise= myfactory.callServer(userObject,url.registerurl);
		promise.then(function(data){
			$scope.result = data.data;
		},function(err){
			$scope.result = err;
		})
	}
	$scope.delete = function(){
		var userObject = {
			userid:$scope.userid,password:$scope.password
		}
		$scope.result= myfactory.callServer(userObject,url.register);
	}
	$scope.update = function(){
		var userObject = {
			userid:$scope.userid,password:$scope.password
		}
		$scope.result= myfactory.callServer(userObject,url.register);
	}
});
