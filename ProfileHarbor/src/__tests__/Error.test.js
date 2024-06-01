import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Error from '../Pages/Error';

describe('Error Component', () => {
  it('renders without crashing', () => {
    render(<Error />);
  });

  it('calls handleSubmit when "Try Again" button is clicked', () => {
    const setFormDataMock = jest.fn();
    const { getByText } = render(<Error setFormData={setFormDataMock} />);

    fireEvent.click(getByText('Try Again'));

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
