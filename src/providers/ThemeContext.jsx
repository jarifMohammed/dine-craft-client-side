import React, { createContext, useContext, useState, useEffect } from 'react';

// Creating the context to manage the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    // Check local storage for the theme preference
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);  // Save the theme to localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
