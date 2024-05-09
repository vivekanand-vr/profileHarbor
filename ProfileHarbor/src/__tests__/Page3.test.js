import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page3 from '../Pages/Page3';

describe('Page3 Component', () => {
    it('validates resume file input correctly', async () => {
      const prevStepMock = jest.fn();
      const nextStepMock = jest.fn();
      const updateFormDataMock = jest.fn();
  
      const { getByLabelText, getByText } = render(
        <Page3
          prevStep={prevStepMock}
          nextStep={nextStepMock}
          formData={{}}
          updater={updateFormDataMock}
        />
      );
  
      // Simulate selecting a resume file
      const resumeFile = new File(['resume content'], 'resume.pdf', { type: 'application/pdf' });
      fireEvent.change(getByLabelText('Resume:'), {
        target: { files: [resumeFile] }
      });
  
      // Check if updateFormDataMock was called with the correct data
      expect(updateFormDataMock).toHaveBeenCalledTimes(1); // Assuming resume change triggers the updater function
      expect(updateFormDataMock).toHaveBeenCalledWith('resume', resumeFile);
  
      // Submit the form
      fireEvent.click(getByText('Next'));
  
      // Assert nextStepMock was called
      await waitFor(() => {
        expect(nextStepMock).toHaveBeenCalled();
      });
    });
  });