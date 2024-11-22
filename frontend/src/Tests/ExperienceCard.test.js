import React from 'react';
import '@testing-library/jest-dom';
import { render, screen , fireEvent } from '@testing-library/react';
import ExperienceCard from '../Components/Reusables/ExperienceCard';

test('ExperienceCard renders with company and duration', () => {
  render(<ExperienceCard company="Tech Corp" dates="2020-2023" description={[]} delay={0} isOpen={false} toggleExpand={() => {}} />);

  expect(screen.getByText(/Tech Corp/i)).toBeInTheDocument();
  expect(screen.getByText(/2020-2023/i)).toBeInTheDocument();
});

test('ExperienceCard toggles between collapsed and expanded states', () => {
  const mockToggleExpand = jest.fn();

  render(<ExperienceCard 
    company="Tech Corp" 
    dates="2020-2023" 
    description={['Worked on backend systems', 'Led a team of 5 engineers']} 
    delay={0} 
    isOpen={false} 
    toggleExpand={mockToggleExpand} 
  />);

  // The card should be collapsed initially
  expect(screen.queryByText(/Click for more/i)).toBeInTheDocument();

  // Simulate click to expand the card
  fireEvent.click(screen.getByText(/Click for more/i));

  // Ensure the mock toggleExpand was called
  expect(mockToggleExpand).toHaveBeenCalled();

  // Simulate a second click to collapse the card again
  fireEvent.click(screen.getByText(/Click for more/i));

  // Ensure the mock toggleExpand was called again
  expect(mockToggleExpand).toHaveBeenCalledTimes(2);
});

test('ExperienceCard displays description when expanded', () => {
  render(<ExperienceCard 
    company="Tech Corp" 
    dates="2020-2023" 
    description={['Worked on backend systems', 'Led a team of 5 engineers']} 
    delay={0} 
    isOpen={true} 
    toggleExpand={() => {}} 
  />);

  // When the card is expanded, the descriptions should be displayed
  expect(screen.getByText(/Worked on backend systems/i)).toBeInTheDocument();
  expect(screen.getByText(/Led a team of 5 engineers/i)).toBeInTheDocument();
});

test('ExperienceCard does not show description when collapsed', () => {
  render(<ExperienceCard 
    company="Tech Corp" 
    dates="2020-2023" 
    description={['Worked on backend systems', 'Led a team of 5 engineers']} 
    delay={0} 
    isOpen={false} 
    toggleExpand={() => {}} 
  />);

  // When the card is collapsed, the description should not be visible
  expect(screen.queryByText(/Worked on backend systems/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Led a team of 5 engineers/i)).not.toBeInTheDocument();
});
