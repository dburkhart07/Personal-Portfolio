import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '../Components/About';

test('About section renders heading', () => {
  render(<About />);
  // Ensures the "About Me" heading is present
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
});

test('About section renders bio text', () => {
  render(<About />);
  // Verifies that parts of the bio are rendered correctly
  expect(screen.getByText(/Hi, I'm Dalton!/i)).toBeInTheDocument();
  expect(screen.getByText(/second year student studying Computer Science and AI/i)).toBeInTheDocument();
});

test('About section renders hobbies', () => {
  render(<About />);
  // Verifies the hobby items are rendered correctly
  expect(screen.getByText(/Playing music \(guitar, piano, and saxophone\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Personal fitness/i)).toBeInTheDocument();
  expect(screen.getByText(/Watching educational content/i)).toBeInTheDocument();
  expect(screen.getByText(/Cooking and baking/i)).toBeInTheDocument();
  expect(screen.getByText(/Playing video and board games/i)).toBeInTheDocument();
});

// test('About section renders song list with embedded Spotify links', async () => {
//     render(<About />);
  
//     // Verifies that the song section header is rendered
//     expect(screen.getByText(/Some of my favorite songs/i)).toBeInTheDocument();
  
//     // Wait for the iframes to be rendered
//     await waitFor(() => {
//       const songEmbeds = screen.getAllByRole('iframe');
//       expect(songEmbeds.length).toBe(5); // Ensure that 5 songs are rendered
//     });
  
//     // Check that each iframe has the correct embed URL (optional)
//     const songEmbeds = screen.getAllByRole('iframe');
//     expect(songEmbeds[0]).toHaveAttribute('src', 'https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp');
//     expect(songEmbeds[1]).toHaveAttribute('src', 'https://open.spotify.com/embed/track/7uY7jZs5srSx3xMmyCI48T');
//     expect(songEmbeds[2]).toHaveAttribute('src', 'https://open.spotify.com/embed/track/32iNr3J93tqFkxaMYwdRYi');
//     expect(songEmbeds[3]).toHaveAttribute('src', 'https://open.spotify.com/embed/track/3GZD6HmiNUhxXYf8Gch723');
//     expect(songEmbeds[4]).toHaveAttribute('src', 'https://open.spotify.com/embed/track/5IhzJOXNE7ki0IIJbZbnGq');
// });

test('About section renders favorite artists list', () => {
  render(<About />);
  // Verifies that favorite artists are listed correctly
  expect(screen.getByText(/Shawn Mendes/i)).toBeInTheDocument();
  expect(screen.getByText(/Hozier/i)).toBeInTheDocument();
  expect(screen.getByText(/Noah Kahan/i)).toBeInTheDocument();
  expect(screen.getByText(/SZA/i)).toBeInTheDocument();
  expect(screen.getByText(/Bruno Mars/i)).toBeInTheDocument();
  expect(screen.getByText(/Wallows/i)).toBeInTheDocument();
});

test('About section renders favorite movies', () => {
  render(<About />);
  // Verifies that favorite movies are rendered correctly
  expect(screen.getByText(/Spiderman: Into the Spiderverse/i)).toBeInTheDocument();
  expect(screen.getByText(/Aladdin/i)).toBeInTheDocument();
  expect(screen.getByText(/Crazy Rich Asians/i)).toBeInTheDocument();
  expect(screen.getByText(/LaLa Land/i)).toBeInTheDocument();
  expect(screen.getByText(/Howl's Moving Castle/i)).toBeInTheDocument();
});

test('About section renders travel destinations', () => {
  render(<About />);
  // Verifies that travel destinations are listed correctly
  expect(screen.getByText(/Japan \(Tokyo, Kyoto, and Okinawa\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Italy \(Rome, Venice, and Milan\)/i)).toBeInTheDocument();
  expect(screen.getByText(/Iceland/i)).toBeInTheDocument();
  expect(screen.getByText(/Hawaii/i)).toBeInTheDocument();
});
