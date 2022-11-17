// import React from 'react';
import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { add_reservations } from '../../app/reservation/reservationSlice';

function Reservations() {
  const dispatch = useDispatch();
  const fetchReservationData = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/reservations'
    ).then((response) => response.json());
    console.log(response);
    dispatch(add_reservations(response));
  };

  useEffect(() => {
    fetchReservationData();
  }, []);

  const reservations = useSelector((state) => state.reservation.reservations);
  console.log(reservations);

  return (
    <div>
      <h2>My Reservations</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Doctor's Name</th>
            <th>Date</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation[0]}>
              <td>{reservation[1]}</td>
              <td>{reservation[2]}</td>
              <td>{reservation[3]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Reservations;
