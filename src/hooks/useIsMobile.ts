"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const check = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMobile(window.innerWidth < breakpoint), 100);
    };
    check();
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", check);
    };
  }, [breakpoint]);

  return isMobile;
}
