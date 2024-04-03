import React from 'react';
import '../index.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  resume: Yup.mixed()
    .required('Resume is required')
    .test(
      "fileFormat",
      "Unsupported File Format",
      value => value && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type)
    )
    .test(
      "fileSize",
      "File too large. Maximum size is 5MB",
      value => value && value.size <= 5242880
    )
});

const Page3 = ({ prevStep, nextStep, formData, updater }) => {

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

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
        <h2>Upload Resume</h2>

        <div className="p3-form-group">
          <label htmlFor="resume">Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={(event) => {
              formik.setFieldValue("resume", event.currentTarget.files[0]);
            }}
          />
          {formik.touched.resume && formik.errors.resume ? (
            <div className="error">{formik.errors.resume}</div>
          ) : null}
        </div>

        <div className='p2-button'>
        <button onClick={Previous} type="submit">Previous</button>
        <button type="submit">Submit</button>

        </div>
      </form>
    </div>
  );
};

export default Page3;
