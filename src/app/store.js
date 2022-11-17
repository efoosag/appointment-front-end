import { configureStore } from '@reduxjs/toolkit';
import doctorsSlice from '../features/doctor/doctorsSlice';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    doctors: doctorsSlice,
    detail: detailReducer,
  },
});
