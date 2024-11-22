import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import IconCloud, { cloudProps } from '../Components/Reusables/IconCloud';
import { useTheme } from 'next-themes';
import * as reactIconCloud from 'react-icon-cloud';

// Mocking the fetchSimpleIcons function and next-themes
jest.mock('react-icon-cloud', () => ({
  Cloud: ({ children }) => <div>{children}</div>,
  fetchSimpleIcons: jest.fn(),
  renderSimpleIcon: jest.fn((props) => <div>{props.icon}</div>),
}));

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('IconCloud', () => {
  it('renders icons correctly when provided with slugs', async () => {
    // Mock the fetchSimpleIcons function to return mock data
    const mockIcons = {
      simpleIcons: {
        React: { name: 'React' },
        'Node.js': { name: 'Node.js' },
        MongoDB: { name: 'MongoDB' },
      },
    };
    reactIconCloud.fetchSimpleIcons.mockResolvedValue(mockIcons);

    // Mock the theme to be 'light'
    useTheme.mockReturnValue({ theme: 'light' });

    const icons = ['React', 'Node.js', 'MongoDB'];

    // Render IconCloud component
    render(<IconCloud iconSlugs={icons} />);

    // Wait for icons to be rendered after fetching
    await waitFor(() => {
      icons.forEach((icon) => {
        expect(screen.getByText(icon)).toBeInTheDocument();
      });
    });
  });

  it('renders icons with correct background color for light theme', async () => {
    const mockIcons = {
      simpleIcons: {
        React: { name: 'React' },
        'Node.js': { name: 'Node.js' },
      },
    };
    reactIconCloud.fetchSimpleIcons.mockResolvedValue(mockIcons);
    useTheme.mockReturnValue({ theme: 'light' });

    const icons = ['React', 'Node.js'];
    render(<IconCloud iconSlugs={icons} />);

    await waitFor(() => {
      // Check for the background color style of the icons
      const iconElements = screen.getAllByText(/React|Node.js/);
      iconElements.forEach((icon) => {
        expect(icon).toHaveStyle('background-color: #f3f2ef'); // Light theme background color
      });
    });
  });

  it('renders icons with correct background color for dark theme', async () => {
    const mockIcons = {
      simpleIcons: {
        React: { name: 'React' },
      },
    };
    reactIconCloud.fetchSimpleIcons.mockResolvedValue(mockIcons);
    useTheme.mockReturnValue({ theme: 'dark' });

    const icons = ['React'];
    render(<IconCloud iconSlugs={icons} />);

    await waitFor(() => {
      // Check for the background color style of the icons
      const iconElements = screen.getAllByText(/React/);
      iconElements.forEach((icon) => {
        expect(icon).toHaveStyle('background-color: #080510'); // Dark theme background color
      });
    });
  });

  it('handles an empty list of icon slugs gracefully', async () => {
    const icons = [];
    render(<IconCloud iconSlugs={icons} />);

    // Since the list is empty, the component shouldn't render anything
    await waitFor(() => {
      expect(screen.queryByText('React')).toBeNull();
      expect(screen.queryByText('Node.js')).toBeNull();
      expect(screen.queryByText('MongoDB')).toBeNull();
    });
  });

  it('does not render icons if fetching fails', async () => {
    reactIconCloud.fetchSimpleIcons.mockRejectedValueOnce(new Error('Failed to fetch icons'));
    useTheme.mockReturnValue({ theme: 'light' });

    const icons = ['React', 'Node.js', 'MongoDB'];
    render(<IconCloud iconSlugs={icons} />);

    await waitFor(() => {
      // Ensure no icons are rendered if fetch fails
      expect(screen.queryByText('React')).toBeNull();
      expect(screen.queryByText('Node.js')).toBeNull();
      expect(screen.queryByText('MongoDB')).toBeNull();
    });
  });
});
