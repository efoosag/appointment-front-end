/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from './doctorsSlice';
import DoctorRemoveList from './DoctorRemoveList';

function DoctorDelete({
  id, photo, title, name, biography,
}) {
  const dispatch = useDispatch();

  // eslint-disable-next-line
  const retrieveDoctors = () => {
    dispatch(fetchDoctors());
  };

  const doctors = useSelector((state) => state?.doctors?.doctors);

  useEffect(() => {
    retrieveDoctors();
    // eslint-disable-next-line
  }, []); 
  return (

    <table className="table table-striped m-5 w-50">
      <thead className="bg-success">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <DoctorRemoveList
            key={doctor.id}
            id={doctor.id}
            name={doctor.name}
            bio={doctor.biography}
            title={doctor.title}
            photo={doctor.photo}
          />
        ))}
      </tbody>
    </table>

  );
}

export default DoctorDelete;
