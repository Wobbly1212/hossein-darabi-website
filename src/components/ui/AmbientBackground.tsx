"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: Math.max(window.innerWidth, document.documentElement.clientWidth),
        height: Math.max(window.innerHeight, document.documentElement.clientHeight, window.screen.height),
      });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed z-0 overflow-hidden" style={{ top: '-env(safe-area-inset-top, 0px)', left: 0, right: 0, bottom: 0, width: '100vw', height: 'calc(100dvh + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px))' }}>
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
      {/* Dark veil for readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
