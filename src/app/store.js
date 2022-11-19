/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import doctorsSlice from '../features/doctor/doctorsSlice';
import reservationReducer from './reservation/reservationSlice';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    doctors: doctorsSlice,
    detail: detailReducer,
    reservation: reservationReducer,
  },
});
