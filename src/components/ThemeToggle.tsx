import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label="Alternar tema"
    >
      {darkMode ? <HiSun /> : <HiMoon />}
    </button>
  );
}