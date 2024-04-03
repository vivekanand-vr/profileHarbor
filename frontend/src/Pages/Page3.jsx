import React from 'react';
import '../index.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  resume: Yup.mixed()
    .required('Resume is required')
    .test(
      "fileFormat",
      "Unsupported File Format, upload only PDF file",
      value => value && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type)
    )
    .test(
      "fileSize",
      "File too large. Maximum size is 2MB",
      value => value && value.size <= 2 * 1024 * 1024 // 2MB in bytes
    )
});

const Page3 = ({ prevStep, nextStep, formData, updater }) => {

  const formik = useFormik({
    initialValues: {
      resume: null
    },
    validationSchema,
    onSubmit: values => {
      nextStep();
    }
  });

  return (
    <div className='p3-container'>
      <form className="p3-form" onSubmit={formik.handleSubmit}>
        <h2>Upload Your Resume</h2>

        <div className="p3-form-group">
          <label htmlFor="resume">Resume:</label>
          <input type="file" id="resume" name="resume" value={formData.resume}
            onChange={(event) => { formik.setFieldValue("resume", event.currentTarget.files[0]); }} />

          { formik.errors.resume ? (<div className="error">{formik.errors.resume}</div>) : null}
        </div>

        <div className='p2-button'>
        <button onClick={prevStep} type="submit">Previous</button>
        <button type="submit">Next</button>
        </div>

      </form>
    </div>
  );
};

export default Page3;
