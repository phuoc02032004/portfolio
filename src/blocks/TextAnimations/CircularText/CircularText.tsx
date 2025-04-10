import React, { useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  radius?: number; // Bán kính của vòng tròn chữ (pixels)
}

// Helper function tạo transition quay
const getRotationTransition = (duration: number, loop: boolean = true) => ({
  ease: "linear",
  duration: duration,
  repeat: loop ? Infinity : 0,
});

// Helper function bắt đầu/tiếp tục animation quay
const startRotation = (
  controls: AnimationControls,
  duration: number,
  currentScale: number = 1 // Giữ scale hiện tại khi chỉ thay đổi tốc độ quay
) => {
  controls.start({
    rotate: 360, // Luôn quay tới 360 độ từ vị trí hiện tại
    scale: currentScale, // Duy trì scale
    transition: {
      rotate: getRotationTransition(duration, true),
      // Không cần transition cho scale ở đây trừ khi thay đổi scale
    },
  });
};

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover,
  className = "",
  radius = 80, // Sử dụng prop radius
}) => {
  const letters = Array.from(text);
  const numLetters = letters.length;
  const controls = useAnimation();

  // Bắt đầu animation ban đầu
  useEffect(() => {
    startRotation(controls, spinDuration);
    // Cleanup: Dừng animation khi component unmount
    return () => {
      controls.stop();
    };
    // Phụ thuộc vào spinDuration và text (nếu text thay đổi, cần render lại vị trí chữ)
  }, [spinDuration, text, controls]);

  const handleHoverStart = async () => {
    if (!onHover) return;

    // Lấy trạng thái scale hiện tại trước khi dừng (quan trọng cho resume)
    // Framer Motion không cung cấp cách dễ dàng để lấy giá trị động hiện tại
    // một cách đáng tin cậy mà không dùng onUpdate.
    // Cách đơn giản hơn là giả định scale là 1 trừ khi đang 'goBonkers'.
    // Hoặc chúng ta có thể quản lý state cho scale nếu cần chính xác hơn.

    controls.stop(); // Dừng animation hiện tại

    switch (onHover) {
      case "slowDown":
        startRotation(controls, spinDuration * 2);
        break;
      case "speedUp":
        startRotation(controls, spinDuration / 4);
        break;
      case "pause":
        // Đã dừng ở trên, không cần làm gì thêm
        // Có thể thêm hiệu ứng nhẹ khi pause nếu muốn
        controls.start({ scale: 1.05, transition: { duration: 0.1 } }); // Ví dụ: phóng to nhẹ
        break;
      case "goBonkers":
        controls.start({
          rotate: 360,
          scale: 0.8, // Giảm scale
          transition: {
            rotate: getRotationTransition(spinDuration / 10, true), // Quay rất nhanh
            scale: {
              // Làm scale nhấp nháy
              repeat: Infinity,
              repeatType: "mirror",
              duration: spinDuration / 20, // Tốc độ nhấp nháy
            },
          },
        });
        break;
      default:
        startRotation(controls, spinDuration); // Quay lại mặc định nếu có case lạ
        break;
    }
  };

  const handleHoverEnd = () => {
    if (!onHover) return;

    controls.stop(); // Dừng animation hover

    // Khởi động lại animation mặc định, đảm bảo scale về 1
    controls.start({
        scale: 1, // Đảm bảo scale trở về 1
        rotate: 360, // Cần thiết để khởi động lại vòng quay
        transition: {
            scale: { duration: 0.2, ease: "easeOut" }, // Chuyển scale mượt mà
            rotate: getRotationTransition(spinDuration, true) // Quay tốc độ mặc định
        }
    });
  };

  return (
    <motion.div
      // Kích thước container nên đủ lớn để chứa vòng tròn chữ
      // Ví dụ: width/height >= radius * 2 + kích thước chữ
      className={`relative mx-auto flex justify-center items-center rounded-full w-[200px] h-[200px] cursor-pointer ${className}`}
      style={{ touchAction: 'none' }} // Có thể cần cho thiết bị cảm ứng
      animate={controls}
      // Chỉ thêm listener nếu onHover có giá trị
      onHoverStart={onHover ? handleHoverStart : undefined}
      onHoverEnd={onHover ? handleHoverEnd : undefined}
      // Có thể dùng onMouseEnter/Leave nếu không cần các tính năng phức tạp của onHoverStart/End
      // onMouseEnter={onHover ? handleHoverStart : undefined}
      // onMouseLeave={onHover ? handleHoverEnd : undefined}
    >
      {/* Container tĩnh cho các chữ cái, tâm của nó trùng với tâm motion.div */}
      <div className="absolute w-0 h-0">
        {letters.map((letter, i) => {
          const angleDeg = (i / numLetters) * 360;
          const angleRad = (i / numLetters) * (2 * Math.PI);

          // Tính toán vị trí trên đường tròn
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          // Transform để định vị và xoay chữ cái
          // translateX/Y(-50%) để căn giữa chữ cái tại điểm (x, y)
          // rotateZ để xoay chữ cái hướng ra ngoài
          const transform = `translateX(-50%) translateY(-50%) translateX(${x.toFixed(
            2
          )}px) translateY(${y.toFixed(2)}px) rotateZ(${angleDeg.toFixed(
            2
          )}deg)`;

          return (
            <span
              key={i}
              className="absolute top-0 left-0 inline-block origin-center text-white font-black text-2xl" // Điều chỉnh style chữ nếu cần
              style={{
                transform: transform,
                WebkitTransform: transform, // Prefix cho trình duyệt cũ
              }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Thay dấu cách bằng non-breaking space */}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CircularText;