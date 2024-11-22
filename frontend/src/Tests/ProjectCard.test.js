import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../Components/Reusables/ProjectCard';

test('ProjectCard renders with project details', () => {
  render(<ProjectCard title="My Project" description="This is a test project." />);
  expect(screen.getByText(/My Project/i)).toBeInTheDocument();
  expect(screen.getByText(/This is a test project./i)).toBeInTheDocument();
});
