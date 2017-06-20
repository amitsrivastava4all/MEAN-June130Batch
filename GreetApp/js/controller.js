//function myctrl($scope){
//	$scope.sayWelcome=function(){
//		var result = "Welcome "+$scope.firstname+" "+$scope.lastname;
//		$scope.message = result;
//	}
//}
//app.controller("greetctrl",myctrl);
//app.controller("greetctrl",function($scope){
//	$scope.sayWelcome=function(){
//		var result = "Welcome "+$scope.firstname+" "+$scope.lastname;
//		$scope.message = result;
//	}
//})
app.controller("greetctrl",($scope,greetfactory)=>{
	console.log("Controller Call ",greetfactory);
	$scope.sayWelcome=()=>{
		
	console.log("$scope ",$scope);
	var result = "Welcome "+greetfactory.initcap($scope.firstname)+" "+greetfactory.initcap($scope.lastname);
	$scope.message = result;	
	}

})
			   