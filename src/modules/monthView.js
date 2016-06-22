/**
 * Created by khongyan on 16/6/21.
 */
import React from 'react';

import TodayHeader from '../modules/todayHeader';
import InputModal from '../modules/eventInput';

import CalendarAction from '../actions/calendar-action';
import CalendarStore from '../stores/calendar-store';

//TODO: DEMO
//TODO: 日历点击 BUG FIX
//TODO: 输入事件优化

class MonthView extends React.Component {

  constructor(props){
    super(props);

    var config = {
      startYear: 2016,
      startMonth: 6,
      chooseBeforeToday: false
    };

    var chooseBeforeToday = config.chooseBeforeToday,//当前时间之前是否可以选择
      autoStart = config.startMonth && config.startYear;

    this._today = new Date();
    this.today = this._today.getDate();
    this.today_month = this._today.getMonth();
    this.today_year = this._today.getFullYear();

    this.startYear = autoStart && config.startYear ? config.startYear : this.today_year;
    this.startMonth = autoStart && config.startMonth ? config.startMonth-1 : this.today_month;

    var newDate = new Date();
    newDate.setFullYear(this.startYear);
    newDate.setMonth(this.startMonth);


    this.state = {
      dateTitle: this.showTitle(newDate),
      dateMain: this.showMain(newDate, this._today),
      showInput: false
    };

    this.eventDate = ''

  }

  componentDidMount() {
    this.unsubscribe = CalendarStore.listen(this.showCalendar.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  showCalendar(monthObj) {
    console.log(monthObj);
    var view = this.renderCalendar(monthObj);
    this.setState({
      dateMain: view
    })
  }


  showTitle(date) {
    var theMonth=(date.getMonth()+1)>=10?(date.getMonth()+1):"0"+(date.getMonth()+1);
    return date.getFullYear()+"年"+theMonth+"月"
  }

  showMain(date, today){
    CalendarAction.showCalendar(date, today);
  }

  renderCalendar(monthObj) {
    var monthDayArr = monthObj.monthArr;
    let trs = [];
    let tds = [];
    monthDayArr.map((item, index) => {
      //console.log(item)
      tds.push(
        <td key={ index } className={item.className} onClick={ this.addEvent.bind(this,item.date) }>
          <span>{ item.num }</span>
          <div className="event">
            <h4>{ item.events && item.events.title }</h4>
          </div>
        </td>);
      if((index+1)%7 == 0){
        trs.push(<tr key={ index }>{ tds }</tr>);
        tds = []
      }
    });
    return (
      <table>
        <tbody>
        { trs }
        </tbody>
      </table>
    )
  }

  addEvent(date) {
    console.log('addevent');
    console.log(date);
    this.eventDate = date;
    //显示输入框
    this.setState({
      showInput: true
    });

  }

  handleEvent(title) {
    console.log(title);
    CalendarAction.addEvent(this.eventDate,{
      "title": title,
      "content": 'today is a sunny day',
      "location": 'fffff'
    })
  }

  render() {
    return (
      <div>
        <div className="calender" id="calender">
          <TodayHeader title={ this.state.dateTitle }></TodayHeader>
          { this.state.dateMain }
        </div>
        <div style={{display: this.state.showInput ? 'block' : 'none'}}>
          <InputModal handleUpdate={ this.handleEvent.bind(this) }></InputModal>
        </div>
      </div>
    )
  }
}

export default MonthView;