import React from 'react';
import { IconType } from 'react-icons';

interface SkillIconProps {
  Icon: IconType;
  name: string;
  color: string;
  delay?: number;
}

const SkillIcon: React.FC<SkillIconProps> = ({ Icon, name, color, delay = 0 }) => {
  return (
    <div
      className="glass rounded-xl p-4 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-default group relative"
      style={{ animationDelay: `${delay}ms` }}
      title={name}
    >
      <Icon className="text-3xl md:text-4xl" style={{ color }} />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
