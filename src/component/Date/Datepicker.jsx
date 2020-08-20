import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Date/Datepicker.css";
import { Portal } from "react-overlays";

const CalendarContainer = ({ children }) => {
  const el = document.getElementById("caldar-portal");

  return <Portal container={el}>{children}</Portal>;
};

function Datepicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      popperContainer={CalendarContainer}
      className="form-control "
      id="exampleFormControlInput1"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={60}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}

export default Datepicker;
