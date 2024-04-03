import React from 'react';
import { useState } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Sucess from './Pages/Sucess';

const Main = () => {
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    dob: new Date(),
    email: '',
    phone: '',
    programmingLanguage: '',
    experienceLevel: '',
    preferredStack: [],
    interedtedAreas: [],
    resume: null,
  })

    // updater function to update the formdata in next components 
    const updateFormData = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
    };

    // go back to previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    // proceed to the next step
    const nextStep = () => {
        setStep(step + 1);
    }

//   const handleChange = input => e => {
//     if (input === 'resume') {
//       setFormData({ ...formData, [input]: e.target.files[0] });
//     } else if (e.target.type === 'date') {
//       setFormData({ ...formData, [input]: e.target.valueAsDate });
//     } else {
//       setFormData({ ...formData, [input]: e.target.value });
//     }
//   }

    switch(step) {
        case 1: 
          return <Page1 
                  nextStep={nextStep}
                  formData={formData}
                  updater={updateFormData} />;
        case 2: 
          return <Page2 
                  prevStep={prevStep}
                  nextStep={nextStep}
                  formData={formData} 
                  updater={updateFormData}
                  />;
        case 3: 
          return <Page3 
                  prevStep={prevStep}
                  nextStep={nextStep}
                  formData={formData}
                  updater={updateFormData} />;
        case 4: 
          return <Page4 
                  prevStep={prevStep}
                  nextStep={nextStep}
                  formData={formData}
                  />;
        
        case 5: 
          return <Sucess />;

        default: 
          return null;
      }
}

export default Main