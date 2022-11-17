const GET_DOCTOR = 'GET_DOCTOR';

const initialState = [];

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_DOCTOR:
    return action.doctor;
  default:
    return state;
  }
};

export default detailReducer;

export const getDoctors = (doctor) => {
  localStorage.setItem('doctors', JSON.stringify(doctor));
  return {
    type: GET_DOCTOR,
    doctor,
  };
};
