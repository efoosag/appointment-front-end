import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const initialState = {
  name: '',
  email: '',
  password: '',
  loggedIn: false,
  userId: '',
  signedUp: false,
};

const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const logIn = (payload) => ({
  type: LOG_IN,
  payload,
});

export const logOut = () => ({
  type: LOG_OUT,
  payload: {
    email: '',
    password: '',
    loggedIn: false,
    userId: '',
    signedUp: false,
  },
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case SIGN_UP:
    return {
      ...action.payload,
    };
  case LOG_IN:
    return action.payload;

  case LOG_OUT:
    return action.payload;

  default:
    return state;
  }
};

export const signUpUser = (details) => async (dispatch) => {
  const { name, email, password } = details;
  try {
    await axios.post(`${BASE_URL}/signup`, {
      name,
      email,
      password,
    });
    dispatch(signUp(
      {
        name,
        email,
        password,
        loggedIn: false,
        userId: '',
        signedUp: 'up',
      },
    ));
  } catch (error) {
    dispatch(signUp(
      {
        name: '',
        email: '',
        password: '',
        loggedIn: false,
        userId: '',
        signedUp: 'error',
      },
    ));
  }
};

export const signInUser = (details) => async (dispatch) => {
  const { name, password } = details;
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      name,
      password,
    });

    const { data } = response;
    const { user, jwt } = data;

    const userIn = {
      email: user.email,
      password: user.password,
      loggedIn: 'in',
      userId: user.id,
      signedUp: true,
    };

    localStorage.setItem('token', jwt);
    localStorage.setItem('user', JSON.stringify(userIn));
    dispatch(logIn(userIn));
  } catch (error) {
    dispatch(logIn(
      {
        email: '',
        password: '',
        loggedIn: false,
        userId: '',
        signedUp: false,
      },
    ));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch(logOut());
};

export default signUpUser;
