const GET_DOCTOR = "GET_DOCTOR"
const url = "http://localhost:3000/api/v1/doctors"

export const getDoctor = () => async(dispatch) => {
    const response = await fetch(url);
    const houses = await response.json();
  
    dispatch({
        type: GET_DOCTOR,
        payload: houses
    })
  }

export default getDoctor;

export const getDoctors = (doctor) => {
  localStorage.setItem('doctor',  JSON.stringify(doctor));
  return {
    type: GET_DOCTOR,
    doctor: doctor,
  }
}