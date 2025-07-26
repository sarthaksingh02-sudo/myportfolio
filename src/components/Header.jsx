import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Certifications', to: 'certifications' }, // ✅ Add this
  { name: 'Achievements', to: 'achievements' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' }
];
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500}
            className="text-2xl font-bold cursor-pointer text-gray-800"
          >
            Sarthak Singh
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-primary cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
