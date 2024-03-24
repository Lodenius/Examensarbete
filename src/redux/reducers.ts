import { BOOK_TIME_SLOT, CONFIRM_BOOKING } from './actionTypes';

interface BookingState {
  date: string | null;
  time: string | null;
  name: string | null;
  phoneNumber: string | null;
  confirmed: boolean;
}

const initialState: BookingState = {
  date: null,
  time: null,
  name: null,
  phoneNumber: null,
  confirmed: false,
};

const Reducers = (state = initialState, action: any): BookingState => {
  switch (action.type) {
    case BOOK_TIME_SLOT:
      return {
        ...state,
        date: action.payload.date,
        time: action.payload.time,
      };
    case CONFIRM_BOOKING:
      return {
        ...state,
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
        confirmed: true,
      };
    default:
      return state;
  }
};

export default Reducers;
