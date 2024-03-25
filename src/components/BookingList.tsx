import React from 'react';
import '../styles/BookingList.scss';

const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned: string = phoneNumber.replace(/\D/g, '');
    const match: RegExpMatchArray | null = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return `${match[1]}-${match[2]} ${match[3]} ${match[4]}`;
    }
    return phoneNumber;
};

const BookingList: React.FC = () => {
    const bookingData: string | null = localStorage.getItem('bookings');
    const bookings: any[] = bookingData ? JSON.parse(bookingData) : [];

    return (
        <article className='booking-list'>
            <ul className='booking-list__bookings'>
                {bookings.map((booking: any, index: number) => (
                    <li key={index}>
                        <strong>Datum:</strong> {booking.date} , <strong>Tid:</strong> {booking.time} , <strong>Namn: </strong>{booking.name} , <strong>Telefonnummer: </strong>{formatPhoneNumber(booking.phoneNumber)}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default BookingList;
