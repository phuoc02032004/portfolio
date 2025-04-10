import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/personalInfo";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";

interface HeroSectionProps {
  darkMode: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroTextY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAnimationComplete = () => {
    // Optional: Keep if needed for debugging or other logic
    // console.log('Animation completed!');
  };

  const baseTextColor = darkMode ? 'text-gray-100' : 'text-gray-900';
  const nameColor = darkMode ? 'text-blue-500' : 'text-blue-600';

  return (
    <section
      className={`font-poppins relative w-full min-h-screen p-4 flex items-center justify-center overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} ${baseTextColor}`}
      id="home"
    >
      <motion.div
        style={{
          y: isMounted ? heroTextY : 0,
          opacity: isMounted ? heroOpacity : 1,
        }}
        className="text-center max-w-4xl z-10 px-4 md:px-8 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className={`font-poppins inline-block px-5 py-2 rounded-full text-sm font-medium shadow-lg ${darkMode ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-600'}`}>
            {personalInfo.role}
          </span>
        </motion.div>

        <h1 className={`font-poppins text-5xl md:text-7xl font-bold mb-8 leading-tight flex flex-col items-center`}>
           <BlurText
            text={`Hello, I am `}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={`text-center inline-block align-baseline ${baseTextColor}`}
          />
          {' '}
          <BlurText
            text={personalInfo.name}
            delay={350}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={`inline-block align-baseline ${nameColor}`}
          />
          
        </h1>
      </motion.div>

      <motion.div
        style={{ y: isMounted ? backgroundY : 0 }}
        className="absolute inset-0 -z-10 w-full h-full overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-300 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-300 blur-3xl opacity-20"></div>
        <div className={`absolute inset-0 ${darkMode ? 'opacity-10' : 'opacity-5'}`}
          style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}>
        </div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 shadow-xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500 opacity-20 shadow-xl"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-lg bg-gradient-to-tr from-green-400 to-blue-500 opacity-20 shadow-xl"
        ></motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-[60px] md:bottom-[80px] left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className={`font-poppins text-sm mb-2 group-hover:${nameColor} transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Scroll Down</span>
          <div className={`w-6 h-10 border-2 ${darkMode ? 'border-gray-500 group-hover:border-blue-500' : 'border-gray-400 group-hover:border-blue-500'} rounded-full flex justify-center pt-2 transition-colors`}>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-gray-400 group-hover:bg-blue-500' : 'bg-gray-500 group-hover:bg-blue-500'} transition-colors`}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}