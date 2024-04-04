import React from 'react'
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css"; //to remove the text content inside pdf
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; //to remove the extra space below pdf 

// to work with pdf files
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();



const Page4 = ({ prevStep, nextStep, formData }) => {

  //to display resume size in KB
  const sizeInKB = Math.round(formData.resume.size / 1024);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create an object with all form data
      // Convert arrays to strings
    const preferredStackString = JSON.stringify(formData.preferredStack);
    const interestedAreasString = JSON.stringify(formData.interestedAreas);

    // Create an object with all form data
    const requestData = {
      name: formData.name,
      dob: formData.dob,
      email: formData.email,
      phone: formData.phone,
      programmingLanguage: formData.programmingLanguage,
      experienceLevel: formData.experienceLevel,
      preferredStack: preferredStackString,
      interestedAreas: interestedAreasString,
    };
  
      // Sending POST request to Spring Boot backend
      await axios.post('http://localhost:9999/RestMiniProject/submitFormData', requestData, {
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        }
      });
  
      // Handle successful submission
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error submitting form data:', error);
    }
    nextStep(); // move to sucess page
  };

  return (
    <div className="p4-container">

        <form className="p4-form">
          <h2>Review and Submit</h2>
          <h4>Personal Information: </h4>
          <div className="detail-item"> <span>Name:</span> {formData.name} </div>
          <div className="detail-item"> <span>Date of Birth:</span> {formData.dob} </div>
          
          <div className="detail-item"> <span>Email:</span> {formData.email} </div>
          <div className="detail-item"> <span>Phone:</span> {formData.phone} </div>
          
          <br></br>

          <h4>Technical Skills and Preferences</h4>
          <div className="detail-item"> <span>Primary Programming Language:</span> {formData.programmingLanguage} </div>
          <div className="detail-item"> <span>Experience Level:</span> {formData.experienceLevel}</div>
          <div className="detail-item">
            <span>Preferred Stack:</span> {formData.preferredStack.join(', ')}
          </div>
          
          <div className="detail-item">
            <span>Interested Areas:</span>
            <ul>
              {formData.interestedAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>


          <h4>Upload Section</h4>

          <div className="detail-item">
          <span>Resume:</span> { formData.resume.name } (size: {sizeInKB} KB)
          </div>

          <div className='resume-container'>
              <Document file={formData.resume}>
                <Page pageNumber={1}  renderTextLayer={false} />
              </Document>
          </div>

          <div className='p2-button'>
          <button onClick={prevStep} type="submit">Edit Details</button>
          <button onClick={handleSubmit} type="submit">Submit</button>
          </div>
        </form>
    </div>
  );
}

export default Page4