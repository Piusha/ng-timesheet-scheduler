(function(angular){
	'use strict';
	var app = angular.module('Diveargnet');
	var controllerId = 'HomeController';
	app.controller(controllerId,['$scope','taskSchedulerDateService',controllerFunction]);


	function controllerFunction($scope,SchedulerDateService){




		$scope.model= {
			header:{
				title:"Line Numbers"
			},
			items:[
				{
					title:'Line 1',
					dates:[
						{
							start:SchedulerDateService.convertToDate('10/27/2016'),
							end:SchedulerDateService.convertToDate('10/28/2016'),
							description:'Line 1 Description 100'
						},
						{
							start:SchedulerDateService.convertToDate('10/30/2016'),
							end:SchedulerDateService.convertToDate('11/01/2016'),
							description:'Line 1 Description 200'
						}
					]
				},
				{
					title:'Line 2',
					dates:[
						{
							start:SchedulerDateService.convertToDate('10/27/2016'),
							end:SchedulerDateService.convertToDate('11/05/2016'),
							description:'Line 2 Description 1000'
						},
						{
							start:SchedulerDateService.convertToDate('11/06/2016'),
							end:SchedulerDateService.convertToDate('11/06/2016'),
							description:'Line 2 Description 2000'
						}
					]
				},
				{
					title:'Line 3',
					dates:[
						{
							start:SchedulerDateService.convertToDate('11/10/2016'),
							end:SchedulerDateService.convertToDate('11/20/2016'),
							description:'Line 3 Description 1000'
						}
					]
				},
				{
					title:'Line 4',
					dates:[
						{
							start:SchedulerDateService.convertToDate('11/24/2016'),
							end:SchedulerDateService.convertToDate('12/5/2016'),
							description:'Line 4 Description 1000'
						}
					]
				}
			]
		};



	}



})(angular);





