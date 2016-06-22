/**
 * Created by khongyan on 16/6/21.
 */
import Reflux from 'reflux';

const CalendarAction = Reflux.createActions([
  'showCalendar',
  'addEvent',
  'deleteEvent',
  'updateEvent'
]);

export default CalendarAction;