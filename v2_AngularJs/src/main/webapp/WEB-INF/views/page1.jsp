<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script type="text/javascript" src="/js/user.js"></script>
</head>
<body>
	<div ng-controller="userCtrl" >
	    <div class="btn-pos-setting">
	    	<button type="button" class="btn btn-primary">
	  			<span class="glyphicon glyphicon-search" aria-hidden="true"></span>&nbsp;查詢
			</button>
			<button type="button" class="btn btn-primary">
	  			<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;新增
			</button>
	    </div>
		<div class="panel panel-info">
		  	<div class="panel-heading panel-info">
                 	使用者管理功能
		  	</div>
		  	<div class="panel-body">
	  	  	  <div class="container-fluid">
				<div class="row">
					<div class="col-md-2">
						<input class="Wdate form-control" type="text" onClick="WdatePicker()">
					</div>
					<div class="col-md-3">
						<input class="Wdate form-control" type="text" onClick="WdatePicker({autoPickDate:true ,dateFmt:'yyyy/MM/dd HH:mm:ss'})">
					</div>
					<div class="col-md-2">
						<input type="text" id="sellerId" name="sellerId" class="form-control" ng-model="model.sellerId" required placeholder="請輸入公司統編…" >
					</div>
				</div>
				<p></p>
				<div class="row">
					<div class="col-md-4">
						<input type="button" ng-click="queryAll('query')"> 查詢全部
						<input type="button" ng-click="query('query')"> 查詢
						<input type="button" ng-click="insert('insert')"> 新增
						<input type="button" ng-click="deleteUser('delete')"> 刪除
						<input type="button" ng-click="update('update')"> 修改
					</div>
					<div class="col-md-8">
						Id &nbsp;<input type="text" ng-model="id">	
						Name &nbsp;<input type="text" ng-model="name">
						Age &nbsp;<input type="text" ng-model="age">				
					</div>
				</div>
			 </div>
			 <div class="gridStyle" ng-grid="gridOptions"></div>  	
		    </div>
	   </div>
	</div>    
</body>
</html>    