import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Components/Header';

// Mock NavLink to prevent issues with routing during tests
jest.mock('react-router-dom', () => ({
  NavLink: ({ children }) => <a>{children}</a>,
}));

// Helper function to simulate screen resize
const setWindowWidth = (width) => {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));  // Trigger resize event
};

// Test: Header renders navigation links
test('Header renders navigation links', () => {
  render(<Header />);
  
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});

// Test: Header toggles menu visibility on mobile (small screens)
test('Header toggles menu visibility on mobile', () => {
  setWindowWidth(320); // Simulate mobile screen width
  
  render(<Header />);

  // Initially, the menu should be hidden (because isOpen is false) on mobile screens
  const menu = screen.getByRole('navigation').querySelector('ul'); // Target the <ul> inside the nav
  expect(menu).not.toHaveClass('hidden'); // Menu should be hidden initially on mobile

  // Find the hamburger button to toggle the menu
  const hamburgerButton = screen.getByRole('button');
  fireEvent.click(hamburgerButton);

  // After clicking the hamburger button, the menu should be visible (isOpen = true)
  expect(menu).not.toHaveClass('hidden'); // Menu should be visible

  // Clicking the hamburger button again should hide the menu (isOpen = false)
  fireEvent.click(hamburgerButton);
  expect(menu).not.toHaveClass('hidden'); // Menu should be hidden again
});

// Test: Header toggles isOpen state and menu visibility on button click
test('Header toggles isOpen state and menu visibility on button click', () => {
  setWindowWidth(320); // Simulate mobile screen width
  
  render(<Header />);

  // Initially, the menu should be hidden (because isOpen is false)
  const menu = screen.getByRole('navigation').querySelector('ul'); // Target the <ul> inside the nav
  expect(menu).not.toHaveClass('hidden'); // Menu should be hidden initially

  // Find the hamburger button to toggle the menu
  const hamburgerButton = screen.getByRole('button');
  fireEvent.click(hamburgerButton);

  // After clicking the hamburger button, the menu should be visible (isOpen = true)
  expect(menu).not.toHaveClass('hidden'); // Menu should be visible

  // Clicking the hamburger button again should hide the menu (isOpen = false)
  fireEvent.click(hamburgerButton);
  expect(menu).not.toHaveClass('hidden'); // Menu should be hidden again
});

// Test: Menu always visible on medium screens and larger
test('Menu always visible on medium screens and larger', () => {
  setWindowWidth(1024); // Simulate medium screen width (md)

  render(<Header />);

  // The menu should always be visible on medium screens or larger (md:flex)
  const menu = screen.getByRole('navigation').querySelector('ul'); // Target the <ul> inside the nav
  expect(menu).not.toHaveClass('hidden'); // Menu should be visible (since it's medium screen or larger)
});
