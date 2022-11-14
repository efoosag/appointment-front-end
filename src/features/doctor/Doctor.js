import React from 'react'
import { Link, } from 'react-router-dom';
import './doctor.css';

function Doctor({name, title, bio, photo, id}) {

  

  return (
    <>
    <div className='doctor-box'>
      <Link to='/Doctor'>
        <img className="doctor-image" src={photo} alt={name}  />
      </Link>
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-description">{title}</p>
    </div>
  </>
    
  )
}

export default Doctor
