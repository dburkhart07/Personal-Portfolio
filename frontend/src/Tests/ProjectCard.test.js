import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../Components/Reusables/ProjectCard';

// Mock props for the ProjectCard
const projectData = {
  title: "My Project",
  image: "https://via.placeholder.com/300",
  techStack: "React, Tailwind CSS",
  projectLink: "https://myproject.com",
  delay: 0.5,
};

test('ProjectCard renders with project details', () => {
  render(<ProjectCard {...projectData} />);
  
  // Check if title is rendered
  expect(screen.getByText(/My Project/i)).toBeInTheDocument();

  // Check if tech stack is rendered
  expect(screen.getByText(/React, Tailwind CSS/i)).toBeInTheDocument();

  // Check if the image is rendered with the correct alt text (image tag should be present)
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'https://via.placeholder.com/300');
});


test('ProjectCard opens correct link when "View" button is clicked', () => {
  render(<ProjectCard {...projectData} />);

  // Simulate a click on the "View" button
  const viewButton = screen.getByText('View');
  expect(viewButton).toHaveAttribute('href', 'https://myproject.com');
  expect(viewButton).toHaveAttribute('target', '_blank');
  expect(viewButton).toHaveAttribute('rel', 'noopener noreferrer');
});


test('ProjectCard renders with correct image size and aspect ratio', () => {
  render(<ProjectCard {...projectData} />);

  // Check if the image has the correct classes for the size
  const img = screen.getByRole('img');
  expect(img).toHaveClass('object-cover');
  expect(img).toHaveClass('w-[300px]');
  expect(img).toHaveClass('h-[350px]');
});
