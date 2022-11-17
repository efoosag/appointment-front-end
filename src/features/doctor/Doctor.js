import React from 'react'
import { Link, } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import './doctor.css';
import { getDoctors } from '../../app/detail';


function Doctor({doctor}) {

  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(getDoctors(doctor));
  }

  const { title, name, photo, biography} = doctor;

  return (
    <>
    <div className='doctor-box'>
      <Link to='/doctor'>
        <img className="doctor-image" src={photo} alt={name}onClick={handleDetails}  />
      </Link>
      <h3 className="doctor-name">{name}</h3>
      <h4 className="doctor-title">{title}</h4>
    </div>
  </>
    
  )
}

export default Doctor
