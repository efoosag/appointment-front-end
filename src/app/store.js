import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from '../features/doctor/doctorsSlice';
import reservationReducer from './reservation/reservationSlice';
import {userReducer}
 from '../features/user/UserSlice';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    user: userReducer,
    doctors: doctorsReducer,
    reservation: reservationReducer,
    detail: detailReducer
  },
});
