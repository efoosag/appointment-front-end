/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from './doctorsSlice';

function Doctors() {
  const dispatch = useDispatch();

  const retrieveDoctors = () => {
    dispatch(fetchDoctors());
  };

  useEffect(() => {
    retrieveDoctors();
  }, []);

  const doctors  = useSelector((state) => state.doctors);
  return (
    
      // doctors.foreach(e => {
      //     <div>e</div>
      // }),
    console.log(doctors)
      
  )
}

export default Doctors