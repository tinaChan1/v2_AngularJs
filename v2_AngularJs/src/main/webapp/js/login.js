(function(){
	var loginApp = angular.module('loginApp', ['ui.bootstrap']);
	
	loginApp.controller('loginCtrl',['$scope', function($scope){
		$scope.login = function(){
			if($scope.loginForm.$valid){
				$("#loginForm").submit();
			}
		};
	}]);
	
})();

$(document).ready(function(){
	$("input").focus(function(){
		removeErrorMsg($(this).prop("id"));
	});
	
	$("input").blur(function(){
		var elmId = $(this).prop("id");

		if($(this).hasClass("ng-invalid-required")){
			displayErrorMsg("loginForm", elmId, "請輸入此欄位");				
		}


	});
	
	
});

var tooltipPostfix = "-validation-tooltip";
var placement = "right";

function displayErrorMsg(formName, name, message){
	
	
	var toolTipName =  name + tooltipPostfix;
	 
	var tooltipElm= '<div class="tooltip '+placement+' in tooltip-pos" placement="'+placement+'" id="' + toolTipName + '">'
    + '<div class="tooltip-arrow" style="border-'+placement+'-color: #d2322d;"></div>'
    + '<div class="tooltip-inner" style="background-color: #d2322d;" id="'
    + toolTipName + '-content">'+'<div class="validation-error">' + message +'</div>';
	
	var targetElm = $("[name='" + formName + "'] [name='" + name + "']");
	$(tooltipElm).appendTo(targetElm.parent());
	 
}

function removeErrorMsg(name){
	   var toolTipName = name + tooltipPostfix;
       $("#" + toolTipName).remove();
}
