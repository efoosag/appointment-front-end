import { configureStore } from '@reduxjs/toolkit';
import doctorsReducer from '../features/doctor/doctorsSlice';
import detailReducer from './detail';

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    detail: detailReducer,
  },
});
