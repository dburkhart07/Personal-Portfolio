import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Experience from '../Components/Experience';
import axios from 'axios';

// Mock the axios module to avoid actual API calls
jest.mock('axios');

test('Experience section renders jobs', async () => {
  // Define the mock response data for experience
  const experiences = [
    {
      company: 'Tech Corp',
      dates: '2020-2023',
      description: ['Worked on backend systems'],
      delay: 0.5,
    },
  ];

  // Mock the API response using axios
  axios.get.mockResolvedValue({ data: experiences });

  // Render the Experience component
  render(<Experience />);

  // Wait for the experience data to be fetched and rendered
  await waitFor(() => expect(screen.getByText(/Tech Corp/i)).toBeInTheDocument());
  expect(screen.getByText(/2020-2023/i)).toBeInTheDocument();
  expect(screen.getByText(/Worked on backend systems/i)).toBeInTheDocument();
});

test('Experience section handles API error gracefully', async () => {
  // Mock axios to simulate an error response
  axios.get.mockRejectedValue(new Error('Failed to fetch experience data'));

  // Render the Experience component
  render(<Experience />);

  // Check that the experience data is not rendered (since API failed)
  await waitFor(() => expect(screen.queryByText(/Tech Corp/i)).not.toBeInTheDocument());
});
