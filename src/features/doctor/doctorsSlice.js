/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDoctors = createAsyncThunk('doctors/fetchingDoctors', async () => {
  const response = await fetch('http://localhost:3000/api/v1/doctors');
  const doctors = await response.json();
  return doctors;
});

export const deleteDoctor = createAsyncThunk('doctors/deleteDoctors', async (id) => {
  const response = await fetch(`http://localhost:3000/api/v1/doctors/${id}`,
    { method: 'delete' });
  const doctors = await response.json();
  return doctors;
});
export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchDoctors.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDoctors.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.doctors = action.payload;
    },

    [fetchDoctors.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default doctorsSlice.reducer;
