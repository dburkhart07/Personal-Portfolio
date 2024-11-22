import React from 'react';
import { render, screen } from '@testing-library/react';
import Song from '../Components/Reusables/Song';

test('Song component renders with title and composer', () => {
  render(<Song title="Moonlight Sonata" composer="Beethoven" />);
  expect(screen.getByText(/Moonlight Sonata/i)).toBeInTheDocument();
  expect(screen.getByText(/Beethoven/i)).toBeInTheDocument();
});
