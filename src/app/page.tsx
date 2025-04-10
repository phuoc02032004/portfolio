"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Footer from "@/components/home/Footer";

import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import FullScreenWhiteOverlay from '@/components/ui/FullScreenWhiteOverlay';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [originPosition, setOriginPosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [, setIsLoading] = useState(true);
  const [, setShowLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowLoading(false);
        setTimeout(() => { 
          setShowOverlay(false);
        }, 2000 + 1000); 
      }, 800);
    }, 1000);
  }, []);

  const handleOpenSideBar = (originX: number, originY: number) => {
    setOriginPosition({ x: originX, y: originY });
    setIsSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
        {showOverlay && <FullScreenWhiteOverlay />}
        <Header handleOpenSidebar={handleOpenSideBar} />
        <Sidebar
            isOpen={isSidebarOpen}
            onClose={handleCloseSideBar}
            originPosition={originPosition}
            darkMode={darkMode}
        />
        
        <main className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
          <HeroSection darkMode={darkMode} />
          <AboutSection darkMode={darkMode} />
          <ProjectsSection darkMode={darkMode} />
          <ContactSection darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}
