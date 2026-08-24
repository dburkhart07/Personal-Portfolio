import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface TimelineCardProps {
  company: string;
  location: string;
  title: string;
  dates: string;
  description: string[];
  isOpen: boolean;
  toggleExpand: () => void;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ company, location, title, dates, description, isOpen, toggleExpand }) => {
  return (
    <div className="relative pl-8 pb-8 group">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-blue-200 group-last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary border-4 border-blue-100 z-10" />

      <div
        className="glass rounded-2xl p-5 cursor-pointer transition-all duration-300 ml-4"
        onClick={toggleExpand}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-dark">{company}</h3>
            <p className="text-sm text-slate-500">{location}</p>
            <p className="text-sm text-primary font-medium">{title}</p>
            <p className="text-xs text-slate-400">{dates}</p>
          </div>
          <span className="text-slate-400 mt-1">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-[600px] mt-4' : 'max-h-0'
          }`}
        >
          <ul className="space-y-3">
            {description.map((line, i) => (
              <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                <span className="text-primary mt-1 flex-shrink-0">&#8226;</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
