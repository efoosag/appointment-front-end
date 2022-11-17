import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import reservationReducer from './reservation/reservationSlice';

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
=======
import counterReducer from '../features/counter/counterSlice';
import doctorsReducer from '../features/doctor/doctorsSlice';
import {userReducer}
 from '../features/user/UserSlice';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    doctors: doctorsReducer,
    detail: detailReducer,
>>>>>>> b330afbe86c6b9ff1119b29509d6b6249fa8e580
  },
});
