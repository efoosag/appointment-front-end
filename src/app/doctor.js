import axios from "axios";

const url = "http://localhost:3000/api/v1/doctors"
const GET_DOCTORS = 'redux/GET_DOCTORS';
const ADD_DOCTORS = 'doctora/redux/ADD_DOCTORS';

// eslint-disable-next-line default-param-last
const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;

    case ADD_DOCTORS:
      return action.payload;

    default:
      return state;
  }
};
export const getDoctors = () => (dispatch) => {
  axios.get('http://localhost:3000/api/v1/doctors').then((res) => {
    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
  });
};
export const addDoctors = (addDoctor) => (dispatch) => {
  axios.post('http://localhost:3000/api/v1/doctors', addDoctor).then((res) => {
    dispatch({
      type: ADD_DOCTORS,
      payload: res.data,
    });
  });
};

export const getDoctor = () => async(dispatch) => {
  const response = await fetch(url);
  const doctor = await response.json();

  dispatch({
      type: GET_DOCTORS,
      payload: doctor
  })
}

export const saveDoctor = (doctor) => async(dispatch) => {
  await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: doctor.name,
        title: doctor.title,
        photo: doctor.photo,
        biography: doctor.biography,
        available: doctor.available,
        user_id: doctor.user_id
      }),
      headers: {
       "Content-Type": "application/json"
      },
    });

  dispatch({
    type: GET_DOCTORS,
    payload: doctor,
  })
};
export default doctorReducer;