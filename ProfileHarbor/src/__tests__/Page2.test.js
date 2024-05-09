import React from 'react';
import { render, fireEvent, waitFor, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page2 from '../Pages/Page2';

// Mock data object
let formData = {
    programmingLanguage: '',
    experienceLevel: '',
    preferredStack: [],
    interestedAreas: []
  };
  const prevStepMock = jest.fn();
  const nextStepMock = jest.fn();

  // Mock updater function to modify formData
  const updateFormData = (fieldName, value) => {
      formData = { ...formData, [fieldName]: value };
  };

// Test for proper rendering
describe('Page2 Component', () => {
    it('Renders without crashing', () => {
      // Render the Page2 component
      const { getByText, getByLabelText } = render(
        <Page2
          prevStep={prevStepMock}
          nextStep={nextStepMock}
          formData={formData}
          updater={updateFormData}
        />
      );
      // Assert that certain elements are present in the rendered output
      expect(getByText('Technical Skills and Preferences')).toBeInTheDocument();
      expect(getByLabelText('Primary Programming Language:')).toBeInTheDocument();
      expect(getByLabelText('Experience Level:')).toBeInTheDocument();
      expect(getByText('Preferred Development Stack:')).toBeInTheDocument();
      expect(getByText('Interested Areas in Task Scheduling:')).toBeInTheDocument();
      expect(getByText('Previous')).toBeInTheDocument();
      expect(getByText('Next')).toBeInTheDocument();
    });

    it('updates form data on checkbox change', async () => {
      const { getByLabelText } = render(
        <Page2
          nextStep={nextStepMock}
          formData={formData}
          updater={updateFormData}
        />
      );
  
      // Simulate selecting a programming language
      fireEvent.change(getByLabelText('Primary Programming Language:'), {
        target: { value: 'JavaScript' }
      });
  
      // Simulate selecting an experience level
      fireEvent.change(getByLabelText('Experience Level:'), {
        target: { value: 'Intermediate' }
      });
  
      // Simulate clicking on checkboxes for development stack
      fireEvent.click(getByLabelText('MEAN'));
      fireEvent.click(getByLabelText('MERN'));
  
      // Simulate clicking on checkboxes for interested areas
      fireEvent.click(getByLabelText('UI/UX Design'));
      fireEvent.click(getByLabelText('Backend Development'));
  });
});