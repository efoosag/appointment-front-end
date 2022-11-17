const GET_DOCTOR = "GET_DOCTOR"
const url = "http://localhost:3000/api/v1/doctors"

const initialState = []

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTOR:
      return action.doctor;
    default:
      return state;
  }
}

export default detailReducer;

export const getDoctor = () => async(dispatch) => {
    const response = await fetch(url);
    const doctor = await response.json();
  
    dispatch({
        type: GET_DOCTOR,
        payload: doctor
    })
  }

export const getdoctor = (doctor) => {
  localStorage.setItem('doctor',  JSON.stringify(doctor));
  return {
    type: GET_DOCTOR,
    doctor: doctor,
  }
}