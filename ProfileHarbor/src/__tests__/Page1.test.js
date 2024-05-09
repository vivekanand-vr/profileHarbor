import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react'; 
import Page1 from '../Pages/Page1'; 

  // Mock data object
  let formData = {
    name: '',
    dob: '',
    email: '',
    phone: '',
  };
    // Mock updater function to modify formData
    const updateFormData = (fieldName, value) => {
      formData = { ...formData, [fieldName]: value };
  };
  // Mock function for next step
  const nextStepMock = jest.fn();

describe('Page1 Component', () => { 
    // Test for proper rendering of the component
    it('Renders without crashing', () => {
      render(
        <Page1
          nextStep={nextStepMock}
          formData={formData}
          updater={updateFormData}
        />
      );
    });
    
    // Test for checking submit with form filled
    it('Submits form with valid data', async () => {
      const { getByLabelText, getByText } = render(
        <Page1
          nextStep={nextStepMock}
          formData={formData}
          updater={updateFormData}
        />
      );
  
      // Fill out form
      fireEvent.change(getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
      fireEvent.change(getByLabelText(/Date of Birth:/i), { target: { value: '1990-01-01' } });
      fireEvent.change(getByLabelText(/Email:/i), { target: { value: 'john@example.com' } });
      fireEvent.change(getByLabelText(/Phone Number:/i), { target: { value: '1234567890' } });
  
      fireEvent.click(getByText(/Next/i));
  
      // Assert nextStep and updateFormData were called
      await waitFor(() => {
        expect(nextStepMock).toHaveBeenCalled();
        // Assert formData has been updated
        expect(formData).toEqual({
          name: 'John Doe',
          dob: '1990-01-01',
          email: 'john@example.com',
          phone: '1234567890'
        });
      });
    });
});

