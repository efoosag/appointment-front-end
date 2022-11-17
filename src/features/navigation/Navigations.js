import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navigations() {
  const navigation = useNavigate();
  const onLogOut = () => {
    localStorage.removeItem("token")
    navigation("/login")
  }

  return (
    <nav className="navbar navbar-light bg-light w-25">
        <div className="container-fluid p-5">
<<<<<<< HEAD
          <a className ="navbar-brand" href="/">Navbar</a>
        </div>
        <div className ="container-fluid p-2">
          <h4><a className ="navbar-brand" href="/">Doctor</a></h4>
=======
          <a className="navbar-brand" href="/">Navbar</a>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/doctors">Doctor</a></h4>
>>>>>>> b330afbe86c6b9ff1119b29509d6b6249fa8e580
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/reserve_form">Make Reservation</a></h4>
        </div>
<<<<<<< HEAD
        <div className ="container-fluid p-2">
          <h4><a className ="navbar-brand" href="/reservation">My Reservations</a></h4>
        </div>
        <div className ="container-fluid p-2">
=======
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/reservation">My Reservations</a></h4>
        </div>
        <div className="container-fluid p-2">
>>>>>>> b330afbe86c6b9ff1119b29509d6b6249fa8e580
          <h4><a className="navbar-brand" href="/add_doctor">Add Doctor</a></h4>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/delete_doctor">Delete Doctor</a></h4>
        </div>
        <div className="container-fluid p-2">
          <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </div>
        {/* <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/signup">Sign Up</a></h4>
        </div>
        <div className="container-fluid p-2">
          <h4><a className="navbar-brand" href="/login">Login</a></h4>
        </div> */}
   </nav>
  )
}

export default Navigations