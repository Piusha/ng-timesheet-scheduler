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
            createUniqueDateIndex:function(date,apply_date){
                   var _unique_id   = date.getFullYear()+'_'+date.getMonth();
                    _unique_id      += (typeof apply_date != 'undefined' &&  apply_date == true)?'_'+date.getDate():"";

                   return _unique_id;
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
                        full_date_index:this.createUniqueDateIndex(_start_date,true)
                    });

                    var newDate = _start_date.setDate(_start_date.getDate() + 1);
                    _start_date = new Date(newDate);
                }
            },
            getGridDates:function(start_date,end_date){
                this.getMonthGridData(start_date,end_date);
                this.getWeekGridData(start_date,end_date);
                return this.formattedDate;
            },
            dateDiff:function(end_date,start_date){
                var one_day=1000*60*60*24;

                // Convert both dates to milliseconds
                var date1_ms = start_date.getTime();
                var date2_ms = end_date.getTime();

                // Calculate the difference in milliseconds
                var difference_ms = date2_ms - date1_ms;

                // Convert back to days and return
                return Math.round(difference_ms/one_day);
            },
            prepareItemModel:function(item_model){

                var _model={
                    header:item_model.header,
                    items:[]
                };

                for(var a =0; a < item_model.items.length ;a++){
                    var _tmp_item = {
                        title:item_model.items[a].title,
                        item_index:"line_"+a,
                        dates:[]
                    };
                    for(var d=0; d < item_model.items[a].dates.length ; d++){
                        var date_diff = this.dateDiff(item_model.items[a].dates[d].end,item_model.items[a].dates[d].start);
                        _tmp_item.dates.push({
                                start:item_model.items[a].dates[d].start,
                                end:item_model.items[a].dates[d].end,
                                description:item_model.items[a].dates[d].description,
                                duration:date_diff,
                                full_date_index:this.createUniqueDateIndex(item_model.items[a].dates[d].start,true),
                                element_length:(date_diff+1)* 20
                            });

                    }
                    _model.items.push(_tmp_item);
                }
                return _model;

            }

        };



    }]);

})(angular);