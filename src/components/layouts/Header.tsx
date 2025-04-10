"use client"

import React, { useState, useRef, useEffect, useCallback } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

interface HeaderProps {
  handleOpenSidebar: (originX: number, originY: number) => void;
}

const Header: React.FC<HeaderProps> = ({ handleOpenSidebar }) => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [spanPositions, setSpanPositions] = useState(
    // Default values for SSR to prevent hydration mismatch
    [...Array(5)].map(() => ({ left: '0%', top: '0%', randomX: 0 }))
  );

  const calculateMenuPosition = useCallback(() => {
    if (menuButtonRef.current) {
      const rect = menuButtonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMenuPosition({ x: centerX, y: centerY });
    }
  }, []);

  useEffect(() => {
    calculateMenuPosition();
    window.addEventListener('resize', calculateMenuPosition);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', calculateMenuPosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [calculateMenuPosition]);

  useEffect(() => {
    setIsMounted(true);
    // Generate random positions only on client mount
    const positions = [...Array(5)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      randomX: Math.random() * 20 - 10,
    }));
    setSpanPositions(positions);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleClick = () => {
    handleOpenSidebar(menuPosition.x, menuPosition.y);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-gray-900/90 backdrop-blur-lg shadow-lg'
          : 'py-4 bg-transparent'
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            <a href="#" className="relative inline-block">
              <span className="relative z-10 text-3xl font-extrabold font-poppins tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                HONG
                PHUOC
              </span>
              
              <div className="absolute -inset-2 blur-xl bg-gradient-to-r from-blue-400/20 via-blue-200/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150 rounded-full"></div>
              
              <div className="absolute inset-0 w-full opacity-0 group-hover:opacity-100">
              </div>
              
              <div className="absolute -inset-8">
                {isMounted && spanPositions.map((pos, i) => (
                  <motion.span
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/40 rounded-full blur-sm opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, pos.randomX, 0], // Use state value
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: pos.left, // Use state value
                      top: pos.top,   // Use state value
                    }}
                  />
                ))}
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              ref={menuButtonRef}
              onClick={handleClick}
              aria-label="menu"
              className={`relative overflow-hidden group ${
                scrolled ? 'py-2' : 'py-3'
              } px-4 rounded-lg transition-all duration-300 h-16 w-14`}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MenuIcon className="text-white transform transition-transform group-hover:rotate-180 duration-300" />
              </motion.div>
              <span className="absolute inset-0 bg-blue-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;