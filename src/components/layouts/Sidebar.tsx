"use client";

import React, { useRef, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  handleCloseSideBar: () => void;
  originX: number;
  originY: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  handleCloseSideBar,
  originX,
  originY,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [closeButtonPosition, setCloseButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isSidebarOpen && closeButtonRef.current) {
      const rect = closeButtonRef.current.getBoundingClientRect();
      // Tính toán tâm chính xác hơn, dựa trên center của bounding box
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setCloseButtonPosition({ x: centerX, y: centerY });
    }
  }, [isSidebarOpen]);

  const clipPathValue = isSidebarOpen
    ? `circle(150% at ${originX}px ${originY}px)`
    : `circle(0% at ${closeButtonPosition.x}px ${closeButtonPosition.y}px)`;

  return (
    <>
    {isSidebarOpen && (
      <div
        onClick={handleCloseSideBar}
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 transition-opacity duration-1000 ease-out font-poppins"
      ></div>
    )}

    <aside
      className={`fixed top-0 left-0 w-full h-full backdrop-blur-md bg-black/70 text-white p-8 flex flex-col justify-center items-center transition-clip-path duration-1000 ease-out z-50`}
      style={{
        alignItems: 'center',
        clipPath: clipPathValue,
      }}
    >
      <button
        onClick={handleCloseSideBar}
        className="absolute top-10 right-10 text-gray-300 hover:text-white text-xl" // Quay lại top-5 right-5
        ref={closeButtonRef}
      >
        <CloseIcon fontSize="large"/>
      </button>

      <nav className="flex flex-col items-center space-y-8 font-poppins mt-20">
        <a href="#" className="text-5xl font-bold hover:text-gray-300 transition-colors duration-200">
          HOME
        </a>
        <a href="#projects" className="text-5xl font-bold hover:text-gray-300 transition-colors duration-200">
          PROJECT
        </a>
        <a href="#contact" className="text-5xl font-bold hover:text-white transition-colors duration-200">
          CONTACT
        </a>
      </nav>
    </aside>
  </>
  );
};

export default Sidebar;