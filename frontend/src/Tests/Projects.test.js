import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Project from '../Components/Projects';
import axios from 'axios';

// Mock axios module
jest.mock('axios');

// Mock project data
const mockProjects = [
  {
    title: 'Test Project 1',
    image: 'image1.jpg',
    techStack: 'React, Node.js',
    projectLink: 'http://project1.com',
    delay: 0.5,
  },
  {
    title: 'Test Project 2',
    image: 'image2.jpg',
    techStack: 'Angular, Express',
    projectLink: 'http://project2.com',
    delay: 1.0,
  },
];

test('Project renders title and description from API data', async () => {
  // Mock the axios GET request
  axios.get.mockResolvedValueOnce({ data: mockProjects });

  render(<Project />);

  // Wait for the API call to finish and the component to render
  await waitFor(() => {
    // Check if the title of the first project is in the document
    expect(screen.getByText(/Test Project 1/i)).toBeInTheDocument();
    // Check if the title of the second project is in the document
    expect(screen.getByText(/Test Project 2/i)).toBeInTheDocument();
  });
});

test('ProjectCard components render correctly', async () => {
  // Mock the axios GET request
  axios.get.mockResolvedValueOnce({ data: mockProjects });

  render(<Project />);

  // Wait for the component to finish rendering after the data is fetched
  await waitFor(() => {
    // Ensure that the correct number of project cards are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockProjects.length);  // Check if images are rendered, implying the cards are there
  });
});
