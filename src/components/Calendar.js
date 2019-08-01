import React from 'react';
import SimpleReactCalendar from 'simple-react-calendar';

function Calendar() {
  return <SimpleReactCalendar activeMonth={new Date()} />;
}

export default Calendar;
