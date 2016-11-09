/**
 * Created by PiushaKalyana on 11/8/16.
 */

(function(angular){

    'use strict';

    var DirApp          = angular.module('Diveargnet'),
        GridDirId  = 'weekGrid';
    DirApp.directive(GridDirId,['taskSchedulerDateService',gridFunction]);

    function gridFunction(SchedulerDateService){

        return {
            restrict:"E",
            templateUrl:"public/app/templates/week-grid.dir.html",
            link:function(scope, element, attr){
                scope.week_gird_date = SchedulerDateService.getWeekGridData('10/24/2016','5/30/2017');

            }

        }




    }



})(angular);