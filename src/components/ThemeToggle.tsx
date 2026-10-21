
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
    >
      {darkMode ? <FiMoon /> : <FiSun />}
      <span>{darkMode ? "Dark" : "Light"}</span>
    </button>
  );
}

export default ThemeToggle;
