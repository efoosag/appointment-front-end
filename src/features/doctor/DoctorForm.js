import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveDoctor } from '../../app/doctor';
import './form.css'


const AddDoctor = () => {
  const navbar = useSelector(state => state.navbar);

  const navigate = useNavigate();

  const gotToHome = () => {
    navigate('/');
  };

  const dispatch = useDispatch();

  const defaultFormFields = {
    name: '',
    title: '',
    biography: '',
    photo: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    title,
    biography,
    photo,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const createDoctor = (name, title, biography, photo) => dispatch(saveDoctor({
    name,
    title,
    biography,
    photo,
    available:true,
  }));

  const submitDoctor = () => {
    createDoctor(name, title, biography, photo);
    resetFormFields();
    gotToHome();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className={navbar? 'add-doctor-box active' : 'add-doctor-box'}>
        <h3 className="">ADD NEW DOCTOR</h3>
        <form className="forms">
          <input type="text" name="name" label="DOCTOR name" onChange={handleChange} value={name} required placeholder="name" formType='add_doctor' />
          <input type="text" name="title" label="title" onChange={handleChange} value={title} required placeholder="title" formType='description' />
          <input type="url" name="photo" label="photo" onChange={handleChange} value={photo} required placeholder="Add Link to profile photo" formType='add_doctor' />
          <button type="submit" buttontype="inverted" onClick={submitDoctor}>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default AddDoctor;