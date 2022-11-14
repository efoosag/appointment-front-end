import React from 'react'
import { Link, } from 'react-router-dom';
import { getDoctors } from '../../app/doctor';
import { useDispatch} from 'react-redux';
import './doctor.css';

function Doctor({name, title, bio, photo, id}) {

  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(getDoctors(Doctor));
  }

  return (
    <>
    <div className='doctor-box'>
      <Link to='/Doctor'>
        <img className="doctor-image" src={photo} alt={name}onClick={handleDetails}  />
      </Link>
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-description">{title}</p>
    </div>
  </>
    
  )
}

export default Doctor
