const url = 'http://localhost:3000/api/v1/doctors';
const GET_DOCTORS = 'redux/GET_DOCTORS';
const POST_DOCTORS = 'POST_HOUSE';

const initialState = [];

const doctorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_DOCTORS:
    return payload;
  case POST_DOCTORS:
    return [...state, payload];
  default:
    return state;
  }
};

export default doctorReducer;

export const getDoctor = () => async (dispatch) => {
  const response = await fetch(url);
  const doctor = await response.json();

  dispatch({
    type: GET_DOCTORS,
    payload: doctor,
  });
};

export const saveDoctor = (doctor) => async (dispatch) => {
  await fetch(url,
    {
      method: 'POST',
      body: JSON.stringify({
        name: doctor.name,
        title: doctor.title,
        photo: doctor.photo,
        biography: doctor.biography,
        available: doctor.available,
        user_id: doctor.user_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  dispatch({
    type: POST_DOCTORS,
    payload: doctor,
  });
};
