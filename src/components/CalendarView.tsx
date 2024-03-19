import '../styles/CalendarView.scss';
import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, isBefore, isToday } from 'date-fns';

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
    const today = new Date();
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  
    const days = [];
    let day = startDate;
  
    while (day <= endDate) {
      const isTodayDate = isToday(day);
      const isPastDate = isBefore(day, today) && !isTodayDate;
      const isSelected = isSameDay(day, selectedDate);
      const isDisabled = !isSameMonth(day, monthStart);
      const classNames = ['day'];
  
      if (isSelected) {
        classNames.push('selected');
      }
  
      if (isPastDate) {
        classNames.push('past');
      }
  
      if (isDisabled) {
        classNames.push('disabled');
      }
  
      days.push(
        <div
          key={day.toString()}
          className={classNames.join(' ')}
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
    <section className="calendar">
      <section className="calendar__header">
        <button onClick={() => setCurrentDate(addDays(currentDate, -7))} className='calendar__header--btn'> &#60; Previous</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentDate(addDays(currentDate, 7))} className='calendar__header--btn'>Next &#62; </button>
      </section>
      <ul className="calendar__days">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <li key={day} className="calendar__days--header">
            {day}
          </li>
        ))}
        {renderDays()}
      </ul>
    </section>
  );  
};

export default CalendarView;
