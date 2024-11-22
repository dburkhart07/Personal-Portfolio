import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Confirmation from '../Components/Confirmation';

test('Confirmation renders "Thank You!" message', () => {
  render(<Confirmation />);
  expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
});

test('Confirmation renders success message', () => {
  render(<Confirmation />);
  expect(screen.getByText(/Your message has been sent successfully./i)).toBeInTheDocument();
});

test('Confirmation renders the container', () => {
  render(<Confirmation />);
  const confirmationContainer = screen.getByText(/Thank You!/i).closest('div');
  expect(confirmationContainer).toBeVisible();  // Ensure the confirmation container is visible
});
