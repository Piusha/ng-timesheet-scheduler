/**
 * This is Task calender Directive
 */



(function(angular,$){
    'use strict';
    var DirApp = angular.module('Diveargnet');
    var directiveId = 'taskCalender',
        directiveData = 'taskCalenderData';
    DirApp.directive(directiveId,['taskSchedulerDateService',directiveFunction]);



    function directiveFunction(taskSchedulerTimeService){


        return {
            restrict:"E",
            scope:{
                calenderRowData:"="
            },
            templateUrl:'public/app/templates/taskCalender.dir.html',
            link:function(scope, element, attr){


                var CalenderDate = {
                    getDayName:function(start_date,end_date){
                        var week_day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



                        var _start_date  = new Date(start_date);
                        var _end_date    = new Date(end_date);
                        var _formatted_day = [];
                        while(_start_date < _end_date){


                            var _tmp_start_date = _start_date;
                            var _tmp_week_dates = [];
                            for(var i =0; i<7;i++ ){

                                var _new_tmp_start_date = (i == 0)?_tmp_start_date:_tmp_start_date.setDate(_tmp_start_date.getDate() + 1);
                                var _tmp_start_date = new Date(_new_tmp_start_date);
                                _tmp_week_dates.push({
                                    year:_tmp_start_date.getFullYear(),
                                    date:_tmp_start_date.getDate(),
                                    day_name:week_day_names[_tmp_start_date.getDay()],
                                    month:mL[_tmp_start_date.getMonth()]
                                });
                            }

                            _formatted_day.push(_tmp_week_dates);
                            var newDate = _start_date.setDate(_start_date.getDate() + 7);
                            _start_date = new Date(newDate);
                        }
                    return _formatted_day;

                    },
                    setCalenderData:function(){
                        //var _content_element = $('#2016_october_27').addClass('');
                        var _content_element = element.find('#row_0_2016_october_27').append($('<div class="data-content" draggable="true"></div>'));



                        //_content_element.className("data-content");
                        //angular.element().addClass("alllign");
                        //var myEl = angular.element( element[0].querySelector( '#2016_october_27' ) );
                       // myEl.addClass('alpha');
                        //console.log(_content_element);


                    }
                };

                scope.calender_dates = CalenderDate.getDayName('10/24/2016','5/30/2017');


                scope.calender_header = {
                    row_title:'10/24/2016'
                };


                setTimeout(function(){
                    CalenderDate.setCalenderData();
                },1000);


            }
        }

    }


})(angular,jQuery);