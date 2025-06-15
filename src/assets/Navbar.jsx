import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const currentPath = location.pathname;
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClasses = (path) =>
    `hover:text-green-400 transition-all ${currentPath === path ? 'text-green-400 text-xl' : ''}`;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full px-4 py-3 flex justify-between items-center bg-transparent z-30">
      {/* Logo */}
      <div className="text-3xl font-bold text-white md:px-7">
        <Link to="/">V</Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 font-semibold uppercase items-center text-white">
        <Link to="/about" className={linkClasses('/about')}>About</Link>
        <Link to="/projects" className={linkClasses('/projects')}>Projects | Skills</Link>
        <Link to="/contact" className={linkClasses('/contact')}>Contact</Link>

        {/* Resume Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-5 py-2 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all flex items-center gap-2"
          >
            Resume <FaChevronDown className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} size={14} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-black/70 backdrop-blur-md rounded-md shadow-lg text-white z-50">
              <a
                href="/Vishal_patil_MLCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:text-green-400"
              >
                ML Resume
              </a>
              <a
                href="/Vishal_Patil_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:text-green-400"
              >
                Web Resume
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      {!menuOpen && (
  <div className="md:hidden text-white text-3xl z-50" onClick={toggleMenu}>
    <FiMenu />
  </div>
)}

      {/* Mobile Menu */}
{menuOpen && (
  <div
    className="fixed inset-0 z-40 text-white md:hidden backdrop-blur-lg"
    style={{
      backgroundImage: "url('/menubg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60" />

    {/* ✅ CLOSE BUTTON pinned to screen */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-6 right-6 text-3xl z-50"
    >
      <FiX />
    </button>

    {/* Menu links & dropdown */}
    <div className="relative z-10 h-full p-5 flex flex-col gap-6 items-start justify-center">
      <Link to="/"  onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400">Home</Link>
      <Link to="/about"    onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400">About</Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400">Projects | Skills</Link>
      <Link to="/contact"  onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400">Contact</Link>

      {/* Resume dropdown */}
      <div className="relative w-full" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="px-5 py-2 mt-4 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white flex items-center gap-2 transition-all"
        >
          Resume
          <FaChevronDown
            className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            size={14}
          />
        </button>

        {dropdownOpen && (
          <div className="mt-2 w-full bg-black/40 backdrop-blur-md rounded-md flex flex-col gap-2">
            <a
              href="/Vishal_patil_MLCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 border border-amber-200 hover:bg-green-600/30"
            >
              ML Resume
            </a>
            <a
              href="/Vishal_Patil_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 border border-amber-200 hover:bg-green-600/30"
            >
              Web Resume
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Navbar;
