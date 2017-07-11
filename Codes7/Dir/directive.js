var app = angular.module("myapp",[]);

app.directive("anim",function(){
	return {
		link:function(scope,element,attrs){
			console.log("Anim ",element[0]);
			element.bind("click",function(){
			element.hide(2000);
			});
		},
		restrict:"A" 
		
	}
})

app.directive("youtubevideo",function(){
    return {
        controller:"myctrl",
        link:function(scope,element,attrs){
            element[0].innerHTML="<iframe width='640' height='360' src='"+attrs.youtubevideo+"' frameborder='0' allowfullscreen></iframe>";
			//console.log(attrs.testlevel);
        },
        restrict:"A"  // Element Level, Attribute Level , Class Level
    }
});

app.filter("myfilter",function(){
	return function(){
		return "this is just a filter";
	}
})
app.factory("myfactory",function(){
	var object={
		callWeather:function(){
		return {city:'Delhi',
			temp:41}
		}
	}
	return object;
})
app.controller("ctrl2",function($scope,myfactory,$filter){
	var result = $filter("myfilter")();
	$scope.filterresult = result;
	$scope.thirdno = 300;
	$scope.weatherdata=myfactory.callWeather();
});

app.directive("sum",function(){
	return {
        controller:"ctrl2",
        link:function(scope,element,attrs){
			var s = parseInt(attrs.firstno) + parseInt(attrs.secondno) + scope.thirdno ;
            element[0].innerHTML="<b>Sum of Two Numbers  </b>"+s+" Weather Data is "+scope.weatherdata.city+" "+scope.weatherdata.temp;
			
        },
		restrict:"E"
	}
});


app.controller("myctrl",function($scope){
$scope.firstName = "Amit";
    $scope.secondName = "Srivastava";

});

app.directive("tcsHeader",function(){
    return {
        template:"<h1 class='red'>This is Header of a Page {{firstName}} and {{secondName}}</h1>",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});

app.directive("tcsMenu",function(){
    return {
        template:"This is Menu of a Page",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});
app.directive("tcsFooter",function(){
    return {
        template:"<p class='green'>This is Footer of a Page</p>",
        restrict:"E"  // Element Level, Attribute Level , Class Level, Comment Level
    }
});