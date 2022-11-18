/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDoctor } from './doctorsSlice';

function DoctorRemoveList({ doctor }) {
  const dispatch = useDispatch();
  const { id, title, name } = doctor;
  return (
    <tr key={id} className="lines">
      <td>{title}</td>
      <td>{name}</td>
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
  );
}

export default DoctorRemoveList;
