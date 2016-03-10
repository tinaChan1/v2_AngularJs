var app = angular.module('mainApp', ['ngResource', 'ngGrid', 'ngRoute', 'datatables', 'isteven-multi-select']);

app.config(['$routeProvider', '$controllerProvider','$provide', function($routeProvider, $controllerProvider, $provide) {
                // remember mentioned function for later use
	                
                app.controllerProvider = $controllerProvider;
                app.provide = $provide;

                $routeProvider.when('/page1', {
            		templateUrl: 'page/page1',
            	})
            	.when('/page2', {
            		templateUrl: 'page/page2',
            	})
            	.when('/page3', {
            		templateUrl: 'page/page3',
            	})
            	.when('/page4', {
            		templateUrl: 'page/page4',
            	})
            	.when('/page5', {
            		templateUrl: 'page/page5',
            	})
            	.otherwise({
            		templateUrl: 'page/default',
                });	
            }]
);

app.directive('ahref',function($route, $location){	  
	  return {
	    link: function(scope, elm, attr){
	      elm.on('click',function(){
	    	initPage();
	        if ( $location.path() === attr.ahref ) {
	          $route.reload();
	        } else if(attr.ahref !== '#' ){
	          scope.$apply(function(){
	            $location.path(attr.ahref);
	          });
	        }                  
	      });
	    }
	  };
});

function initPage(){
	hideMsgArea();
}

function hideMsgArea(){
	$("#msgArea").hide();
}

function getDateTime(){
	var today = new Date();
	var dateTimeStr = today.getFullYear()+"-"+('0'+(today.getMonth()+1)).slice(-2)+"-"+('0'+today.getDate()).slice(-2)+" "+
	                  ('0'+today.getHours()).slice(-2)+":"+('0'+today.getMinutes()).slice(-2)+":"+('0'+today.getSeconds()).slice(-2)+"."+today.getMilliseconds();
	return dateTimeStr;
}