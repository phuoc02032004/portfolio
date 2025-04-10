"use client";

import React, { useEffect, useState } from "react";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";

const FullScreenWhiteOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setAnimateOut(true); // chạy animation ra ngoài
    }, 2000);

    const removeTimer = setTimeout(() => {
      setVisible(false); // unmount khỏi DOM
    }, 2500); // chờ animation hoàn tất

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-[50] flex items-center justify-center transition-transform duration-500 ease-out ${
        animateOut ? "-translate-y-full" : "translate-y-0"
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
