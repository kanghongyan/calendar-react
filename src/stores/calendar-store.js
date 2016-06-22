/**
 * Created by khongyan on 16/6/21.
 */
import Reflux from 'reflux';
import CalendarAction from '../actions/calendar-action';

let CalendarStore = Reflux.createStore({

  listenables: CalendarAction,

  /**
   * monthObj = {
   *   year: 2016
   *   month: 6
   *   monthArr: [{
   *     className: ''
   *     event: {},
   *     date: 2016-6-24,
   *     num: 24
   *   }]
   * }
   */
  init() {
    this.monthObj = {}
  },

  getMonthDayArr(date, todayDate) {
    var TOTAL = 42;
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthDay=this.getMonthDay(year,month);//获取一个月有多少天
    var lastMonthDay=this.getMonthDay(year,month-1);//获取上一个月有多少天
    var day=this.getDay(date);//获取当前月第一天是星期几

    var today_day = todayDate.getDate();
    var today_month = todayDate.getMonth();
    var today_year = todayDate.getFullYear();

    return getMonthDayArr(month);

    function getMonthDayArr(month){
      var monthDayArr = [];
      for(var i=day-1;i>=0;i--){
        monthDayArr.push({
          num:lastMonthDay-i,
          className:'grey',
          date: year + '-' + (month+1) + '-' + lastMonthDay-i,
          events: {}
        });
      }
      for(var i=1;i<=monthDay;i++){
        var className = '';
        if(today_month == month && today_day == i){
          className = 'today'
        }
        if(today_month == month && today_day > i){
          className = 'disabled'
        }
        monthDayArr.push({
          num:i,
          className:className,
          date: year + '-' + (month+1) + '-' + i
        });
      }
      for(var i=1;i<=TOTAL-monthDay-day;i++){
        monthDayArr.push({
          num:i,
          className:'grey',
          date: year + '-' + (month+1) + '-' + i
        });
      }
      return {
        year: year,
        month: month,
        monthArr: monthDayArr
      };
    }
  },

  getMonthDay(year, month) {
    var dateTemp=new Date(year,month);
    var monthTemp=dateTemp.getMonth();
    dateTemp.setMonth(monthTemp+1);
    dateTemp.setDate(0);
    return dateTemp.getDate();
  },

  getDay(newDate) {
    var tempDate = new Date(newDate);
    tempDate.setDate(1);
    return tempDate.getDay()
  },

  addEvent(date, obj) {
    console.log(obj)
    var monthArr = this.monthObj.monthArr;
    for(var i=0, len = monthArr.length; i<len; i++){
      if(monthArr[i].date == date){
        monthArr[i].events = obj;
        this.trigger(this.monthObj);
        return
      }
    }
  },

  deleteEvent() {

  },

  updateEvent() {

  },

  showCalendar(date, todayDate) {
    var monthObj= this.getMonthDayArr(date, todayDate);
    this.monthObj = monthObj;
    this.trigger(this.monthObj)
  }

});

export default CalendarStore;