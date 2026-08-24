import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <a href="#hero" className="text-xl font-bold text-dark">
          Dalton Burkhart
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-primary'
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-2 border-l border-slate-200 pl-4">
            <a href="https://github.com/dburkhart07" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-dark transition-colors">
              <FaGithub className="text-lg" />
            </a>
            <a href="https://linkedin.com/in/dalton-burkhart" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0A66C2] transition-colors">
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-dark text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/20">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-slate-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 border-t border-slate-200">
              <a href="https://github.com/dburkhart07" target="_blank" rel="noopener noreferrer" className="text-slate-500">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://linkedin.com/in/dalton-burkhart" target="_blank" rel="noopener noreferrer" className="text-slate-500">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
