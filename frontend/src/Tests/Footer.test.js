import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

test('Footer renders copyright information', () => {
  render(<Footer />);
  expect(screen.getByText(/© 2024 DALTON BURKHART/i)).toBeInTheDocument();
});
