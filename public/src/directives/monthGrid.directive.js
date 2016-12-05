/**
 * Created by PiushaKalyana on 11/8/16.
 */

(function(angule,$){
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

                scope.month_gird_date = _tmp;
                scope.lineItems = SchedulerDateService.prepareItemModel(scope.itemModel);
                scope.dropped_id = "";
                setTimeout(function(){
                    $('.cell-data').draggable();

                    $('.month-dates table tr td').droppable({
                        drop: function( event, ui ) {

                            scope.dropped_id = $(this).data('current-cellid');
                            console.log(scope.dropped_id);

                        }
                    });

                },1000);




            }

        }




    }


})(angular,jQuery);