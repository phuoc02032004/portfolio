import React, { useEffect, useMemo } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  radius?: number;
}

// Tạo transition quay liên tục
const getRotationTransition = (duration: number, loop: boolean = true) => ({
  ease: "linear",
  duration,
  repeat: loop ? Infinity : 0,
});

// Khởi động quay với tốc độ và scale tùy chỉnh
const startRotation = (
  controls: AnimationControls,
  duration: number,
  scale: number = 1
) => {
  controls.start({
    rotate: 360,
    scale,
    transition: {
      rotate: getRotationTransition(duration),
    },
  });
};

const CircularText: React.FC<CircularTextProps> = ({
  text = "",
  spinDuration = 20,
  onHover,
  className = "",
  radius = 80,
}) => {
  const controls = useAnimation();

  // Khởi động quay khi mount
  useEffect(() => {
    startRotation(controls, spinDuration);
    return () => controls.stop();
  }, [spinDuration, text, controls]);

  // Hover actions
  const handleHoverStart = () => {
    if (!onHover) return;
    controls.stop();

    switch (onHover) {
      case "slowDown":
        startRotation(controls, spinDuration * 2);
        break;
      case "speedUp":
        startRotation(controls, spinDuration / 4);
        break;
      case "pause":
        controls.start({
          scale: 1.05,
          transition: { duration: 0.1 },
        });
        break;
      case "goBonkers":
        controls.start({
          rotate: 360,
          scale: 0.8,
          transition: {
            rotate: getRotationTransition(spinDuration / 10),
            scale: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: spinDuration / 20,
            },
          },
        });
        break;
      default:
        startRotation(controls, spinDuration);
        break;
    }
  };

  const handleHoverEnd = () => {
    if (!onHover) return;
    controls.stop();
    controls.start({
      rotate: 360,
      scale: 1,
      transition: {
        scale: { duration: 0.2, ease: "easeOut" },
        rotate: getRotationTransition(spinDuration),
      },
    });
  };

  // Memo hóa vị trí các chữ
  const letterElements = useMemo(() => {
    const letters = Array.from(text);
    const numLetters = letters.length;

    return letters.map((letter, i) => {
      const angleDeg = (i / numLetters) * 360;
      const angleRad = (angleDeg * Math.PI) / 180;
      const x = radius * Math.cos(angleRad);
      const y = radius * Math.sin(angleRad);

      const transform = `translateX(-50%) translateY(-50%) translateX(${x.toFixed(
        2
      )}px) translateY(${y.toFixed(2)}px) rotateZ(${angleDeg.toFixed(2)}deg)`;

      return (
        <span
          key={i}
          className="absolute top-0 left-0 inline-block origin-center text-white font-black text-2xl"
          style={{
            transform,
            WebkitTransform: transform,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      );
    });
  }, [text, radius]);

  return (
    <motion.div
      className={`relative mx-auto flex justify-center items-center rounded-full w-[200px] h-[200px] cursor-pointer ${className}`}
      style={{ touchAction: "none" }}
      animate={controls}
      onHoverStart={onHover ? handleHoverStart : undefined}
      onHoverEnd={onHover ? handleHoverEnd : undefined}
    >
      <div className="absolute w-0 h-0">
        {letterElements}
      </div>
    </motion.div>
  );
};

export default CircularText;
