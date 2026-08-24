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
      className="glass rounded-xl p-3 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="text-2xl md:text-3xl" style={{ color }} />
      <span className="text-[10px] md:text-xs text-slate-500 text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

export default SkillIcon;
