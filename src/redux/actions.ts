// bookingActions.ts

import { BOOK_TIME_SLOT, CONFIRM_BOOKING } from './actionTypes';

export const bookTimeSlot = (date: string, time: string) => ({
  type: BOOK_TIME_SLOT,
  payload: { date, time },
});

export const confirmBooking = (name: string, phoneNumber: string) => ({
  type: CONFIRM_BOOKING,
  payload: { name, phoneNumber },
});

