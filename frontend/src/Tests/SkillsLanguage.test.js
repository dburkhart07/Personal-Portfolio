import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsLanguage from '../Components/Reusables/SkillsLanguage';

test('SkillsLanguage renders with skill names', () => {
  const skills = ['JavaScript', 'Python'];
  render(<SkillsLanguage skills={skills} />);
  skills.forEach(skill => {
    expect(screen.getByText(skill)).toBeInTheDocument();
  });
});
