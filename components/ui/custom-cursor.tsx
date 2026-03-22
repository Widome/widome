'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springCfg = { stiffness: 300, damping: 26 };
  const springX = useSpring(0, springCfg);
  const springY = useSpring(0, springCfg);
  const trailX = useSpring(0, { stiffness: 90, damping: 20 });
  const trailY = useSpring(0, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const touch = window.matchMedia('(hover: none)').matches || window.innerWidth < 1024;
    setIsTouch(touch);
    if (touch) return;

    const move = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(!!el.closest('a, button, [role="button"], input, textarea, select'));
    };
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.documentElement.addEventListener('mouseleave', leave);
    document.documentElement.addEventListener('mouseenter', enter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
      document.documentElement.removeEventListener('mouseenter', enter);
    };
  }, [visible, springX, springY, trailX, trailY]);

  if (isTouch) return null;

  return (
    <>
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isHovering ? 40 : 28,
            height: isHovering ? 40 : 28,
            opacity: visible ? 1 : 0,
            borderColor: isHovering ? '#45C1F5' : 'rgba(20,24,31,0.3)',
          }}
          transition={{ duration: 0.25 }}
          className="rounded-full border-2"
        />
      </motion.div>

      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            width: isClicking ? 5 : isHovering ? 8 : 6,
            height: isClicking ? 5 : isHovering ? 8 : 6,
            backgroundColor: isHovering ? '#45C1F5' : '#1A2035',
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.12 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}
