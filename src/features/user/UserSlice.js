import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUpUser = createAsyncThunk(
  'users/signUpUser',
  async ({ name, email, password }, thunkAPI) => {
  console.log(name, email, password)
  try {
    const response = await fetch(
      "http://localhost:3000/users",
      {
          method: "POST",
          mode: 'cors',
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "user": {
              "name": name,
              "email": email,
              "password": password,
            }
              
        }),
      }
    )
    let data = await response.json();
    console.log("data", data)
    console.log("Authorization", response.headers["Authorization"])
    console.log("token", data.token)
  
    if(response.status === 200){
      localStorage.setItem("token", data.token)
      return { ...data, username: name, email: email,password: password }
    } else {
      return thunkAPI.rejectWithValue(data)
    }
    
  } catch (e) {
    console.log("Error", e.response.data)
      return thunkAPI.rejectWithValue(e.response.data)
  }
});

export const signInUser = createAsyncThunk(
  'users/signInUser',
  async ({ email, password }, thunkAPI) => {
   try {
    const response = await fetch(
      "http://localhost:3000/login",
      {
          method: "POST",
          mode: 'cors',
          headers: {
              
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify({            
              "user": {
                "email": email,
              "password": password,
              }
                        
        }),
      }
    )
    const { data } = await response.json();
    const { user, jwt } = data;
    console.log("data", data)
  
    if(response.status === 200){
      localStorage.setItem('token', jwt);
      localStorage.setItem('user', JSON.stringify(user));
      return data
    } else {
      return thunkAPI.rejectWithValue(data)
    }
    
  } catch (e) {
    console.log("Error", e.response.data)
      return thunkAPI.rejectWithValue(e.response.data)
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "",
    email: "",
    password: "",    
    loggedIn: false,
    userId: '',
    signedUp: false,
  },
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled]: (state, { payload }) => {
      state.loggedIn = false;
      state.signedUp = true;
      state.email = payload.user.email;
      state.name = payload.user.name;
      state.userId = payload.user.userId;
      state.password = payload.user.password;
    },
    [signUpUser.rejected]: (state, { payload }) => {
      state.loggedIn = false;
      state.signedUp = false;
      state.errorMessage = payload.message;
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.loggedIn = true;
      state.signedUp = true;
      state.email = payload.user.email;
      state.password = payload.user.password;
      return state;
    },
    [signInUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.loggedIn = false;
      state.email = payload.user.email;
      state.password = payload.user.password;
      state.errorMessage = payload.message;
    },
  }
});

export const useSelect = (state) => state.user;