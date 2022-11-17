import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    add_reservations: (state, { payload }) => {
      state.reservations = payload;
    },
  },
});

export const { add_reservations } = reservationsSlice.actions;
export default reservationsSlice.reducer;
