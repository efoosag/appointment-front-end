import React from 'react'

function Navigations() {
  return (
    <nav className="navbar navbar-light bg-light w-25">
        <div className="container-fluid p-5">
          <a className="navbar-brand" href="/">Navbar</a>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/">Doctor</a></h4>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/reserve_form">Make Reservation</a></h4>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/reservation">My Reservations</a></h4>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/add_doctor">Add Doctor</a></h4>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/delete_doctor">Delete Doctor</a></h4>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/signup">Sign Up</a></h4>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/login">Login</a></h4>
        </div>
   </nav>
  )
}

export default Navigations