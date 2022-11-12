import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from '../features/doctor/doctorsSlice';

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
  },
});
