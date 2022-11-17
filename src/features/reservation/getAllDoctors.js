import React from 'react'

export default function getAllDoctors() {


  const dispatch = useDispatch();
  const fetchReservationData = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/doctors'
    ).then((response) => response.json());
    console.log(response);
    dispatch(add_reservations(response));
  };

  useEffect(() => {
    fetchReservationData();
  }, []);







  return (
    <div>getAllDoctors</div>
  )
}
