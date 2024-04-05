import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

/* Yup Validation  Schema */
const validationSchema = Yup.object({
  programmingLanguage: Yup.string().required('Please select a programming language'),
  experienceLevel: Yup.string().required('Please select your experience level'),
  developmentStack: Yup.array()
    .min(1, 'Please select at least one development stack')
    .test('at-least-one-selected', 'Please select at least one development stack', function (value) {
      return value && value.length > 0;
    }),
});

const Page2 = ({ prevStep, nextStep, formData, updater }) => {

  /* logic to handle checkboxes and add it to array in formData, using temporary array */
  const handleTechCheckbox = e => {
      formik.handleChange(e);
      const value = e.target.value;
      let updatedTech = [...formData.preferredStack]; // creating a copy of the current tech array

      if (updatedTech.includes(value)) {
        updatedTech = updatedTech.filter(stack => stack !== value); // remove from array if already exists
      } else {
        updatedTech.push(value); // add to array if not exists
      }
        updater('preferredStack', updatedTech); // Pass the updatedTech array to updater 
  };

  /* logic to handle checkboxes and add it to array in formData, using a hook for a temporary array */
  const handleAreaCheckbox = e => {
      formik.handleChange(e);
      const value = e.target.value;
      let updatedArea = [...formData.interestedAreas]; // creating a copy of the current area array
      if (updatedArea.includes(value)) {
        updatedArea = updatedArea.filter(stack => stack !== value); // remove from array if already exists
      } else {
        updatedArea.push(value); // add to array if not exists
      }
      updater('interestedAreas', updatedArea); // Pass the updatedArea array to updater
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: values => {
      nextStep();
    }
  });

  return (
    <div className="container">
      <form className="p2-form" onSubmit={formik.handleSubmit}>
        <h2>Technical Skills and Preferences</h2>
        
        {/* Select Programming Language */}
        <div className="p2-form-group">
          <label htmlFor="programmingLanguage">Primary Programming Language:</label>
          <select id="programmingLanguage" name="programmingLanguage"
            onChange={e =>  { formik.handleChange(e); updater('programmingLanguage', e.target.value) }} 
            onBlur={formik.handleBlur}
            value={formik.values.programmingLanguage}
            required >

            <option value="">Select</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
            <option value="Other">Other</option>
          </select>
          
            {/* language Validation */}
          {formik.errors.programmingLanguage ? (<div className="error">{formik.errors.programmingLanguage}</div>) : null}
        </div>
        
        {/* Select Experience Level */}
        <div className="p2-form-group">
          <label htmlFor="experienceLevel">Experience Level:</label>
          <select id="experienceLevel" name="experienceLevel"
            onChange={e => { formik.handleChange(e); updater('experienceLevel', e.target.value) }} 
            onBlur={formik.handleBlur}
            value={formik.values.experienceLevel}
            required >

            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>

            {/* Experience Validation */}
          { formik.errors.experienceLevel ? (<div className="error">{formik.errors.experienceLevel}</div>) : null}
        </div>
        
        {/* Select one or more Tech Stack */}
        <div className="p2-form-group">
          <h4>Preferred Development Stack:</h4>
          
          {/* checkbox 1 */}
          <input type="checkbox" id="mean" name="developmentStack" value="MEAN"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.preferredStack.includes("MEAN")}
          />
          <label htmlFor="mean">MEAN</label> <br />
          
          {/* checkbox 2 */}
          <input type="checkbox" id="mern" name="developmentStack" value="MERN"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.preferredStack.includes("MERN")}
          />
          <label htmlFor="mern">MERN</label> <br />
          
          {/* checkbox 3 */}
          <input type="checkbox" id="lamp" name="developmentStack" value="LAMP"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.preferredStack.includes("LAMP")}
          />
          <label htmlFor="lamp">LAMP</label> <br />

          {/* checkbox 4 */}
          <input type="checkbox" id="other" name="developmentStack" value="Other"
            onChange={handleTechCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.preferredStack.includes("Other")}
          />
          <label htmlFor="mean">Other Stack</label> <br />
          
          {/* validation logic */}
          {formik.errors.developmentStack ? (<div className="error">{formik.errors.developmentStack}</div>) : null}
        </div>

         {/* Select interested areas */}
        <div className="p2-form-group">
          <h4>Interested Areas in Task Scheduling:</h4>
          
          {/* checkbox 1 */}
          <input type="checkbox" id="uiux" name="taskScheduling" value="UI/UX Design"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.interestedAreas.includes("UI/UX Design")}
          />
          <label htmlFor="uiux">UI/UX Design</label> <br />
          
          {/* checkbox 2 */}
          <input type="checkbox" id="backend" name="taskScheduling" value="Backend Development"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.interestedAreas.includes("Backend Development")}
          />
          <label htmlFor="backend">Backend Development</label> <br />

          {/* checkbox 3 */}
          <input type="checkbox" id="database" name="taskScheduling" value="Database Management"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.interestedAreas.includes("Database Management")}
          />
          <label htmlFor="database">Database Management</label> <br />

          {/* checkbox 4 */}
          <input type="checkbox" id="athentication" name="taskScheduling" value="Authentication"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.interestedAreas.includes("Authentication")}
          />
          <label htmlFor="authentication">Authentication</label> <br />

          {/* checkbox 5 */}
          <input type="checkbox" id="realtime" name="taskScheduling" value="Real-Time Updates"
            onChange={handleAreaCheckbox}
            onBlur={formik.handleBlur}
            checked={formData.interestedAreas.includes("Real-Time Updates")}
          />
          <label htmlFor="realtime">Real-Time Updates</label> <br />
          
        </div>

        <div className='p2-button'>
          <button onClick={prevStep} type="button">Previous</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Page2;
