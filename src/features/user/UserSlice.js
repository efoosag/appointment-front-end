import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk('users/signUpUser', async ({ name, email, password }, thunkAPI) => {
  const response = await fetch(
    'http://localhost:3000/users',
    {
        method: "POST",
        header: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    }
  )
  let data = await response.json();
  console.log("data", data)

  if(response.status === 200){
    localStorage.setItem("token", data.token)
    return { ...data, name: name, email: email }
  } else {
    return thunkAPI.rejectWithValue(data)
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
    email: "",    
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.doctors = action.payload;
    },

    [signUpUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default userSlice.reducer;