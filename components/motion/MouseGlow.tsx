"use client";

import { useRef, useEffect } from "react";

interface MouseGlowProps {
  /** Glow color — default gold */
  color?: string;
  /** Glow radius in px — default 400 */
  size?: number;
  /** Opacity — default 0.06 */
  opacity?: number;
  className?: string;
}

/**
 * A div that tracks the mouse within its parent and shows
 * a soft radial gradient spotlight. Attach to any section.
 * GPU-accelerated via translate3d, no re-renders on move.
 */
export default function MouseGlow({
  color = "212,168,83",
  size = 400,
  opacity = 0.07,
  className,
}: MouseGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current?.parentElement;
    if (!parent) return;

    // Only run on fine-pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      glowRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [size]);

  return (
    <div ref={parentRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`} aria-hidden>
      <div
        ref={glowRef}
        className="absolute rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          width: size,
          height: size,
          opacity: 0,
          background: `radial-gradient(circle, rgba(${color},${opacity}) 0%, transparent 70%)`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
