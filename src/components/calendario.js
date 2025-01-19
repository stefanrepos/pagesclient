import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importa los estilos predeterminados

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Manejar el cambio de fecha
  const onDateChange = (date) => {
    setSelectedDate(date);
    console.log("Fecha seleccionada:", date);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Selecciona una Fecha</h2>
      <Calendar
        onChange={onDateChange}
        value={selectedDate} // Fecha actual seleccionada
      />
      <p>
        Fecha seleccionada: <strong>{selectedDate.toDateString()}</strong>
      </p>
    </div>
  );
};

export default CalendarComponent;
