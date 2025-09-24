import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Rocket, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Building stellar web experiences across the digital universe";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative mx-auto mb-8 w-48 h-48"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/25">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTg2NzgxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Astronaut Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-pulse"></div>
          <div className="absolute -inset-2 rounded-full border border-blue-400/20 animate-spin" style={{ animationDuration: '8s' }}></div>
          
          {/* Floating icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -right-4"
          >
            <Rocket className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-4 -left-4"
          >
            <Sparkles className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-6xl mb-2 bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            Alex Cosmos
          </h1>
          <h2 className="text-2xl text-gray-300 tracking-wide">
            Frontend Developer
          </h2>
        </motion.div>

        {/* Typing effect intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {displayText}
            <span className="animate-pulse text-purple-400">|</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-purple-500/50 text-purple-300 rounded-full hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}