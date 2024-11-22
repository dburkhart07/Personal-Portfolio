import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Card from '../Components/Reusables/Card';
import '@testing-library/jest-dom';

test('Card renders correctly with title and description', async () => {
    render(<Card title="Test Title">Test Description</Card>);
  
    // Verifies that the card title and description are rendered
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
  
    // Wait for the animation to complete and check visibility
    await waitFor(() => {
      const cardElement = screen.getByText(/Test Description/i).closest('div');
      // Checks if the card is visible after the animation
      expect(cardElement).toBeVisible();  
    });
  });
  
