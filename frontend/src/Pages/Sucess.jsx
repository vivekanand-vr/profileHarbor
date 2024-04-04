import React from 'react';
import '../index.css';

const Sucess = ({ setFormData }) => {

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

  const handleSubmit = () => {
      setFormData(reset);
  }
  

  return (
    <div className='s-container'>
        <span>
            Your applicaion has been submitted sucessfully !
            <div className='s-button'>
            <button onClick={handleSubmit}> Add Another Entry </button>
            </div>
        </span>
    </div>
  )
}

export default Sucess