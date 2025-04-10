"use client";

import React, { useEffect, useState } from "react";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";

const FullScreenWhiteOverlay = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-[50] flex items-center justify-center transition-transform duration-500 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <CircularText
        text="NGUYEN*HONG*PHUOC*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
    </div>
  );
};

export default FullScreenWhiteOverlay;
