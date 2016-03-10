<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="mainUI"    tagdir="/WEB-INF/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="/lib/bootstrap/css/bootstrap.min.css" />
	<link rel="stylesheet" href="/lib/angularJs/css/ng-grid.min.css" />
	<link rel="stylesheet" href="/lib/angular-multi-select-master/css/isteven-multi-select.css">
	<link rel="stylesheet" href="/lib/dataTables/css/dataTables.bootstrap.min.css" />
	<link rel="stylesheet" href="/lib/dataTables/css/jquery.dataTables_themeroller.css" />
	<link rel="stylesheet" href="/lib/dataTables/css/jquery.dataTables.min.css" />
	<!-- custom css file -->
	<link rel="stylesheet" href="/css/custom.css" />
	<script type="text/javascript" src="/lib/jquery/js/jquery-2.1.3.min.js"></script>
	<script type="text/javascript" src="/lib/dataTables/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="/lib/angularJs/js/angular.min.js"></script>
	<script type="text/javascript" src="/lib/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/lib/angularJs/js/angular-resource.min.js"></script>
	<script type="text/javascript" src="/lib/angularJs/js/angular-route.min.js"></script>
	<script type="text/javascript" src="/lib/angularJs/js/ng-grid-2.0.14.min.js"></script>
	<script type="text/javascript" src="/lib/angular-multi-select-master/js/isteven-multi-select.js"></script>
	<script type="text/javascript" src="/lib/my97DatePicker/WdatePicker.js"></script>
	<script type="text/javascript" src="/lib/dataTables/js/dataTables.bootstrap.min.js"></script>
	<script type="text/javascript" src="/lib/dataTables/js/angular-datatables.min.js"></script>
	<!-- custom js file -->
	<script type="text/javascript" src="/js/main.js"></script>
	<title>AngularJs</title>
</head>
<body ng-app="mainApp">
       <div class="container">
	    <mainUI:menu/>
		<mainUI:msgBar/>
        <div class="content-syscom">
			<div ng-view></div>
		</div>
	</div>
</body>
</html>