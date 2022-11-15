import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import doctorsReducer from '../features/doctor/doctorsSlice';
import {userReducer}
 from '../features/user/UserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    doctors: doctorsReducer,
  },
});
