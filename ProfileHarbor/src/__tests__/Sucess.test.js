import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sucess from '../Pages/Sucess';

// Mock data
const setFormDataMock = jest.fn();

describe('Sucess Component', () => {
  it('renders without crashing', () => {
    render(<Sucess setFormData={setFormDataMock} />);
    // No errors means it rendered successfully
  });

  it('calls handleSubmit when "Add Another Entry" button is clicked', () => {
    const { getByText } = render(<Sucess setFormData={setFormDataMock} />);

    fireEvent.click(getByText('Add Another Entry'));

    expect(setFormDataMock).toHaveBeenCalledWith({
      step: 1,
      name: '',
      dob: expect.any(Date),
      email: '',
      phone: '',
      programmingLanguage: '',
      experienceLevel: '',
      preferredStack: [],
      interestedAreas: [],
      resume: null,
    });
  });
});
