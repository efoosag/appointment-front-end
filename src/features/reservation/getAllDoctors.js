/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function getAllDoctors() {
  const dispatch = useDispatch();
  const fetchReservationData = async () => {
    const response = await fetch(
      'http://localhost:3000/api/v1/doctors',
    ).then((response) => response.json());

    dispatch(fetchReservationData(response));
  };

  useEffect(() => {
    fetchReservationData();
  }, []);

  return (
    <div>getAllDoctors</div>
  );
}
