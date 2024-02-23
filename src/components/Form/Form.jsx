import React, { useState } from 'react';
import classes from './Form.module.css'
import Button from '../Button/Button';
const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      image: imageFile,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      contact: '',
      image: null,
    });
  };

  return (
    <div className={classes.form}>
      <h2 className={"h2"}>Fill in the details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={classes.label} htmlFor="name">Name:</label>
          <input
            type="text"
            className={'body4'}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={classes.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className={'body4'}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={classes.label} htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            className={'body4'}
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={classes.label} htmlFor="image">Image:</label>
          <input
            type="file"
            className={'body4'}
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <Button variant={'secondary'} className={classes.button} type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormComponent;
