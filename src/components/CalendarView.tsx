// // CalendarView.tsx
// import React, { useState, useEffect } from 'react';
// import { getAvailableTimeSlots } from './api'; // Funktion för att hämta tillgängliga tidsfönster från backend

// const CalendarView: React.FC = () => {
//   const [timeSlots, setTimeSlots] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchTimeSlots = async () => {
//       const availableSlots = await getAvailableTimeSlots();
//       setTimeSlots(availableSlots);
//     };
//     fetchTimeSlots();
//   }, []);

//   const handleTimeSlotClick = (time: string) => {
//     console.log('Valt tid: ', time);
//   };

//   return (
//     <div>
//       <h3>Välj en tid för att boka:</h3>
//       <ul>
//         {timeSlots.map((time, index) => (
//           <li key={index} onClick={() => handleTimeSlotClick(time)}>
//             {time}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CalendarView;


import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';

interface CalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const CalendarView: React.FC<CalendarProps> = ({ selectedDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onDateClick = (day: Date) => {
    onSelectDate(day);
  };

  const renderDays = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(
        <div
          key={day.toString()}
          className={`day ${!isSameMonth(day, monthStart) ? 'disabled' : ''} ${isSameDay(day, selectedDate) ? 'selected' : ''}`}
          onClick={() => onDateClick(day)}
        >
          {format(day, 'd')}
        </div>
      );
      day = addDays(day, 1);
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentDate(addDays(currentDate, -7))}>Previous</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentDate(addDays(currentDate, 7))}>Next</button>
      </div>
      <div className="days">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default CalendarView;
