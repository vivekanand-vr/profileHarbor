import React from 'react';
import '../index.css';

const Error = ({ setFormData }) => {

  // object with initial values to set in formData
  const reset = {
    step: 1,
    name: '',
    dob: new Date(),
    email: '',
    phone: '',
    programmingLanguage: '',
    experienceLevel: '',
    preferredStack: [],
    interestedAreas: [],
    resume: null,
  };

  // resets all values including step count, so goes back to page 1
  const handleSubmit = () => {
      setFormData(reset);
  }
  
  return (

    //using same styles as sucess container
    <div className='s-container'>
        <span >
          <div className='error'> Oops! Something went wrong. </div> 

          <h6 style={{paddingTop:'5px'}}> We're sorry, but there was an issue submitting your form data. <br />
              Please try again. 
          </h6>

          <div className='s-button'>
            <button onClick={handleSubmit}> Try Again </button>
          </div>
        </span>
    </div>
  )
}

export default Error