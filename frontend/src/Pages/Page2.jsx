import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  programmingLanguage: Yup.string().required('Please select a programming language'),
  experienceLevel: Yup.string().required('Please select your experience level'),
  developmentStack: Yup.array()
    .min(1, 'Please select at least one development stack')
    .test('at-least-one-selected', 'Please select at least one development stack', function (value) {
      return value && value.length > 0;
    }),
  taskScheduling: Yup.array()
    .min(1, 'Please select at least one area in task scheduling')
    .test('at-least-one-selected', 'Please select at least one area in task scheduling', function (value) {
      return value && value.length > 0;
    }),
});

const Page2 = ({ prevStep, nextStep, formData, updater }) => {

  /* handle checkboxes and add it to array in formData, using a hook for a temporary array */
  const [tech, setTech] = useState([]);
  const handleTechCheckbox = e => {
    formik.handleChange(e);
    const value = e.target.value;
    if (tech.includes(value)) {
      setTech(tech.filter(stack => stack !== value)); // Remove from array if already exists
    } else {
      setTech([...tech, value]); // Add to array if not exists
    }
    updater('preferredStack', tech);
  };

  /* handle checkboxes and add it to array in formData, using a hook for a temporary array */
  const [area, setArea] = useState([]);
  const handleAreaCheckbox = e => {
    formik.handleChange(e);
    const value = e.target.value;
    if (area.includes(value)) {
      setArea(area.filter(stack => stack !== value)); // Remove from array if already exists
    } else {
      setArea([...area, value]); // Add to array if not exists
    }
    updater('interedtedAreas', area);
  };



  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: values => {
      // You can perform any necessary action here
      nextStep();
    }
  });

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className="p2-container">
      <form className="p2-form" onSubmit={formik.handleSubmit}>
        <h2>Technical Skills and Preferences</h2>
        
        {/* Select Programming Language */}
        <div className="p2-form-group">
          <label htmlFor="programmingLanguage">Primary Programming Language:</label>
          <select id="programmingLanguage" name="programmingLanguage"
            onChange={e =>  {
              formik.handleChange(e);
              updater('programmingLanguage', e.target.value)
            }} 
            onBlur={formik.handleBlur}
            value={formik.values.programmingLanguage}
            required
          >
            <option value="">Select</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.programmingLanguage && formik.errors.programmingLanguage ? (
            <div className="error"  style={{color:'red', paddingTop:'5px'}}>{formik.errors.programmingLanguage}</div>
          ) : null}
        </div>
        
        {/* Select Experience Level */}
        <div className="p2-form-group">
          <label htmlFor="experienceLevel">Experience Level:</label>
          <select id="experienceLevel" name="experienceLevel"
            onChange={e =>  {
              formik.handleChange(e);
              updater('experienceLevel', e.target.value)
            }} 
            onBlur={formik.handleBlur}
            value={formik.values.experienceLevel}
            required
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          {formik.touched.experienceLevel && formik.errors.experienceLevel ? (
            <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.experienceLevel}</div>
          ) : null}
        </div>
        
        {/* Select one or more Tech Stack */}
        <div className="p2-form-group">
          <h4>Preferred Development Stack:</h4>
          
          {/* checkbox 1 */}
          <input type="checkbox" id="mean" name="developmentStack" value="MEAN"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="mean">MEAN</label> <br />
          
          {/* checkbox 2 */}
          <input type="checkbox" id="mern" name="developmentStack" value="MERN"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="mern">MERN</label> <br />
          
          {/* checkbox 3 */}
          <input type="checkbox" id="lamp" name="developmentStack" value="LAMP"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="lamp">LAMP</label> <br />

          {/* checkbox 4 */}
          <input type="checkbox" id="other" name="developmentStack" value="other"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="mean">Other Stack</label> <br />
          
          {/* validation logic */}
          {formik.touched.developmentStack && formik.errors.developmentStack ? (
            <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.developmentStack}</div>
          ) : null}
        </div>

         {/* Select interested areas */}
        <div className="p2-form-group">
          <h4>Interested Areas in Task Scheduling:</h4>
          
          {/* checkbox 1 */}
          <input type="checkbox" id="uiux" name="taskScheduling" value="UI/UX Design"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="uiux">UI/UX Design</label> <br />
          
          {/* checkbox 2 */}
          <input type="checkbox" id="backend" name="taskScheduling" value="Backend Development"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="backend">Backend Development</label> <br />

          {/* checkbox 3 */}
          <input type="checkbox" id="database" name="taskScheduling" value="Database Management"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="database">Database Management</label> <br />

          {/* checkbox 4 */}
          <input type="checkbox" id="athentication" name="taskScheduling" value="Authentication"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="authentication">Authentication</label> <br />

          {/* checkbox 5 */}
          <input type="checkbox" id="realtime" name="taskScheduling" value="Real-Time Updates"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="realtime">Real-Time Updates</label> <br />

           {/* validation logic */}
          {formik.touched.taskScheduling && formik.errors.taskScheduling ? (
            <div className="error" style={{color:'red', paddingTop:'5px'}}>{formik.errors.taskScheduling}</div>
          ) : null}
        </div>

        <div className='p2-button'>
          <button onClick={Previous} type="button">Previous</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Page2;
