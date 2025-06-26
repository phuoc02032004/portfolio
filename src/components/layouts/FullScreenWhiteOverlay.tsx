"use client";

import { motion, animate } from "framer-motion"; 
import React, { useEffect, useRef } from "react";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";

const FullScreenWhiteOverlay = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    setTimeout(() => { 
      const animation = animate(
        overlayRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          duration: 0.5,
          ease: "easeOut",
        }
      );
      return () => animation.stop();
    }, 2000); 
  }, []);

  return (
    
    <motion.div
      ref={overlayRef} 
      className="fixed top-0 left-0 w-full h-full bg-black z-[50] flex items-center justify-center"
      initial={{ clipPath: "inset(0 0 0 0)" }}
    >
        <CircularText
        text="NGUYEN*HONG*PHUOC*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </motion.div>
   
  );
};

export default FullScreenWhiteOverlay;