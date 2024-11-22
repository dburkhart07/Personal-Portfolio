import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from '../Components/Projects';

test('Project renders title and description', () => {
  render(<Project title="Test Project" description="A sample project" />);
  expect(screen.getByText(/Test Project/i)).toBeInTheDocument();
  expect(screen.getByText(/A sample project/i)).toBeInTheDocument();
});
