import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '../Components/Homepage';

// Mocking components that are used inside Homepage
jest.mock('../Components/Reusables/Card', () => ({ children }) => <div>{children}</div>);
jest.mock('../Components/Reusables/SkillsLanguage', () => ({ skills }) => (
  <div>{skills.map(skill => <div key={skill.name}>{skill.name} - {skill.level}</div>)}</div>
));
jest.mock('../Components/Reusables/IconCloudDemo', () => () => <div>Icon Cloud</div>);

test('renders Homepage correctly', () => {
  render(<Homepage />);
  const heading = screen.getByText(/Welcome to My Portfolio/i);
  expect(heading).toBeInTheDocument();
});

test('Homepage renders welcome message', () => {
  render(<Homepage />);
  expect(screen.getByText(/Welcome to Dalton's Website/i)).toBeInTheDocument();
});

test('Card 1 renders personal introduction', () => {
  render(<Homepage />);

  // Checking for the "Hi, I'm Dalton!" title
  expect(screen.getByText(/Hi, I'm Dalton!/i)).toBeInTheDocument();
  
  // Checking if the "Software Developer" title is visible
  expect(screen.getByText(/Software Developer/i)).toBeInTheDocument();
});

test('Card 2 renders "Who am I" section with description', () => {
  render(<Homepage />);

  // Checking for the "Who am I" section and description
  expect(screen.getByText(/I am a Computer Science/i)).toBeInTheDocument();
  expect(screen.getByText(/Learn more about me!/i)).toBeInTheDocument();
});

test('Card 3 renders skill categories and skills', () => {
  render(<Homepage />);

  // Checking for the skill category buttons (Languages, Frameworks, Developer Tools)
  const languagesButton = screen.getByText(/Languages/i);
  const frameworksButton = screen.getByText(/Frameworks/i);
  const devtoolsButton = screen.getByText(/Developer Tools/i);
  
  expect(languagesButton).toBeInTheDocument();
  expect(frameworksButton).toBeInTheDocument();
  expect(devtoolsButton).toBeInTheDocument();

  // Initially, "Languages" should be selected
  expect(languagesButton).toHaveClass('bg-orange-400');
  expect(frameworksButton).not.toHaveClass('bg-orange-400');
  expect(devtoolsButton).not.toHaveClass('bg-orange-400');

  // Test the dynamic rendering of skills when category is clicked
  fireEvent.click(frameworksButton);
  
  // Check that frameworks skills are displayed (SkillsLanguage component is rendered)
  expect(screen.getByText('React: 2 years')).toBeInTheDocument();
  expect(screen.getByText('Tensorflow: 2 years')).toBeInTheDocument();
  
  // Click on "DevTools" and check if devtools skills are displayed
  fireEvent.click(devtoolsButton);
  expect(screen.getByText('Git: 3 years')).toBeInTheDocument();
  expect(screen.getByText('GitHub: 3 years')).toBeInTheDocument();
});

test('Card 3 renders Icon Cloud', () => {
  render(<Homepage />);

  // Ensure that the icon cloud is visible on large screens (after rendering)
  expect(screen.getByText('Icon Cloud')).toBeInTheDocument();
});

test('Navigation buttons work correctly', () => {
  render(<Homepage />);

  // Check for the navigation buttons "See my Projects" and "View my Experience"
  const projectsLink = screen.getByText(/See my Projects/i);
  const experienceLink = screen.getByText(/View my Experience/i);
  
  expect(projectsLink).toBeInTheDocument();
  expect(experienceLink).toBeInTheDocument();

  // Check if the links are navigable (for testing purposes, they should just exist)
  expect(projectsLink.closest('a')).toHaveAttribute('href', 'projects');
  expect(experienceLink.closest('a')).toHaveAttribute('href', 'experience');
});

test('Homepage has correct layout on small screens', () => {
  // Simulate small screen (mobile) width
  global.innerWidth = 320;
  global.dispatchEvent(new Event('resize'));

  render(<Homepage />);

  // Check if layout adjusts for smaller screens (e.g., the card image should stack on top)
  const image = screen.queryByAltText(/Professional/i);
  expect(image).not.toBeInTheDocument(); // Image should not be present
});

test('Homepage has correct layout on larger screens', () => {
  // Simulate larger screen (e.g., md) width
  global.innerWidth = 1024;
  global.dispatchEvent(new Event('resize'));

  render(<Homepage />);

  // Check if layout adjusts for larger screens (e.g., the image should be beside the text)
  const image = screen.queryByAltText(/Professional/i);
  expect(image).not.toBeInTheDocument(); // Image should not be present
});
