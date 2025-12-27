// Source - https://stackoverflow.com/a
// Posted by Ansh
// Retrieved 2025-12-27, License - CC BY-SA 4.0

"use client";
import { useState, useEffect } from "react";

import { ThemeProvider } from "next-themes";
import ThemeChangeLogger from "@/components/theme-change-logger";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // Render children without ThemeProvider during SSR
  }

  return (
    <ThemeProvider
      attribute="class"
      // defaultTheme="dark"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      {/* Include the listener component */}
      <ThemeChangeLogger />
    </ThemeProvider>
  ); // Wrap children with ThemeProvider after mount
}
