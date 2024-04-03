import React from 'react'

const Page4 = ({ prevStep, nextStep, formData }) => {
  const renderResumeDetails = () => {
    if (formData.resume) {
      return (
        <p><span>Resume:</span> {formData.resume.name} (Size: {formData.resume.size} bytes)</p>
      );
    } else {
      return (
        <p><span>Resume:</span> Not Uploaded</p>
      );
    }
  };

  return (
    <div className="p4-container">

        <form className="p4-form">
          <h2>User Details</h2>

          <div className="detail-item"> <span>Name:</span> {formData.name} </div>
          <div className="detail-item"> <span>Date of Birth:</span> {formData.dob} </div>
          <div className="detail-item"> <span>Email:</span> {formData.email} </div>
          <div className="detail-item"> <span>Phone:</span> {formData.phone} </div>
          <div className="detail-item"> <span>Programming Language:</span> {formData.programmingLanguage} </div>
          <div className="detail-item"> <span>Experience Level:</span> {formData.experienceLevel}</div>
          <div className="detail-item">
            <span>Preferred Stack:</span> {formData.preferredStack.join(', ')}
          </div>
          
          <div className="detail-item">
            <span>Interested Areas:</span>
            <ul>
              {formData.interedtedAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="detail-item">
            <span>Resume:</span> {renderResumeDetails}
          </div>
          
          <div className='p2-button'>
          <button onClick={prevStep} type="submit">Edit Details</button>
          <button onClick={nextStep} type="submit">Submit</button>
          </div>


        </form>
    </div>
  );
}

export default Page4