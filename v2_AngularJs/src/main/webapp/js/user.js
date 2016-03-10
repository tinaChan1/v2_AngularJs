$(document).ready( function() {
	app.provide.factory('userService', ['$resource', function($resource){
		return $resource('user/:id',{},
				{
					find:{url:'user/find', method:'POST'},
					update:{method:'PUT'} 
				}
		);
	}]);

	app.controllerProvider.register('userCtrl',['$scope','userService', function($scope, userService){		
		$scope.user = {};
		$scope.myDataAll = [];
		$scope.myData = [];
		$scope.mySelection = [];
		$scope.totalServerItems = 0;
		$scope.pagingOptions = {
		        pageSizes: [5, 10, 15],
		        pageSize: '5',
		        currentPage: 1
        };
		$scope.gridOptions = { 
				i18n: 'zh-tw',
				data: 'myData', 
				showFooter: true,
				columnDefs: [{field:'id', visible:false}, {field:'name', displayName:'Name'}, {field:'age', displayName:'Age'}],
				multiSelect: false, 
				selectedItems: $scope.mySelection,
				enablePaging: true,
				totalServerItems: 'totalServerItems',
				pagingOptions: $scope.pagingOptions,
				afterSelectionChange:function(row, event) {
					if(row.selected == true){
						$scope.id = $scope.mySelection[0].id;
						$scope.name = $scope.mySelection[0].name;
						$scope.age = $scope.mySelection[0].age;
					}
				}
		};
			     
		watchPagedChange($scope);
	     
		$scope.queryAll = function(action){
			userService.get({}, 
					function success(response) {
				           
				           $scope.myDataAll= response.data;
				           setPagingData($scope.myDataAll, $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize, $scope);
				           
				           if(action == 'query' && response.result != null){
				        	   var msg = response.result;
				        	   showResultMsg(msg);
				           }
				           
				     }, 
					function err(err) {}
			);
		};
		$scope.query = function(action){
			$scope.user.id = $scope.id;
			$scope.user.name = $scope.name;
			$scope.user.age = $scope.age;
			userService.find($scope.user, 
					function success(response) {
						$scope.myDataAll= response.data;
						setPagingData($scope.myDataAll, $scope.pagingOptions.currentPage, $scope.pagingOptions.pageSize, $scope);
						if(response.result != null){
							var msg = response.result;
				        	showResultMsg(msg);
				        }
					}, 
					function err(err) {}
			);
		};
		
		$scope.insert = function(action){
			$scope.user.name = $scope.name;
			$scope.user.age = $scope.age;
			userService.save($scope.user, 
					function success(response){
						$scope.queryAll();
						if(response.result != null){
							var msg = response.result;
				        	showResultMsg(msg);
				        }
					}, 
					function err(err) {}
			);
		};
		
		$scope.deleteUser = function(action){
			userService.delete({id: $scope.id}, 
					function success(response) {
						$scope.queryAll();
						if(response.result != null){
							var msg = response.result;
				        	showResultMsg(msg);
				        }
					}, 
					function err(err) {}
			);
		};
		
		$scope.update = function(action){
			$scope.user.id = $scope.mySelection[0].id;
			$scope.user.name = $scope.name;
			$scope.user.age = $scope.age;
			userService.update($scope.user, 
					function success(response) {
						$scope.queryAll();
						if(response.result != null){
							var msg = response.result;
				        	showResultMsg(msg);
				        }
					}, 
					function err(err) {}
			);
		};
	}]);
	

});

function watchPagedChange(scope){
	scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal != oldVal) {
            if(newVal.pageSize != oldVal.pageSize){
            	scope.pagingOptions.currentPage = 1;
            }
            setPagingData(scope.myDataAll, scope.pagingOptions.currentPage, scope.pagingOptions.pageSize, scope);
        }
    }, true);	
}

function setPagingData(data, page, pageSize, scope){ 
	pageSize = Number(pageSize);
	var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
	scope.myData = pagedData;
	scope.totalServerItems = data.length;
	if (!scope.$$phase) {
		scope.$apply();
	}
};

function showResultMsg(msgStr){
	$('#msgArea #msgText h4').text(msgStr);
	$('#msgArea').show();
	   
	var dateTimeStr = getDateTime();
	$('#msgArea #msgTime').text(dateTimeStr);	
};