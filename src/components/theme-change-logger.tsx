"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { setCookie } from "@/lib/cookies";

const ThemeChangeLogger = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCookie("theme", `${theme}`);
      // document.cookie = `theme=${theme};path=/;max-age=31536000`; // Persist for 1 year
    }
  }, [theme]);

  return null; // This component doesn't render anything, it just listens
};

export default ThemeChangeLogger;
