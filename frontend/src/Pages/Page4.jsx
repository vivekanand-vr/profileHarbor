import React from 'react'
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
              {formData.interestedAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>

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
          <button onClick={nextStep} type="submit">Submit</button>
          </div>
        </form>
    </div>
  );
}

export default Page4