/**
 * Created by PiushaKalyana on 11/8/16.
 */

(function(angule){
    'use strict';

    var DirApp          = angular.module('Diveargnet'),
        MonthGridDirId  = 'monthGrid';

    DirApp.directive(MonthGridDirId,['taskSchedulerDateService',monthGridFunction]);

    function monthGridFunction(SchedulerDateService){

        return {
            restrict:"E",
            scope:{
                itemModel:'='
            },
            templateUrl:"public/app/templates/month-grid.dir.html",

            link:function(scope, element, attr){
               var _tmp = SchedulerDateService.getGridDates('10/24/2016','5/30/2017');
                console.log(_tmp);
                scope.month_gird_date = _tmp;

            }

        }




    }


})(angular);