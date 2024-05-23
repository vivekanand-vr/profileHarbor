import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../index.css';

/* Yup Validation  Schema */
const validationSchema = Yup.object({
  name: Yup.string().required('Full name is required'),
  dob: Yup.date().required("Date of Birth is required").max(new Date(), "Future date not allowed"),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone Number is required').matches(/^[0-9]{10}$/, 'Invalid phone number')
});


const Page1 = ({ nextStep, formData, updater }) => {
  
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: values => { nextStep(); }
  });

  return (
    <div className='background'>
    <div className='container'>
      <form className="p1-form" onSubmit={formik.handleSubmit}>
        <h2>Personal Information</h2>

        <div className="p1-form-group">
            <label htmlFor="name">Name:</label>
            <input  type="text"  id="name"  name="name"
              onChange={e => { formik.handleChange(e); updater('name', e.target.value) }}
              value={formData.name}/>
              
            { formik.errors.name ? (<div className="error">{formik.errors.name}</div>) : null}
        </div>
          
        <div className="p1-form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date"  id="dob"  name="dob" 
            onChange={e =>  { formik.handleChange(e); updater('dob', e.target.value) }} 
            value={formData.dob} required />

          { formik.errors.dob ? (<div className="error">{formik.errors.dob}</div>) : null}
        </div>

        <h4> Contact Information </h4>
        <div className="p1-form-group">
          <label htmlFor="email">Email:</label>
          <input  type="email"  id="email"  name="email" 
            onChange={e =>  { formik.handleChange(e); updater('email', e.target.value) }} 
            value={formData.email} />
          { formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}
        </div>

        <div className="p1-form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" 
            onChange={e =>  { formik.handleChange(e); updater('phone', e.target.value) }} 
            value={formData.phone} />
          { formik.errors.phone ? (<div className="error">{formik.errors.phone}</div>) : null }
        </div>
        
        <div className='button-div'> 
          <button type="submit">Next</button> 
        </div>
      </form>
    </div>
    </div>   
  );
};

export default Page1;
