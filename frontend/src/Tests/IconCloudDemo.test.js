import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IconCloudDemo from '../Components/Reusables/IconCloudDemo';

test('IconCloudDemo renders without crashing', () => {
  render(<IconCloudDemo />);
  // Verifies that the IconCloudDemo component is rendered
  expect(screen.getByText(/icon cloud/i)).toBeInTheDocument(); // Assuming the component has some identifiable text
});

test('IconCloudDemo renders icons correctly', async () => {
  render(<IconCloudDemo />);
  
  // Verifies that the icons are rendered (check for specific icons if possible)
  const iconElements = await screen.findAllByRole('img'); // Assuming icons are rendered as <img> elements
  expect(iconElements.length).toBeGreaterThan(0); // Ensures at least one icon is rendered
});
