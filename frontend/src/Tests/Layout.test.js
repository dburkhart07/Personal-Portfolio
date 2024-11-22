import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Components/Layout';

test('Layout renders children correctly', () => {
  render(<Layout><div>Test Child</div></Layout>);
  expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
});
