import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {  AiFillCaretLeft } from "react-icons/ai";
import { getDoctors } from '../../app/detail';


export default function Detail () {
    const dispatch = useDispatch();

    const handleReserve = (doctor) => {
      dispatch(getDoctors(doctor));
      navigate('/reservation');
    };

    const navigate = useNavigate();
    const doctor  = useSelector((state) => state.detail);
    
    return (
     <div>
      <h1>{doctor.name}</h1>
      <div className="detail-container">
        <img className='detail-image' src={doctor.photo} alt={doctor.name} />
        <div className='detail-about'>
          <table>
            <tbody>
              <tr><td>Doctors title</td><td>$ {doctor.title} </td></tr>
              <tr><td>Doctros Biography</td><td>$ {doctor.biography}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <button buttontype="reserve" onClick={() => handleReserve(doctor)}>Reserve</button>
      <Link to='/' className='prev'>
        < AiFillCaretLeft  className='back-arrow'/>
      </Link>
    </div>
  )
  
}