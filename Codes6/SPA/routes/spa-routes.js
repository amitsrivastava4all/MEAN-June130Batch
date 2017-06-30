// Routing of SPA

//app.constant("HOMEURL","html.html");
app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"home.html",
        controller:"homeCtrl"
    }).when("/login",{
        templateUrl:"login.html",
        controller:"loginCtrl"
    }).when("/register",{
        templateUrl:"register.html"
    }).when("/offers/:count/:discount",{
        templateUrl:"offers.html",
        controller:"offerCtrl"
    }).when("/aboutus",{
        template:"<h1>This is SPA Demo</h1>"
    }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});