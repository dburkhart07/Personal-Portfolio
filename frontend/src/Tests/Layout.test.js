import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';

test('Layout renders Header component', () => {
  render(
    <BrowserRouter>
      <Layout><div>Test Child</div></Layout>
    </BrowserRouter>
  );
  // Verifies that the Header component is rendered
  expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming Header has a role of "banner"
});

test('Layout renders Footer component', () => {
  render(
    <BrowserRouter>
      <Layout><div>Test Child</div></Layout>
    </BrowserRouter>
  );
  // Verifies that the Footer component is rendered
  expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Assuming Footer has a role of "contentinfo"
});
