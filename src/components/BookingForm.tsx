import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookTimeSlot, confirmBooking } from '../redux/actions';
import Confirmation from './Confirmation';
import '../styles/BookingForm.scss';

const allowedTimes = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:30', '16:00', '16:30', '17:00', '19:00', '20:00', '21:00', '21:30', '22:00'];

const BookingForm: React.FC = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState<string>('');
    const [time, setTime] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleBooking = () => {
        if (name !== '' && phoneNumber !== '' && date !== '' && time !== '') {
          dispatch(confirmBooking(name, phoneNumber));
          dispatch(bookTimeSlot(date, time));
          setErrorMessage('');
          setShowModal(true);
        } else {
          const errorMsg = 'Vänligen fyll i alla fält.';
          setErrorMessage(errorMsg);
          console.log(errorMsg); 
        }
    };

    const handleCloseModal = () => {
        setName('');
        setPhoneNumber('');
        setDate('');
        setTime('');
        setShowModal(false);
    };

    const isDateInPast = (selectedDate: string): boolean => {
        const currentDate = new Date();
        const selectedDateTime = new Date(selectedDate);
        return selectedDateTime < currentDate;
    };

      const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputPhoneNumber = e.target.value.replace(/\D/g,'');
        if (inputPhoneNumber.length <= 10) {
            setPhoneNumber(inputPhoneNumber);
        }
    };
  
    return (
        <section className="BookingForm">
          {errorMessage && <p className="ErrorMessage">{errorMessage}</p>}
          <section className='info'>
            <article>
                <label>
                    Datum:
                    <input type="date" value={date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setDate(e.target.value)} required />
                </label>
            </article>
            <article>
                <label>
                    Tid:
                    <select value={time} onChange={(e) => setTime(e.target.value)} disabled={!date || isDateInPast(date)} required>
                    <option value="">Välj tid</option>
                    {allowedTimes.map((timeOption, index) => (
                        <option key={index} value={timeOption}>{timeOption}</option>
                    ))}
                    </select>
                </label>
            </article>
            <article>
                <label>
                    Namn:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Ditt namn' required />
                </label>
            </article>
            <article>
                <label>
                    Telefonnummer:
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='123-456 78 90' required />
                </label>
            </article>
          </section>
          <button onClick={handleBooking} disabled={!date || isDateInPast(date)}>Boka tid</button>
          {showModal && <Confirmation date={date} time={time} name={name} phoneNumber={phoneNumber} closeModal={handleCloseModal} />}
        </section>
      );
};

export default BookingForm;