import { configureStore } from '@reduxjs/toolkit';
import reservationReducer from './reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
});
