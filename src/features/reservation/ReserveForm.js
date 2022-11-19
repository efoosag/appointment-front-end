import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { fetchDoctors } from '../doctor/doctorsSlice';

function ReserveForm() {
  const dispatch = useDispatch();

  const retrieveDoctors = () => {
    dispatch(fetchDoctors());
  };
  const doctors = useSelector((state) => state?.doctors?.doctors);

  useEffect(() => {
    retrieveDoctors();
  }, [fetchDoctors]);

  const { id } = useParams();
  const [state, setState] = useState({
    doctorId: id,
    reserve_date: '',
    city: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const resetFormFields = () => {
    setState({
      doctorId: '',
      reserve_date: '',
      city: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/v1/reservations', {
        method: 'POST',
        body: JSON.stringify({
          doctor_id: state.doctorId,
          reserve_date: state.reserve_date,
          city: state.city,
        }),
      });
      const resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setMessage('User created successfully');
      } else {
        setMessage('Some error occured');
      }
    } catch (err) {
      console.log(message);
    }
    resetFormFields();
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <p>Complete the form to make reservation </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Doctor</Form.Label>
          <Form.Select
            id="doctorId"
            name="doctorId"
            value={state.doctorId}
            onChange={handleChange}
          >
            <option value="default">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Reservation Date</Form.Label>
          <Form.Control
            id="reserve_date"
            type="date"
            name="reserve_date"
            value={state.reserve_date}
            placeholder="20/05/2023"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Reservation City</Form.Label>
          <Form.Control
            id="city"
            type="text"
            name="city"
            value={state.city}
            placeholder="Where?"
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Make Reservation</Button>
      </Form>
    </div>
  );
}

export default ReserveForm;
