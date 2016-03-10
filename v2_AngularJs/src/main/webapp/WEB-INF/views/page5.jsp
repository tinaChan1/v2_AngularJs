<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="/js/page5.js"></script>
</head>
<body>
	<div ng-controller="page5Ctrl">
		<div
		    isteven-multi-select
		    input-model="modernBrowsers"
		    output-model="outputBrowsers"
		    button-label="name"
		    item-label="name"
		    tick-property="ticked"
		    orientation="horizontal" 
		    selection-mode="single"
		    helper-elements=""
		    group-property="msGroup"
		 >
	     </div>
	</div>
</body>
</html>