// Header.tsx
"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"; // Import useRef and useEffect
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

interface HeaderProps {
  handleOpenSidebar: (originX: number, originY: number) => void; // Update handleOpenSidebar to accept origin props
}

const Header: React.FC<HeaderProps> = ({ handleOpenSidebar }) => {
  const menuButtonRef = useRef<HTMLButtonElement>(null); // Create a ref for the button
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

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
    window.addEventListener('resize', calculateMenuPosition); // Recalculate on resize
    return () => {
      window.removeEventListener('resize', calculateMenuPosition); // Cleanup listener
    };
  }, [calculateMenuPosition]);

  const handleClick = () => {
    handleOpenSidebar(menuPosition.x, menuPosition.y); // Pass position to handleOpenSidebar
  };


  return (
    <header
      className="backdrop-blur-3xl"
      style={{
        background:
          "linear-gradient(to top, rgba(28, 39, 48, 0), rgba(28, 39, 48, 0.2))",
      }}
    >
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center backdrop-blur-xl p-3 rounded-lg bg-transparent border-2 border-gray/90 shadow-2xl"
          >
            <span
            className=" text-3xl font-extrabold font-poppins text-[#FFFCF0]"
            >
              HONG.PHUOC
            </span>
          </a>
          <Button
            color="inherit"
            variant="text"
            className="text-xl rounded-lg py-5 bg-gray-100 hover:bg-gray-200 border-2 border-gray/90 shadow-2xl"
            style={{
              background:
                "linear-gradient(to top, rgba(28, 39, 48, 0), rgba(28, 39, 48, 0.4))",
            }}
            onClick={handleClick} // Use handleClick function
            aria-label="menu"
            ref={menuButtonRef} // Attach the ref to the Button
          >
            <MenuIcon  className="text-white"/>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;