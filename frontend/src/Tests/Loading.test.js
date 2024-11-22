import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../Components/Loading';

test('Loading component renders spinner', () => {
  render(<Loading />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
});
