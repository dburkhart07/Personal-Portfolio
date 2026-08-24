import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Dalton Burkhart. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:burkhart.d@northeastern.edu" className="text-slate-400 hover:text-primary transition-colors">
            <FaEnvelope />
          </a>
          <a href="https://github.com/dburkhart07" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-dark transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/dalton-burkhart" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
            <FaLinkedin />
          </a>
          <a href="#hero" className="text-sm text-slate-400 hover:text-primary transition-colors ml-4">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
