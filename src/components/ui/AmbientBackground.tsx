"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: Math.max(window.innerWidth, document.documentElement.clientWidth),
        height: Math.max(window.innerHeight, document.documentElement.clientHeight),
      });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    // Pause WebGL when tab is hidden to save GPU/battery
    const handleVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setVisible(false);
    const handleMotion = (e: MediaQueryListEvent) => setVisible(!e.matches);
    mq.addEventListener("change", handleMotion);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      document.removeEventListener("visibilitychange", handleVisibility);
      mq.removeEventListener("change", handleMotion);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ width: '100vw', height: '100dvh', top: 0, left: 0 }}>
      {visible && (
        <MeshGradient
          width={dimensions.width}
          height={dimensions.height}
          colors={[
            "#0a1628",
            "#132040",
            "#1a3058",
            "#0d1f3c",
            "#162d50",
            "#0f2440",
          ]}
          distortion={0.4}
          swirl={0.3}
          grainMixer={0}
          grainOverlay={0}
          speed={0.15}
          offsetX={0.05}
        />
      )}
      {/* Dark veil for readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
