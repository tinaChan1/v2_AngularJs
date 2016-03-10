app.controllerProvider.register('page5Ctrl',['$scope', function($scope){
	$scope.modernBrowsers = [
	                        {name: '<strong>All Browsers</strong>', msGroup: true},
	                      	{name: "Opera",	ticked: false},
	                      	{name: "Internet Explorer", ticked: false},
	                      	{name: "Firefox", ticked: false},
	                      	{name: "Safari",  ticked: false},
	                      	{name: "Chrome",  ticked: false},
	                      	{msGroup: false},
	                      	{name: '<strong>Modern Browsers</strong>', msGroup: true},
	                      	{name: "Internet Explorer", ticked: false},
	                      	{name: "Firefox", ticked: false},
	                      	{name: "Chrome",  ticked: false},
	                      	{msGroup: false}	                      	
	                     ];
	$scope.outputBrowsers = [
    ];
}]);