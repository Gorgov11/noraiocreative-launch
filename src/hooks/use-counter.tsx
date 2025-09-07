import { useState, useEffect, useRef } from 'react';

interface UseCounterOptions {
  end: number;
  duration?: number;
  startOnMount?: boolean;
  delay?: number;
}

export const useCounter = ({ 
  end, 
  duration = 2000, 
  startOnMount = false,
  delay = 0 
}: UseCounterOptions) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCount(0);
    
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };
    
    if (delay > 0) {
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      frameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, startOnMount, delay]);

  return { count, isAnimating, startAnimation };
};

export default useCounter;

