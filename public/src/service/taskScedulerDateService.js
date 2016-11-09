/**
 * Created by PiushaKalyana on 11/7/16.
 */


(function(angular){
    'use strict';
    var DirApp = angular.module('Diveargnet');

    DirApp.service('taskSchedulerDateService', [function () {
        var MONTH   = 'month',
            WEEK    = 'week',
            DAY     = 'day';
        return {
            formattedDate:{
                grid_months:[],
                grid_dates:{}
            },
            convertToDate:function(date){
                return new Date(date);
            },
            getMonthNames:function(index){
                var mN =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

                return mN[index];
            },
            getWeekDayNames:function(index){
                var week_day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                return week_day_names[index];

            },
            createUniqueDateIndex:function(date){
                   return date.getFullYear()+'_'+date.getMonth();
            },
            getMonthGridData:function(start_date,end_data){
                var _start_date     = new Date(start_date),
                    _end_date       = new Date(end_data);

                while(_start_date < _end_date){
                    var _unique_index = this.createUniqueDateIndex(_start_date);
                    this.formattedDate.grid_months.push({
                        year:_start_date.getFullYear(),
                        month:this.getMonthNames(_start_date.getMonth()),
                        date_index :_unique_index
                    });
                    this.formattedDate.grid_dates[_unique_index]=[];
                    var newDate = _start_date.setMonth(_start_date.getMonth() + 1);
                    _start_date = new Date(newDate);
                }
            },
            getWeekGridData:function(start_date,end_date){
                var _start_date  = new Date(start_date);
                var _end_date    = new Date(end_date);
                var _formatted_day = [];
                while(_start_date < _end_date){
                    var _unique_index = this.createUniqueDateIndex(_start_date);
                    this.formattedDate.grid_dates[_unique_index].push({
                        year:_start_date.getFullYear(),
                        date:_start_date.getDate(),
                        day_name:this.getWeekDayNames(_start_date.getDay()),
                        month:this.getMonthNames(_start_date.getMonth()),
                        full_date:_start_date
                    });

                    var newDate = _start_date.setDate(_start_date.getDate() + 1);
                    _start_date = new Date(newDate);
                }
            },
            getGridDates:function(start_date,end_date){
                this.getMonthGridData(start_date,end_date);
                this.getWeekGridData(start_date,end_date);
                return this.formattedDate;
            }

        };



    }]);

})(angular);