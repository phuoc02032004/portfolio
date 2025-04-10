/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useRef, useEffect, useState } from 'react';
import {
  useSprings,
  animated,
  easings,
  // Import necessary types for better clarity and correctness
  type UseSpringProps,
  type SpringValue,
  type AnimationResult
} from '@react-spring/web';

// Explicitly type AnimatedSpan using React.FC and HTMLAttributes
// Use React.CSSProperties for the style prop
type AnimatedStyle = React.CSSProperties;
const AnimatedSpan: React.FC<React.HTMLAttributes<HTMLSpanElement> & { style?: AnimatedStyle }> = animated.span;

// Correct type for the 'next' function used in async 'to' updates
// It accepts the target state object and returns a promise resolving with animation results
type SpringNextFn = (props: Partial<AnimatedStyle>) => Promise<AnimationResult<SpringValue<AnimatedStyle>>>;


interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimatedStyle;
  animationTo?: AnimatedStyle[];
  // Keep the prop type flexible
  easing?: keyof typeof easings | ((t: number) => number);
  onAnimationComplete?: () => void;
}

// Helper function to safely get the correct easing function type
const getEasingFunction = (
    input: keyof typeof easings | ((t: number) => number) | undefined
  ): ((t: number) => number) => {
    if (typeof input === 'function') {
      return input;
    }
    if (typeof input === 'string' && typeof easings[input] === 'function') {
      // Assert that the lookup result is the correct function type
      return easings[input] as (t: number) => number;
    }
    // Default fallback if input is invalid or undefined
    return easings.linear;
};


const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  const defaultFrom: AnimatedStyle = direction === 'top'
    ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
    : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo: AnimatedStyle[] = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  // Define the expected shape of the spring configuration object
  // Use UseSpringProps with the specific style type
  type SpringConfig = UseSpringProps<AnimatedStyle>;

  const springs = useSprings<SpringConfig>( // Apply the type argument to useSprings
    elements.length,
    elements.map((_, i): SpringConfig => ({ // Apply the return type to the map callback
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next: SpringNextFn) => { // Use corrected SpringNextFn type
            // Ensure 'step' is compatible with Partial<AnimatedStyle>
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      // Use the helper function to ensure the correct easing function type
      config: { easing: getEasingFunction(easing) },
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {springs.map((styleProps, index) => (
        <AnimatedSpan
          key={`${elements[index]}-${index}`}
          // Cast is still generally needed as styleProps contains SpringValue objects
          style={styleProps as unknown as AnimatedStyle} // Use 'unknown as AnimatedStyle' for slightly safer cast
          className="inline-block will-change-[transform,filter,opacity]"
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </AnimatedSpan>
      ))}
    </p>
  );
};

export default BlurText;