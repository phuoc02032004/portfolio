import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import me from '../../assets/images/toi.png'

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Create scroll-linked animations based on this section's position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });
  
  // Adjust animation thresholds for better visibility
  const opacity = useTransform(scrollYProgress, 
    [0, isMobile ? 0.15 : 0.3], 
    [0.3, 1]
  );
  const scale = useTransform(scrollYProgress, 
    [0, isMobile ? 0.2 : 0.4], 
    [0.95, 1]
  );
  const y = useTransform(scrollYProgress, 
    [0, isMobile ? 0.2 : 0.4], 
    [30, 0]
  );
  
  return (
    <motion.section 
      id="about"
      ref={sectionRef}
      style={{ opacity, scale, y }}
      className={`min-h-screen flex items-center justify-center w-full font-poppins ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto relative z-10 py-16 md:py-20 px-4 md:px-8 w-full">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`px-5 py-2 rounded-full text-sm font-medium mb-5 shadow-md ${darkMode ? 'bg-blue-900/60 text-blue-200' : 'bg-blue-100 text-blue-600'}`}
          >
            About Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center mb-5"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-center max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Passionate Web Developer creating exceptional web experiences through modern technologies and creative solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl mx-auto w-full max-w-md md:max-w-full"
          >
            <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-tr from-blue-900/40 to-purple-900/40' : 'bg-gradient-to-tr from-blue-500/30 to-purple-500/30'} rounded-2xl`}></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-3">
              <div className={`w-full h-full rounded-2xl overflow-hidden relative ${darkMode ? 'shadow-lg shadow-blue-900/20' : 'shadow-lg shadow-blue-600/20'}`}>
                
                <Image 
                  src={me} 
                  alt={personalInfo.name} 
                  fill
                  sizes="(max-width: 768px) 320px, 360px"
                  priority
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 md:w-24 h-20 md:h-24 rounded-lg border-4 border-blue-500/20 rotate-12"></div>
            <div className="absolute -bottom-6 -right-6 w-24 md:w-28 h-24 md:h-28 rounded-full border-4 border-purple-500/20 -rotate-6"></div>
            <div className="absolute bottom-20 -left-6 w-12 md:w-16 h-12 md:h-16 rounded-md border-4 border-green-500/20 rotate-45"></div>
            <div className="absolute top-32 -right-6 w-16 md:w-20 h-16 md:h-20 rounded-3xl border-4 border-yellow-500/20 -rotate-12"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 md:space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Web Developer</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 md:mb-6 text-base md:text-lg leading-relaxed`}>
              {personalInfo.bio}
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 md:mb-8 text-base md:text-lg leading-relaxed`}>
              {personalInfo.bioExtended}
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8"
            >
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium shadow-md ${
                    darkMode ? 'bg-gray-800 text-blue-300 border border-blue-900/50' : 'bg-blue-50 text-blue-700 border border-blue-100'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 font-medium hover:underline ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                <span>View my resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b ${darkMode ? 'from-blue-900/20' : 'from-blue-100'} to-transparent opacity-30 blur-3xl`}></div>
      <div className={`absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t ${darkMode ? 'from-purple-900/20' : 'from-purple-100'} to-transparent opacity-30 blur-3xl`}></div>
      <div className="absolute left-1/2 top-1/4 w-32 h-32 bg-gradient-to-tl from-yellow-200 to-yellow-100 opacity-10 rounded-full blur-3xl"></div>
    </motion.section>
  );
} 