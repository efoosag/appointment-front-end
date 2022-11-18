import React from 'react'
import './navigation.css'

function Navigations() {

  return (
    <nav>
      <div class="tot">
        <a class="nav-link titl" href="/doctors">Medical Center</a>
        <div class="navi">
          <ul class="list">
            <li class="nav-item py-2">
              <a class="nav-link active" aria-current="page" href="/doctors">Doctor</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/reserve_form">Make Reservation</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/reservation">My Reservations</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/add_doctor">Add Doctor</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/delete_doctor">Delete Doctor</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigations;
