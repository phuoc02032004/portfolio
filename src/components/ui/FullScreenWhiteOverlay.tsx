"use client";

import { motion, animate } from "framer-motion"; // Import 'animate' instead of scroll hooks
import React, { useEffect, useRef } from "react"; // Import useRef and useEffect

const FullScreenWhiteOverlay = () => {
  const overlayRef = useRef(null); // Create a ref for the motion.div

  useEffect(() => {
    const animation = animate(
      overlayRef.current, // Target the motion.div using the ref
      { clipPath: "inset(0 0 100% 0)" }, // Animate clipPath to hide from top
      {
        duration: 0.7,
        ease: "easeOut",
      }
    );

    return () => animation.stop(); // Cleanup animation on unmount
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <motion.div
      ref={overlayRef} // Attach the ref to motion.div
      className="fixed top-0 left-0 w-full h-full bg-white z-[50]"
      initial={{ clipPath: "inset(0 0 0 0)" }} // Initial state: full screen
    />
  );
};

export default FullScreenWhiteOverlay;