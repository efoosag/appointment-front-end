import React from 'react'
import { useDispatch} from 'react-redux';
import { deleteDoctor} from './doctorsSlice'

function DoctorRemoveList({ id, name, title, photo, bio}) {
  const dispatch = useDispatch();
  return (
    <tr key={id} className="lines">
    <td>{photo}</td>
    <td>{title}</td>
    <td>{name}</td>
    <td>{bio}</td>
    <th scope="col">
      <button
        className="remove-btn"
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
  )
}

export default DoctorRemoveList