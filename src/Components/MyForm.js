import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DateRangePicker, isInclusivelyBeforeDay } from "react-dates";
import moment from "moment";

import "./MyForm.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";

function MyForm() {
  var today = new Date().toISOString().split("T")[0];
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


  return (
    <div className="form-container">
      <h2>Elite Rental Cars</h2>
      <form>
        <div className="form__inputs">
          <div className="input-icons">
            <i className="fa fa-map-marker icon"></i>
            <input
              className="input-field"
              type="text"
              placeholder="Enter location here..."
            />
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
          </div>
        </div>
        <Link to={`/available/${startDate}-${endDate}`} className="available__link">Check For Cars!</Link>
      </form>
    </div>
  );
}

export default MyForm;
