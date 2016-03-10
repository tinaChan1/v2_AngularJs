var rowsHeightArray = [];

app.provide.factory('testService', ['$resource', function($resource){
	return $resource('user/:id',{},
			{
				find:{url:'user/find', method:'POST'},
				update:{method:'PUT'} 
			}
	);
}]);

app.controllerProvider.register('testCtrl',['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', '$q', 'testService', function($scope, DTOptionsBuilder, DTColumnBuilder, $q, testService){
	    $scope.data = [];
	    $scope.rowMessage = '';
	    var init = function(){
	    	 var dfd = $q.defer();
	    	 testService.get({}, 
	    			function success(response) {
		                  $scope.data = response.data;
		                  dfd.resolve($scope.data);	    		 
	    	        }, 
					function err(err) {
	    	        	  dfd.reject(err);
	    	        }
			  );	    	
	    	return dfd.promise;
	    };
	    
		var getData = function() {
		    var deferred = $q.defer();
		    deferred.resolve($scope.data); 
		    return deferred.promise;
		};
		

		$scope.dtInstance = {};
		
		$scope.getDtOptions = function(initFunc, rowCallback){
			return {
				"fnPromise": initFunc,
				"PaginationType": 'full_numbers',
				"searching": false,
				"rowCallback": rowCallback
			};
		};
		
		$scope.dtOptions = $scope.getDtOptions(init, rowCallback);
		$scope.dtColumns = [
	                    DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
	                    DTColumnBuilder.newColumn('name').withTitle('Name'),
	                    DTColumnBuilder.newColumn('age').withTitle('Age')
	     ];

		
		
		$scope.getTableData = function(){
			var allData = [];
			var sortedPosArray = $scope.dtInstance.dataTable.fnGetNodes();
			for(var i =0; i<sortedPosArray.length; i++ ){
				var pos = sortedPosArray[i]["_DT_RowIndex"];
				allData.push( $scope.dtInstance.dataTable.fnGetData(pos));
			}
			alert(JSON.stringify(allData));
		};
		

		$scope.addData = function(){
			$scope.getTableData();
			$scope.data;
			$scope.data = [{"id":1, "name":'cindy', "age":15}];
			$scope.dtInstance.changeData(getData());			
		};  
		
		function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			 $('td', nRow).unbind('click');
		     $('td', nRow).bind('click', function() {
		            $scope.$apply(function() {
		               $scope.rowMessage = aData.id+" "+aData.name+" "+aData.age;
		            });
		     });
		     return nRow;
		}
		
}]);