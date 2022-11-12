import React from 'react'

function Navigations() {
  return (
    <nav class="navbar navbar-light bg-light w-25">
        <div class="container-fluid p-5">
          <a class="navbar-brand" href="/">Navbar</a>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/">Sign Up</a></h4>
        </div>        
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/doctor">Doctor</a></h4>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/reserve_form">Make Reservation</a></h4>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/reservation">My Reservations</a></h4>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/add_doctor">Add Doctor</a></h4>
        </div>
        <div class="container-fluid p-2">
          <h4><a class="navbar-brand" href="/delete_doctor">Delete Doctor</a></h4>
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