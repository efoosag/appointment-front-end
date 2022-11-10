/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from './doctorsSlice';

function Doctors() {
  const [initial, setInitial] = useState(0);
  const [right, setRight] = useState(true);
  const dispatch = useDispatch();

  const retrieveDoctors = () => {
    dispatch(fetchDoctors());
  };
  const doctors  = useSelector((state) => state.doctors.doctors);
  
  useEffect(() => {
    retrieveDoctors();
  }, []);

  const doctorsTest = (arr) => arr.slice(initial, initial + 3);
  const nextDoctors = doctorsTest(doctors || []);

  return (
    console.log(nextDoctors),
      nextDoctors.map(e => (
          // <div className='bg-primary' key={e.id}>{ e.name }</div>
          console.log({ e })
      ))   
 
  )
}

export default Doctors