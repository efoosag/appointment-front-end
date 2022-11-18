import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

function ReserveForm() {
  return (
    <div className="">
      <h2>Reserve Form</h2>
      <div>
        Want to have a section with Dr. [doctor.name]? Make reservation here!
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Name of Doctor" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Name of Patience" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="date" placeholder="Select Date" />
        </Form.Group>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select city
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="city-1">city 1</Dropdown.Item>
            <Dropdown.Item href="city-2">city 2</Dropdown.Item>
            <Dropdown.Item href="city-3">city 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" type="submit">
          Reserve
        </Button>
      </Form>
    </div>
  );
}

export default ReserveForm;
