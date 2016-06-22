/**
 * Created by khongyan on 16/6/21.
 */
import React from 'react';
require('./calendar.less');

import MonthView from '../modules/monthView';

class Calendar extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      showInput: false
    }

  }




  render() {
    return (
      <div className="page-calender" id="page-calender">
        <div className="m-calender">
          <div>
            <div className="day">
              <table>
                <tbody>
                <tr>
                  <td className="weekend">日</td>
                  <td>一</td>
                  <td>二</td>
                  <td>三</td>
                  <td>四</td>
                  <td>五</td>
                  <td className="weekend">六</td>
                </tr>
                </tbody>
              </table>
            </div>
            <MonthView></MonthView>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;