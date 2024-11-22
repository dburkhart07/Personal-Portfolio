import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from '../Components/Contact';

describe('Contact Form', () => {
  it('shows an alert if emails do not match', () => {
    render(
      <Router>
        <Contact />
      </Router>
    );

    // Find input fields for email and confirm email
    const emailInputs = screen.getAllByPlaceholderText(/Email/i);
    expect(emailInputs).toHaveLength(2);

    const emailInput = emailInputs[0];
    const confirmEmailInput = emailInputs[1];

    // Find the submit button
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    // Fill in the inputs with mismatched emails
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(confirmEmailInput, { target: { value: 'different@example.com' } });

    // Mock window.alert
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Submit the form
    fireEvent.click(submitButton);

    // Assert that alert was called with the correct message
    expect(alertMock).toHaveBeenCalledWith('Email addresses do not match. Please check and try again.');
    alertMock.mockRestore(); // Clean up after the test
  });
});
