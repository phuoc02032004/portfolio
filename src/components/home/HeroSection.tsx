import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/personalInfo";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";

interface HeroSectionProps {
  darkMode: boolean;
  isMobile?: boolean;
}

export default function HeroSection({ darkMode }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 250]);
  const heroTextY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAnimationComplete = () => {
  };

  // Màu sắc
  const baseTextColor = darkMode ? 'text-gray-200' : 'text-gray-800';
  // Màu gốc cho tên - Giữ nguyên để làm màu chữ chính
  const nameColor = darkMode ? 'text-cyan-400' : 'text-blue-600';
  // Màu HEX tương ứng để dùng trong text-shadow (Cần khớp với màu Tailwind)

  const roleTextColor = darkMode ? 'text-cyan-300' : 'text-blue-700';
  const roleBgColor = darkMode ? 'bg-cyan-900/40 border border-cyan-700/30' : 'bg-blue-100/80';
  const scrollHoverColor = darkMode ? 'group-hover:text-cyan-400' : 'group-hover:text-blue-600';
  const scrollBorderHoverColor = darkMode ? 'group-hover:border-cyan-500' : 'group-hover:border-blue-600';
  const scrollDotHoverColor = darkMode ? 'group-hover:bg-cyan-500' : 'group-hover:bg-blue-600';

  return (
    <section
      // Gradient nền phức tạp hơn, text color cơ bản
      className={`font-poppins relative w-full min-h-screen p-4 flex items-center justify-center overflow-hidden ${darkMode ? 'bg-gradient-to-br from-[#0F172A] via-[#0C1221] to-[#070B15] text-gray-100' : 'bg-gradient-to-br from-[#E0F7FA] via-[#B2EBF2] to-[#80DEEA] text-gray-900'}`}
      id="home"
    >
      <motion.div
        style={{
          y: isMounted ? heroTextY : 0,
          opacity: isMounted ? heroOpacity : 1,
        }}
        className="text-center w-full max-w-7xl z-10 px-4 md:px-8 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className={`font-poppins inline-block px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-md tracking-wide ${roleBgColor} ${roleTextColor}`}>
            {personalInfo.role}
          </span>
        </motion.div>

        <h1 className={`font-poppins w-full font-bold mb-10 leading-tight md:leading-none flex flex-col items-center justify-center tracking-tight`}>
           <BlurText
            text={`Hello, I am `}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className={`justify-center text-4xl md:text-6xl lg:text-7xl ${baseTextColor} mb-2`}
          />
          {' '}
          <BlurText
            text={personalInfo.name}
            delay={250} // Giảm delay chút cho liền mạch
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            // Tăng size chữ, thêm drop-shadow
            className={`justify-center text-7xl md:text-9xl lg:text-[10rem] w-full ${nameColor} font-righteous [text-shadow:_0_2px_15px_var(--tw-shadow-color)] ${darkMode ? 'shadow-cyan-500/30' : 'shadow-blue-500/30'}`} // Drop shadow tùy chỉnh nhẹ
          />
        </h1>
      </motion.div>

      {/* Container Hiệu ứng Background */}
      <motion.div
        style={{ y: isMounted ? backgroundY : 0 }}
        className="absolute inset-0 z-0 w-full h-full overflow-hidden"
      >
        {/* ... (Giữ nguyên các element background) ... */}
        <video
          src="/videos/blackhole.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[50px] md:bottom-[70px] left-1/2 transform -translate-x-1/2 z-20"
      >
        {/* ... (Giữ nguyên scroll down indicator) ... */}
         <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="flex flex-col items-center group cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className={`font-poppins text-sm mb-2 ${scrollHoverColor} transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Scroll Down
          </span>
          <div className={`w-6 h-10 border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'} ${scrollBorderHoverColor} rounded-full flex justify-center pt-2 transition-colors duration-300`}>
            <motion.div
              animate={{ y: [2, 8, 2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
              className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-gray-500' : 'bg-gray-500'} ${scrollDotHoverColor} transition-colors duration-300`}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}