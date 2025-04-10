/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import { useEffect, useRef, useState,  } from 'react'; // Thêm useCallback nếu dùng giải pháp 2

interface TextPressureProps {
    text?: string;
    fontFamily?: string;
    fontUrl?: string;
    width?: boolean;
    weight?: boolean;
    italic?: boolean;
    alpha?: boolean;
    flex?: boolean;
    stroke?: boolean;
    scale?: boolean;
    textColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    className?: string;
    minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
    text = 'Compressa',
    fontFamily = 'Compressa VF',
    fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
    width = true,
    weight = true,
    italic = true,
    alpha = false,
    flex = true,
    stroke = false,
    scale = false,
    textColor = '#FFFFFF',
    strokeColor = '#FF0000',
    strokeWidth = 2,
    className = '',
    minFontSize = 24,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

    const mouseRef = useRef({ x: 0, y: 0 });
    const cursorRef = useRef({ x: 0, y: 0 });

    const [fontSize, setFontSize] = useState(minFontSize);
    const [scaleY, setScaleY] = useState(1);
    const [lineHeight, setLineHeight] = useState(1);

    // Tính chars ở đây để đảm bảo nó ổn định nếu text không thay đổi
    const chars = text.split('');

    const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    // useEffect cho mouse/touch move (không thay đổi)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorRef.current.x = e.clientX;
            cursorRef.current.y = e.clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            cursorRef.current.x = t.clientX;
            cursorRef.current.y = t.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        if (containerRef.current) {
            const { left, top, width: cWidth, height: cHeight } = containerRef.current.getBoundingClientRect(); // Đổi tên biến width/height
            mouseRef.current.x = left + cWidth / 2;
            mouseRef.current.y = top + cHeight / 2;
            cursorRef.current.x = mouseRef.current.x;
            cursorRef.current.y = mouseRef.current.y;
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []); // Không có phụ thuộc, chạy 1 lần khi mount

    // useEffect cho việc resize và set size ban đầu
    useEffect(() => {
        // === Định nghĩa setSize BÊN TRONG useEffect ===
        const setSize = () => {
            if (!containerRef.current || !titleRef.current) return;

            const { width: containerW, } = containerRef.current.getBoundingClientRect();

            // Sử dụng chars.length đã tính ở ngoài
            let newFontSize = containerW / (chars.length / 2);
            newFontSize = Math.max(newFontSize, minFontSize); // Sử dụng minFontSize từ props

            setFontSize(newFontSize);
            setScaleY(1); // Reset scaleY khi resize
            setLineHeight(1); // Reset lineHeight khi resize

            requestAnimationFrame(() => {
                // Kiểm tra lại ref bên trong requestAnimationFrame
                if (!titleRef.current || !containerRef.current) return;
                const textRect = titleRef.current.getBoundingClientRect();
                const currentContainerH = containerRef.current.getBoundingClientRect().height; // Lấy lại chiều cao container hiện tại

                // Sử dụng scale từ props
                if (scale && textRect.height > 0) {
                    const yRatio = currentContainerH / textRect.height;
                    setScaleY(yRatio);
                    setLineHeight(yRatio);
                }
            });
        };
        // ===========================================

        setSize(); // Gọi lần đầu
        window.addEventListener('resize', setSize); // Gắn listener

        // Hàm cleanup sẽ sử dụng đúng hàm setSize đã định nghĩa trong scope này
        return () => window.removeEventListener('resize', setSize);

        // Phụ thuộc: các giá trị từ props/state mà hàm setSize ĐỌC
        // containerRef và titleRef không cần vì thay đổi ref không trigger re-render
        // setFontSize, setScaleY, setLineHeight là ổn định (từ useState)
        // chars.length phụ thuộc vào 'text'
    }, [scale, text, minFontSize, chars.length]); // Thêm chars.length hoặc chỉ text là đủ


    // useEffect cho animation (không thay đổi nhiều, nhưng nên thêm phụ thuộc)
    useEffect(() => {
        let rafId: number;
        const animate = () => {
            mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
            mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

            if (titleRef.current) {
                const titleRect = titleRef.current.getBoundingClientRect();
                const maxDist = titleRect.width / 2;

                spansRef.current.forEach((span) => {
                    if (!span) return;

                    const rect = span.getBoundingClientRect();
                    const charCenter = {
                        x: rect.x + rect.width / 2,
                        y: rect.y + rect.height / 2,
                    };

                    const d = dist(mouseRef.current, charCenter);

                    const getAttr = (distance: number, minVal: number, maxVal: number) => {
                        if (maxDist <= 0) return minVal; // Tránh chia cho 0
                        const val = maxVal - Math.abs((maxVal * distance) / maxDist);
                        return Math.max(minVal, val + minVal); // Công thức gốc có vẻ lạ (val + minVal?), xem lại logic nếu cần
                                                               // Có thể ý là: Math.max(minVal, Math.min(maxVal, some_calculated_value))
                                                               // Hoặc đơn giản là: Math.max(minVal, val)
                    };

                    // Lấy giá trị từ props trong scope của useEffect này
                    const currentWidth = width;
                    const currentWeight = weight;
                    const currentItalic = italic;
                    const currentAlpha = alpha;

                    const wdth = currentWidth ? Math.floor(getAttr(d, 5, 200)) : 100;
                    const wght = currentWeight ? Math.floor(getAttr(d, 100, 900)) : 400;
                    const italVal = currentItalic ? getAttr(d, 0, 1).toFixed(2) : '0';
                    const alphaVal = currentAlpha ? getAttr(d, 0, 1).toFixed(2) : '1';

                    span.style.opacity = alphaVal;
                    span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
                });
            }

            rafId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(rafId);
        // Phụ thuộc: các props/state mà hàm animate ĐỌC
    }, [width, weight, italic, alpha]); // Thêm các props này làm phụ thuộc

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden bg-transparent"
        >
            {/* Đảm bảo fontUrl và fontFamily được escape đúng cách nếu có ký tự đặc biệt */}
            <style>{`
        @font-face {
          font-family: '${fontFamily.replace(/'/g, "\\'")}';
          src: url('${fontUrl.replace(/'/g, "\\'")}');
          font-style: normal;
        }
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

            <h1
                ref={titleRef}
                className={`text-pressure-title ${className} ${flex ? 'flex justify-between' : ''
                    } ${stroke ? 'stroke' : ''} uppercase text-center whitespace-nowrap`} // Thêm whitespace-nowrap để tính toán kích thước chuẩn hơn
                style={{
                    fontFamily,
                    fontSize: `${fontSize}px`, // Thêm đơn vị px
                    lineHeight,
                    transform: `scale(1, ${scaleY})`,
                    transformOrigin: 'center top',
                    margin: 0,
                    fontWeight: 100, // Nên dùng fontVariationSettings nếu font hỗ trợ
                    color: stroke ? undefined : textColor, // Chỉ set color nếu không stroke
                    // fontVariationSettings: `'wght' 100`, // Ví dụ nếu muốn set weight qua variation
                }}
            >
                {chars.map((char, i) => (
                    <span
                        key={`${char}-${i}`} // Key nên unique hơn chỉ là index
                        ref={(el) => { spansRef.current[i] = el; }}
                        data-char={char}
                        className="inline-block" // Quan trọng để các span nằm cạnh nhau
                        style={{
                            // Khởi tạo font variation settings ở đây nếu cần giá trị mặc định
                            fontVariationSettings: `'wght' 400, 'wdth' 100, 'ital' 0`,
                        }}
                    >
                        {/* Sử dụng {' '} để đảm bảo khoảng trắng được render nếu có */}
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default TextPressure;