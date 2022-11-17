import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {  AiFillCaretLeft } from "react-icons/ai";
import { getDoctors } from '../../app/detail';
import './detail.css'



export default function Detail () {
    const dispatch = useDispatch();

    const handleReserve = (doctor) => {
      dispatch(getDoctors(doctor));
      navigate('/reservation');
    };

    const navigate = useNavigate();
    const Doctor  = useSelector((state) => state.detail);
    
    return (
     <div className='dit'>
      <h1>{Doctor.name}</h1>
      <div className="detail-container">
        <img className='detail-image' src={Doctor.photo} alt={Doctor.name} />
        <div className='detail-about'>
        </div>
      </div>
      <table className='detail'>
            <tbody>
              <tr><td>Doctor's Name:</td><td>{Doctor.name} </td></tr>
              <tr><td>Doctor's Title:</td><td>{Doctor.title}</td></tr>
              <tr><td>Doctor's Biography:</td><td>{Doctor.biography}</td></tr>
            </tbody>
        </table>
      <div className='buttons'>
        <button buttontype="reserve" onClick={() => handleReserve(Doctor)}>Reserve</button>
        <Link to='/' className='prev'>
          < AiFillCaretLeft  className='back-arrow'/>
        </Link>
      </div>
    </div>
  )
  
}