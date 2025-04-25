"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#team", label: "Our Team" },
    { href: "#contact", label: "Contact Us" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
          isScrolled ? "navbar-glass" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text">
            Design Sharp
          </a>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-purple-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <motion.button
            className="md:hidden text-white relative"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-secondary flex flex-col justify-center items-center space-y-8 pt-16 md:hidden z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-xl text-white hover:text-purple-800"
                onClick={toggleMenu}
                variants={linkVariants}
                whileHover={{
                  scale: 1.05,
                  color: "rgb(var(--theme-purple))",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
