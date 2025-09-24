"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import dynamic from 'next/dynamic';

import HeroSection from "@/components/home/HeroSection";
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const ProjectsSection = dynamic(() => import('@/components/home/ProjectsSection'));
const ContactSection = dynamic(() => import('@/components/home/ContactSection'));
import FullScreenWhiteOverlay from '@/components/layouts/FullScreenWhiteOverlay';
import { CosmicBackground } from '@/components/home/CosmicBackground';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [originPosition, setOriginPosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [, setIsLoading] = useState(true);
  const [, setShowLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const overlayTimeout = isMobile ? 1000 : 2000;
    const transitionTimeout = isMobile ? 500 : 1000;

    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowLoading(false);
        setTimeout(() => {
          setShowOverlay(false);
        }, transitionTimeout);
      }, 800);
    }, overlayTimeout);
  }, []);

  const handleOpenSideBar = useCallback((originX: number, originY: number) => {
    setOriginPosition({ x: originX, y: originY });
    setIsSidebarOpen(true);
  }, []);

  const handleCloseSideBar = () => {
    setIsSidebarOpen(false);
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
        <video
          src="/videos/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <CosmicBackground />
        <Header handleOpenSidebar={handleOpenSideBar} />
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSideBar}
          originPosition={originPosition}
          darkMode={darkMode}
        />

        <main className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
          <HeroSection />
          <AboutSection darkMode={darkMode} />
          <ProjectsSection darkMode={darkMode} />
          <ContactSection darkMode={darkMode} />
        </main>
        {/* <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
      </div>
    </div>
  );
}
