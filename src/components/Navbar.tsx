'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#team', label: 'Our Team' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'navbar-glass' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">
          G R Engineering
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-theme-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-theme-dark/95 flex flex-col justify-center items-center space-y-8 pt-16 md:hidden transition-all duration-300 ease-in-out z-40',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xl text-white hover:text-theme-purple transition-colors"
            onClick={toggleMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;