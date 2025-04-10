import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/personalInfo";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < breakpoint);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [breakpoint]);

  return isMobile;
}

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, isMounted && !isMobile ? 150 : 0]);
  const heroTextY = useTransform(scrollY, [0, 300], [0, isMounted && !isMobile ? -80 : 0]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, isMounted && !isMobile ? 0 : 1]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const baseTextColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const nameColor = darkMode ? 'text-cyan-500' : 'text-blue-600';
  const roleTextColor = darkMode ? 'text-cyan-300' : 'text-blue-700';
  const roleBgColor = darkMode ? 'bg-cyan-900/50' : 'bg-blue-100/90';
  const scrollHoverColor = darkMode ? 'group-hover:text-cyan-500' : 'group-hover:text-blue-600';
  const scrollBorderHoverColor = darkMode ? 'group-hover:border-cyan-500' : 'group-hover:border-blue-600';
  const scrollDotHoverColor = darkMode ? 'group-hover:bg-cyan-500' : 'group-hover:bg-blue-600';

  return (
    <section
      className={`font-poppins relative w-full min-h-screen p-4 flex items-center justify-center overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-[#0F172A] via-[#0C1221] to-[#070B15] text-gray-100'
          : 'bg-gradient-to-br from-[#E0F7FA] via-[#B2EBF2] to-[#80DEEA] text-gray-900'
      }`}
      id="home"
    >
      <motion.div
        style={{
          y: isMounted && !isMobile ? heroTextY : 0,
          opacity: isMounted && !isMobile ? heroOpacity : 1,
        }}
        className="text-center w-full max-w-7xl z-10 px-4 md:px-8 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span
            className={`font-poppins inline-block px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-md tracking-wide ${roleBgColor} ${roleTextColor}`}
          >
            {personalInfo.role}
          </span>
        </motion.div>

        <h1 className="font-poppins w-full font-bold mb-10 leading-tight md:leading-none flex flex-col items-center justify-center tracking-tight">
          <BlurText
            text="Hello, I am "
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {}}
            className={`justify-center text-4xl md:text-6xl lg:text-7xl ${baseTextColor} mb-2`}
          />
          <BlurText
            text={personalInfo.name}
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {}}
            className={`justify-center text-7xl md:text-9xl lg:text-[10rem] w-full ${nameColor} font-righteous [text-shadow:_0_2px_15px_var(--tw-shadow-color)] ${
              darkMode ? 'shadow-cyan-500/30' : 'shadow-blue-500/30'
            }`}
          />
        </h1>
      </motion.div>

      <motion.div
        style={{ y: isMounted && !isMobile ? backgroundY : 0 }}
        className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      >
        <div
          className={`absolute inset-0 ${darkMode ? 'opacity-15' : 'opacity-10'}`}
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600 blur-3xl opacity-25"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-cyan-700 blur-3xl opacity-20 animate-pulse delay-500"></div>

        {isMounted && !isMobile && (
          <>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-1/3 right-1/4 w-24 h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 opacity-20 shadow-xl"
            />
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, -5, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-cyan-500 opacity-20 shadow-xl"
            />
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -3, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              className="absolute top-1/2 right-1/3 w-16 h-16 rounded-lg bg-gradient-to-tr from-cyan-300 to-cyan-400 opacity-20 shadow-xl"
            />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
              className="absolute bottom-1/2 left-1/3 w-12 h-12 rounded-full bg-gradient-to-bl from-cyan-500 to-cyan-700 opacity-10 shadow-lg"
            />
          </>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-[50px] md:bottom-[70px] left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span
            className={`font-poppins text-sm mb-2 ${scrollHoverColor} transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Scroll Down
          </span>
          <div
            className={`w-6 h-10 border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'} ${scrollBorderHoverColor} rounded-full flex justify-center pt-2 transition-colors duration-300`}
          >
            <motion.div
              animate={{ y: [2, 6, 2] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
              className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-blue-500'} ${scrollDotHoverColor} transition-colors duration-300`}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
