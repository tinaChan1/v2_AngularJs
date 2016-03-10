<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/lib/bootstrap/css/bootstrap.min.css">		
<link rel="stylesheet" href="/lib/cht/css/login.css" />
<link rel="stylesheet" href="/lib/cht/css/theme.css" />
<link rel="stylesheet" href="/css/custom.css" />

<script type="text/javascript" src="/lib/jquery/js/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="/lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/lib/angularJs/js/angular.min.js"></script>
<script type="text/javascript" src="/lib/angular-ui-bootstrap/js/ui-bootstrap-tpls-0.10.0.min.js"></script>
<script type="text/javascript" src="/js/login.js"></script>
<title>登入頁面</title>
</head>
<body ng-app="loginApp">
	<div ng-controller="loginCtrl">
		<div class="container">		
			<section class="col-sm-6 col-sm-offset-3 panel-login-form">
					<form name="loginForm" id="loginForm" action="httpdispatcher/main" method="POST" class="form-inline">	
						<div class="row-fluid">
							<div class="btn-toolbar pull-right">
								<div class="btn-group center">
									<button type="button" autofocus="autofocus" class="btn btn-primary" accesskey="l" ng-click="login()">
										<i class="glyphicon glyphicon-log-in"></i>&nbsp;登入
									</button>
								</div>
							</div>
						</div>	
						<div class="panel panel-info">
							<div class="panel-heading">
								<h3 class="panel-title">
									<span class="text-muted">登入</span>
									<span style="padding-left: 5px">食品流向查詢系統</span>
								</h3>
							</div>
							<div class="panel-body">
								<div class="row">
									<div class="form-group col-sm-6">
										<label class="control-label" for="id">使用者帳號</label>
										<input type="text" class="form-control" id="id" name="id" ng-model="model.id" required>
									</div>
	
									<div class="form-group col-sm-6">
										<label class="control-label" for="passphraseInput">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碼</label>
										<input type="password" class="form-control" id="passphraseInput" name="passphraseInput" autocomplete="off" ng-model="model.passphraseInput" required>
									</div>
								</div>
							</div>
						</div>						
						<div class="alert alert-warning">
							<p>
								<span class="glyphicon glyphicon-cutlery"></span>
								各系統可以自訂 <code>WEB-INF/templates/login_information.html</code>，在登入頁中顯示額外的資訊。
							</p>
							<p>
								<span class="glyphicon glyphicon-pencil"></span>
								也可以參照到自己專案中的資源，只要把檔案放在
								<code>src/main/webapp</code> 的 <code>docs</code> 或 <code>files</code> 目錄下，就能透過
								<code>&lt;a th:href="@{/docs/...}"&gt;</code> 這種方式存取。
							</p>
						</div>						
						<div>
							<div class="alert alert-warning">
							<span class="glyphicon glyphicon-info-sign"></span>
							如果無法正常顯示或登入，請參考
							《<a href="docs/requirements.html" id="link">食品產業之財稅巨量資料分析應用系統需求說明</a>》。
							</div>
						</div>						
					</form>
			</section>
		</div>		
		<div>
			<footer class="footer text-center">
				<p>
					版權所有 &copy; 中華民國 104 年，財政部財政資訊中心，建議解析度 1024×768 以上。
				</p>
			</footer>
		</div>		
	</div>
</body>
</html>