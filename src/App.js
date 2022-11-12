import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigations from './features/navigation/Navigations';
import Doctors from './features/doctor/Doctors';
import Reservations from './features/reservation/Reservations';
import ReserveForm from './features/reservation/ReserveForm';
import DoctorForm from './features/doctor/DoctorForm';
import DoctorDelete from './features/doctor/DoctorDelete';
import Signup from './features/user/Signup';
// import 'App.css'

function App() {
  return ( 
    <div class='d-flex w-100'>
      <Router>
        <Navigations />
        <div class='d-flex flex-grow-1 justify-content-center'>
          <Routes>
          
            <Route path = '/signup' element ={<Signup />} />
           
            <Route path = '/doctor' element ={<Doctors />} />
            <Route path = '/reserve_form' element ={<ReserveForm />} />
            <Route path = '/reservation' element ={<Reservations />} />
            <Route path = '/add_doctor' element ={<DoctorForm />} />
            <Route path = '/delete_doctor' element ={<DoctorDelete />} />
          </Routes> 
        </div>               
      </Router>
    </div>
  );
  
}

export default App;
