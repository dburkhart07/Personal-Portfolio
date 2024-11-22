import React from 'react';
import { render } from '@testing-library/react';
import IconCloudDemo from '../Components/Reusables/IconCloudDemo';

test('IconCloudDemo renders without crashing', () => {
  const { container } = render(<IconCloudDemo />);
  expect(container).toBeInTheDocument();
});
