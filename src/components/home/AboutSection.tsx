import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import { useRef, useEffect, useState } from "react";
import me from '@/../public/assets/images/toi.png';
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

interface AboutSectionProps {
  darkMode: boolean;
}

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      style={{ opacity, scale, y }}
      className={`min-h-screen flex items-center justify-center w-full font-poppins py-24 md:py-32 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900'} relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 md:mb-20">
           <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-md tracking-wide ${darkMode ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/30' : 'bg-blue-100 text-blue-700'}`}
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
          >
            My Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-center max-w-3xl mx-auto text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Passionate Web Developer creating exceptional web experiences through modern technologies and creative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative aspect-square rounded-2xl overflow-hidden mx-auto w-full max-w-sm md:max-w-lg group cursor-grab p-2 md:p-3 ${darkMode ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/30 shadow-xl shadow-cyan-900/30' : 'bg-gradient-to-br from-white/70 to-blue-50/50 shadow-xl shadow-blue-400/30'} transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-500/40`}
          >
            <TiltedCard
              imageSrc={me.src}
              altText="Phuoc"
              captionText="Phước"
              imageHeight="200%"
              imageWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
             <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-400 dark:text-cyan-400">
              Frontend Developer
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg leading-relaxed`}>
              {personalInfo.bio}
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-base md:text-lg leading-relaxed`}>
              {personalInfo.bioExtended}
            </p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.08 }}
              className="flex flex-wrap gap-3"
            >
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Git'].map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm cursor-default ${
                    darkMode ? 'bg-gray-800 text-cyan-300 border border-gray-700' : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 font-semibold transition-colors duration-300 ${
                  darkMode
                    ? 'text-cyan-400 hover:text-cyan-300'
                    : 'text-blue-600 hover:text-blue-800'
                } group`}
              >
                <span>Get In Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

       <div className={`absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl ${darkMode ? 'from-cyan-900/15' : 'from-blue-100/60'} to-transparent opacity-50 blur-3xl -z-10`}></div>
      <div className={`absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr ${darkMode ? 'from-indigo-900/15' : 'from-purple-100/60'} to-transparent opacity-50 blur-3xl -z-10`}></div>
      <div className="absolute left-1/3 top-1/4 w-40 h-40 bg-gradient-to-br from-teal-200 to-cyan-100 opacity-5 dark:opacity-[0.03] rounded-full blur-3xl animate-pulse -z-10"></div>
    </motion.section>
  );
}