/**
 * Created by khongyan on 16/6/21.
 */
import React from 'react';

import TodayHeader from '../modules/todayHeader';

class MonthView extends React.Component {

  constructor(props){
    super(props);

    var config = {
      startYear: 2016,
      startMonth: 6,
      step: 3,
      chooseBeforeToday: false
    };

    var count = config.step || 0,//显示从当前月份开始后step个月
      chooseBeforeToday = config.chooseBeforeToday,//当前时间之前是否可以选择
      autoStart = config.startMonth && config.startYear;

    this._today = new Date();
    this.today = this._today.getDate();
    this.today_month = this._today.getMonth();
    this.today_year = this._today.getFullYear();

    this.startYear = autoStart && config.startYear ? config.startYear : this.today_year;
    this.startMonth = autoStart && config.startMonth ? config.startMonth-1 : this.today_month;


    this.state = {
      dateTitle: this.showTitle(0)
    };
    
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  showTitle(next) {
    var newDate = new Date();
    newDate.setFullYear(this.startYear);
    newDate.setMonth(this.startMonth + next);

    var theMonth=(newDate.getMonth()+1)>=10?(newDate.getMonth()+1):"0"+(newDate.getMonth()+1);
    return newDate.getFullYear()+"年"+theMonth+"月"
  }

  render() {
    return (
      <div className="calender" id="calender">
        <TodayHeader title={ this.state.dateTitle }></TodayHeader>
      </div>
    )
  }
}

export default MonthView;