import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink 
              to="/" 
              className="text-gray-900 text-2xl font-bold hover:text-orange-500 transition duration-300"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="flex flex-col">
                  <span>HAMMER-HIRE</span>
                  <span className="text-xs font-normal text-gray-600">CONSTRUCTION SOLUTIONS</span>
                </span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `text-gray-800 px-3 py-2 text-md font-medium hover:text-orange-500 transition duration-300 ${
                  isActive ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-gray-800 px-3 py-2 text-md font-medium hover:text-orange-500 transition duration-300 ${
                  isActive ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-gray-800 px-3 py-2 text-md font-medium hover:text-orange-500 transition duration-300 ${
                  isActive ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-gray-800 px-3 py-2 text-md font-medium hover:text-orange-500 transition duration-300 ${
                  isActive ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-gray-800 px-3 py-2 text-md font-medium hover:text-orange-500 transition duration-300 ${
                  isActive ? 'text-orange-500 border-b-2 border-orange-500' : ''
                }`
              }
            >
              Contact
            </NavLink>

           <NavLink 
           to="/request" 
          className={({ isActive }) => 
             `ml-4 font-semibold py-2 px-6 rounded-md shadow-sm transition duration-300 border ${
           isActive 
           ? 'bg-orange-500 text-white border-orange-600 shadow-md' 
           : 'bg-orange-500 hover:bg-orange-600 text-white border-orange-600 hover:shadow-md'
    }`
  }
>
  Request
</NavLink>

          
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            <NavLink 
              to="/" 
              end
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-100 hover:text-orange-500 ${
                  isActive ? 'text-orange-500' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-100 hover:text-orange-500 ${
                  isActive ? 'text-orange-500' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-100 hover:text-orange-500 ${
                  isActive ? 'text-orange-500' : ''
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-100 hover:text-orange-500 ${
                  isActive ? 'text-orange-500' : ''
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={toggleMenu}
              className={({ isActive }) => 
                `block px-3 py-3 rounded-md text-lg font-medium text-gray-800 hover:bg-gray-100 hover:text-orange-500 ${
                  isActive ? 'text-orange-500' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <button 
              className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-sm transition duration-300"
              onClick={() => {
                alert('Request!');
                toggleMenu();
              }}
            >
              Request
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;