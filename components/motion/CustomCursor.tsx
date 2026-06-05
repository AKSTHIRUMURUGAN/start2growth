// components/motion/CustomCursor.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.body.classList.add("custom-cursor-active");
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Move glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Track hoverable elements
    const handleElementHover = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Attach hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [data-cursor-hover]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementHover);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    // Observe DOM changes for new interactive elements
    const observer = new MutationObserver(() => {
      const newInteractive = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, [data-cursor-hover]'
      );
      newInteractive.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[9998] transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(212,168,83,0.02) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isClicking ? 28 : isHovering ? 48 : 32,
          height: isClicking ? 28 : isHovering ? 48 : 32,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border"
          animate={{
            borderColor: isHovering
              ? "rgba(212,168,83,0.6)"
              : "rgba(212,168,83,0.3)",
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{ duration: 0.25 }}
        />
        {/* Inner dot */}
        <motion.div
          className="rounded-full"
          animate={{
            width: isClicking ? 4 : isHovering ? 6 : 5,
            height: isClicking ? 4 : isHovering ? 6 : 5,
            backgroundColor: isHovering
              ? "rgba(212,168,83,0.9)"
              : "rgba(212,168,83,0.6)",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}