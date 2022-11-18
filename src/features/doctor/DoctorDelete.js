/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors, deleteDoctor } from './doctorsSlice';

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
          <tr key={doctor.id} className="lines">
            <td>{doctor.attributes.name}</td>
            <td>{doctor.attributes.title}</td>
            <th scope="col">
              <button
                className="rempve-btn text-primary bg-danger "
                type="submit"
                onClick={() => dispatch(deleteDoctor(id))(
                  window.location.reload(false),
                )}
              >
                {/* <FontAwesomeIcon icon={faTrash} className="trashcan" /> */}
                remove
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default DoctorDelete;
