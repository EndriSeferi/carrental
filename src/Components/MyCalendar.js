import React, { useState } from "react";
import { DateRangePicker,isInclusivelyBeforeDay } from "react-dates";
import moment from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";

function MyCalendar() {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment().add(7, "d"));
  const [focusedInput, setFocusedInput] = useState(null);

  function onDateChange(dates) {
    setStartDate(dates.startDate);
    setEndDate(dates.endDate);
  }

  function onFocusChange(focusedInput) {
    setFocusedInput(focusedInput);
  }

  // const disabledDates = ["2021-12-23", "2021-12-24","2021-12-25","2021-12-28"];
  
  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="your_unique_start_date_id"
      endDate={endDate}
      endDateId="your_unique_end_date_id"
      onDatesChange={onDateChange}
      focusedInput={focusedInput}
      onFocusChange={onFocusChange}
      daySize={40}
      withPortal={true}
      // isOutsideRange={day => isInclusivelyBeforeDay(day, moment())}
      // isDayBlocked={day => {return disabledDates.some((unavailableDay) => moment(unavailableDay).isSame(day, 'day'));
    // }}
    />
  );
}

export default MyCalendar;
