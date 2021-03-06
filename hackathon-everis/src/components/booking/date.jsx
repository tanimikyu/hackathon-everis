import React, { useState } from "react";
import "../booking/booking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormContext } from "../../context/FormContext";
import GoForwardArrow from "../home/GoForwardArrow";

const DateBooking = ({ dispatch }) => {
  const { next } = React.useContext(FormContext);
  const [startDate, setStartDate] = useState(new Date());
  const date = new Date(startDate);
  const finaldate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const joinFunctions = () =>{
    dispatch(finaldate);
    next();
  }
  return (
    <div className="container">
      <div className="date-container">
        <div className="title-booking">Bienvenido/a a Everis SMM</div>
        <p>Ingresa los siguientes datos para realizar tu reserva:</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateformat="dd/MM/yyyy"
          minDate={new Date()}
        />
      </div>
      <div className="arrow-next">
        <GoForwardArrow action={joinFunctions} />
      </div>
    </div>
  );
};

export default DateBooking;
