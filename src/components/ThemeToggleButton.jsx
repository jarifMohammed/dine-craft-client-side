import React from 'react';
import useTheme from '../providers/Theme';

const ThemeToggleButton = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      {/* Sun Icon */}
      <span className="mr-3 text-yellow-500 dark:text-gray-400 transition-colors duration-300">
        🌞
      </span>

      {/* Toggle Input */}
      <input
        type="checkbox"
        checked={themeMode === 'dark'}
        onChange={toggleTheme}
        className="sr-only peer"
      />

      {/* Fancy Toggle Track */}
      <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-blue-500 transition-colors duration-300 shadow-inner">
        {/* Toggle Circle */}
        <div
          className={`w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md absolute top-1 left-1 transform transition-transform duration-300 ${
            themeMode === 'dark' ? 'translate-x-6' : ''
          }`}
        ></div>
      </div>

      {/* Moon Icon */}
      <span className="ml-3 text-gray-800 dark:text-yellow-500 transition-colors duration-300">
        🌙
      </span>
    </label>
  );
};

export default ThemeToggleButton;
