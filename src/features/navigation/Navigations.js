import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navigations() {
  const navigation = useNavigate();
  const onLogOut = () => {
    localStorage.removeItem("token")
    navigation("/login")
  }

  return (
    <nav class="navbar navbar-expand-lg bg-success px-5">
      <div class="container-fluid d-flex flex-column">
        <a class="navbar-brand m-2" href="/doctors">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column  py-5">
            <li class="nav-item py-2">
              <a class="nav-link active" aria-current="page" href="/doctors">Doctor</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link active" aria-current="page" href="/reserve_form">Make Reservation</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link active" aria-current="page" href="/reservation">My Reservations</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link active" aria-current="page" href="/add_doctor">Add Doctor</a>
            </li>
            <li class="nav-item py-2">
              <a class="nav-link active" aria-current="page" href="/delete_doctor">Delete Doctor</a>
            </li>
            <li class="nav-item py-2">
            <button
            onClick={onLogOut}
            className="bg-primary-500 hover:bg-success-700 text-success font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
  )
}

export default Navigations