<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="/js/test.js"></script>
</head>
<body>
	<div ng-controller="testCtrl">
		<div class="btn-pos-setting">
	    	<button type="button" class="btn btn-primary">
	  			<span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;查詢
			</button>
			<button type="button" class="btn btn-primary" ng-click="addData()">
	  			<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;新增
			</button>
	    </div>
		<div class="panel panel-info">
		  	<div class="panel-heading panel-info">
                 	測試功能
		  	</div>
		  	<div class="panel-body">
		  		<div>{{rowMessage}}</div>
				 <table datatable="" dt-options="dtOptions" dt-columns="dtColumns" dt-instance="dtInstance" class="row-border hover" width="100%"></table>
		    </div>
	   </div>   
	</div>
</body>
</html>