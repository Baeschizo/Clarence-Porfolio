import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  document.body.classList.toggle("dark", darkMode);

  return () => {
    document.body.classList.remove("dark");
  };
}, [darkMode]);

 return (
  <button 
    type="button"
    className="theme-toggle"
    onClick={() => setDarkMode(!darkMode)}
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    {darkMode ? <FiMoon /> : <FiSun />}
    <span>{darkMode ? "Dark" : "Light"}</span>
  </button>
);
}

export default ThemeToggle;