/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from './doctorsSlice';
import Doctor from './Doctor'

function Doctors() {
  const dispatch = useDispatch();

  const retrieveDoctors = () => {
    dispatch(fetchDoctors());
  };
  const doctors  = useSelector((state) => state?.doctors?.doctors);
  
  useEffect(() => {
    retrieveDoctors()
  }, [fetchDoctors]);  

  return (
      doctors?.map(doctor => (
          <div className='bg-body' key={ doctor.id }>
            <Doctor 
            id= {doctor.id} 
            name={doctor.name}
            bio = {doctor.biography}
            title= {doctor.title}
            photo= {doctor.photo}
            />
          </div> 
      ))   
 
  )
}

export default Doctors