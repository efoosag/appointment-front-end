import React from 'react';

function Navigations() {
  return (
    <nav className="navbar navbar-expand-lg bg-success px-5">
      <div className="container-fluid d-flex flex-column">
        <a className="navbar-brand m-2" href="/doctors">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column  py-5">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="/doctors">Doctor</a>
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
  );
}

export default Navigations;
