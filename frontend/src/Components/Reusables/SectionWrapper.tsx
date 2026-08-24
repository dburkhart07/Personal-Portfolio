import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', alt = false }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 px-4 md:px-8 lg:px-16 ${
        alt ? 'bg-gradient-to-b from-white to-emerald-50' : 'bg-slate-50'
      } ${className}`}
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
