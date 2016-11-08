(function(angular){
	'use strict';
	var app = angular.module('Diveargnet');
	var controllerId = 'HomeController';
	app.controller(controllerId,['$scope',controllerFunction]);


	function controllerFunction($scope){




		$scope.name="This is angularjs 1.5";

		var _calender_rows =[];

		for(var a= 0;a<10;a++){
			_calender_rows.push({
				row_title:"Team "+parseInt(a),
				row_id:a
			});
		}
		$scope.calender_row_data = _calender_rows;

	}



})(angular);





