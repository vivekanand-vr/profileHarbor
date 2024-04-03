import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Full name is required'),
  dob: Yup.string().required('Date of Birth is required')
  .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth is required'),
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

    <div className='p1-container'>
      <form className="p1-form" onSubmit={formik.handleSubmit}>
        
            {/* Header */}
        <h2>Personal Information</h2>

          {/* Full Name Input and Validation */}
        <div className="p1-form-group">
            <label htmlFor="name">Name:</label>
            <input  type="text"  id="name"  name="name"
              onChange={e => { formik.handleChange(e); updater('name', e.target.value) }}
              onBlur={formik.handleBlur}
              value={formData.name}/>
              
              {/* Validation Logic */}
            {formik.touched.name && formik.errors.name ? 
            ( <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.name}</div>) : null}
        </div>
          
          {/* Date of birth */}
        <div className="p1-form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date"  id="dob"  name="dob" 
            onChange={e =>  { formik.handleChange(e); updater('dob', e.target.value) }} 
            onBlur={formik.handleBlur} 
            value={formData.dob}  />

            {/* DOB Validation */}
          {formik.touched.dob && formik.errors.dob ? 
          ( <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.dob}</div> ) : null}
        </div>

            {/* Email */}
        <div className="p1-form-group">
          <label htmlFor="email">Email:</label>
          <input  type="email"  id="email"  name="email" 
            onChange={e =>  { formik.handleChange(e); updater('email', e.target.value) }} 
            onBlur={formik.handleBlur} 
            value={formData.email} />

            {/* Email Validation */}
          {formik.touched.email && formik.errors.email ? 
          ( <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.email}</div> ) : null}
        </div>

          {/* Phone Number */}
        <div className="p1-form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" 
            onChange={e =>  { formik.handleChange(e); updater('phone', e.target.value) }} 
            onBlur={formik.handleBlur} 
            value={formData.phone} />

            {/* Phone number validation */}
          {formik.touched.phone && formik.errors.phone ?
           ( <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.phone}</div> ) : null }
        </div>

        <div className='p1-button'> <button type="submit">Next</button> </div>
      </form>
    </div>
    
  );
};

export default Page1;
