import React from 'react';
import { useTheme } from '../providers/ThemeContext';  // Import the custom hook

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch cursor-pointer" onClick={toggleTheme}>
      <div className={`switch ${theme === 'dark-theme' ? 'bg-blue-500' : 'bg-gray-300'} w-12 h-6 rounded-full relative`}>
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md absolute top-0 transform transition-transform duration-300 ${
            theme === 'dark-theme' ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
