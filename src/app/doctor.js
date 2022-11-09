import axios from "axios";

const GET_DOCTORS = 'redux/GET_DOCTORS';

// eslint-disable-next-line default-param-last
const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;

    default:
      return state;
  }
};
export const getDoctors = () => (dispatch) => {
  axios.get('api/v1/doctors').then((res) => {
    dispatch({
      type: GET_DOCTORS,
      payload: res.data,
    });
  });
};

export default doctorReducer;