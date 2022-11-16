import React from 'react'
import { Link, } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import './doctor.css';
import { getDoctors } from '../../app/detail';


function Doctor({name, title, photo}) {

  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(getDoctors(Doctor));
  }

  return (
    <>
    <div className='doctor-box'>
      <Link to='/doctor'>
        <img className="doctor-image" src={photo} alt={name}onClick={handleDetails}  />
      </Link>
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-title">{title}</p>
    </div>
  </>
    
  )
}

export default Doctor
