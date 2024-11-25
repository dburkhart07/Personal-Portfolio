import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SkillsLanguage from '../Components/Reusables/SkillsLanguage';

test('SkillsLanguage renders with skill names', () => {
  const skills = [
    { name: 'JavaScript', level: '90%', color: 'bg-yellow-500' },
    { name: 'Python', level: '80%', color: 'bg-blue-500' },
  ];
  
  render(<SkillsLanguage skills={skills} />);

  skills.forEach(skill => {
    // Check if each skill name is rendered
    expect(screen.getByText(skill.name)).toBeInTheDocument();
    
    // Check if the skill level bar has the correct width (style)
    const skillElement = screen.getByText(skill.name).closest('div');
    const levelBar = skillElement.querySelector('span');
    expect(levelBar).toHaveStyle(`width: ${skill.level}`);
    expect(levelBar).toHaveClass(skill.color);
  });
});
