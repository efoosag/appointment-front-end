import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDoctors = createAsyncThunk('doctors/fetchingDoctors', async () => {
  const response = await fetch('http://localhost:3000/doctors');
  console.log(response);
  const doctors = await response.json();
  console.log(doctors);
  return doctors;
});

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchDoctors.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDoctors.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.doctors[0] = action.payload;
    },

    [fetchDoctors.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default doctorsSlice.reducer;