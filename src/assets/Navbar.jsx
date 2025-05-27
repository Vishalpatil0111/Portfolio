import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full px-4 py-3 flex justify-between items-center bg-transparent z-30">
            <div className="text-3xl font-bold text-white md:px-5 ">V</div>

            <div className="hidden md:flex gap-10 font-semibold uppercase items-center text-white">
                <Link to="/" className="hover:text-green-400 transition-all">
                    <span className='text-green-400'>01.</span> Home
                </Link>
                <Link to="/about" className="hover:text-green-400 transition-all">
                    <span className='text-green-400'>02.</span> About
                </Link>
                <Link to="/projects" className="hover:text-green-400 transition-all">
                    <span className='text-green-400'>03.</span> Projects | Skills
                </Link>
                <Link to="/contact" className="hover:text-green-400 transition-all">
                    <span className='text-green-400'>04.</span> Contact
                </Link>
                <a
                    href="/Vishal_Patil_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
                >
                    Resume
                </a>
            </div>



            <div className="md:hidden text-white text-3xl" onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </div>



            {menuOpen && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8 text-white md:hidden">

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-3xl text-white"
                    >
                        <FiX />
                    </button>

                    <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400 transition-all">
                        <span className='text-green-400'>01.</span> Home
                    </Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400 transition-all">
                        <span className='text-green-400'>02.</span> About
                    </Link>
                    <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400 transition-all">
                        <span className='text-green-400'>03.</span> Projects | Skills
                    </Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg hover:text-green-400 transition-all">
                        <span className='text-green-400'>04.</span> Contact
                    </Link>

                    <a
                        href="/Vishal_Patil_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className='px-5 py-2 rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all'
                    >
                        Resume
                    </a>
                </div>
            )}


        </div>
    );
}

export default Navbar;
