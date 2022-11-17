import React from 'react'
import { useDispatch} from 'react-redux';
import { deleteDoctor} from './doctorsSlice'

function DoctorRemoveList({ id, name, title, photo, bio}) {
  const dispatch = useDispatch();
  return (
    <tr key={id} className="lines">
    <td>{title.toUpperCase()}</td>
    <td>{name.toUpperCase()}</td>    
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
  )
}

export default DoctorRemoveList