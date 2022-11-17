import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {  AiFillCaretLeft } from "react-icons/ai";
import { fetchDoctors } from './doctorsSlice';


export default function Detail () {
    const dispatch = useDispatch();

    const handleReserve = (doctors) => {
      dispatch(fetchDoctors(doctors));
      navigate('/reservation');
    };

    const navigate = useNavigate();
    const doctors  = useSelector((state) => state?.doctors?.doctors);
    
    return (
     <div>
      <h1>{doctors.name}</h1>
      <div className="detail-container">
        <img className='detail-image' src={doctors.photo} alt={doctors.name} />
        <div className='detail-about'>
          <table>
            <tbody>
              <tr><td>Doctors title</td><td>$ {doctors.title} </td></tr>
              <tr><td>Ooctros Biography</td><td>$ {doctors.biography}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <button buttonType="reserve" onClick={() => handleReserve(doctors)}>Reserve</button>
      <Link to='/' className='prev'>
        < AiFillCaretLeft  className='back-arrow'/>
      </Link>
    </div>
  )
  
}
