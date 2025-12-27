"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-9 rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

// function ThemeToggle({ initialValue }: { initialValue: string }) {
//   // const { theme, setTheme } = useTheme();
//   const [theme, setTheme] = useState(initialValue);

//   useEffect(() => {
//     // Sync the theme to the DOM attribute and cookie whenever it changes
//     document.documentElement.setAttribute("data-theme", theme || "light");
//     document.cookie = `theme=${theme};path=/;max-age=31536000`; // Persist for 1 year
//     // theme && setNextTheme(theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   return (
//     <button onClick={toggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
//   );
// }

// // Export a wrapper to pass initial theme from server
// export default function ThemeToggleWrapper() {
//   const [initialTheme, setInitialTheme] = useState("light"); // Default client state

//   // This useEffect runs only on the client
//   useEffect(() => {
//     // Read initial theme from document attribute set by the server
//     const initial = document.documentElement.getAttribute("data-theme");
//     if (initial) {
//       setInitialTheme(initial);
//     }
//   }, []);

//   return <ThemeToggle initialValue={initialTheme} />;
// }
