import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import doctorsReducer from '../features/doctor/doctorsSlice';
import reservationReducer from './reservation/reservationSlice';
import {userReducer}
 from '../features/user/UserSlice';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    doctors: doctorsReducer,
     reservation: reservationReducer,
    detail: detailReducer
  },
});
