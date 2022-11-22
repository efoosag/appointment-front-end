/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors, deleteDoctor } from './doctorsSlice';

const DoctorDelete = () => {
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

    <div className="col-12 d-flex">
      <table className="table table-bordered table-striped w-75 align-self-center mx-auto">
        <thead className="bg-success">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>

              <td>{doctor.name}</td>
              <td>{doctor.title}</td>
              <th scope="col">
                <button
                  className="remove-btn text-primary bg-danger"
                  type="submit"
                  onClick={() => dispatch(deleteDoctor(doctor.id))(
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
    </div>

  );
};

export default DoctorDelete;
