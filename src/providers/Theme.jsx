import { createContext, useContext, useState } from "react";

// Creating the context with a default theme of light
export const ThemeContext = createContext({
    themeMode: "light", 
    toggleTheme: () => {}
});

// Theme Provider component to provide theme context
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);  // Update the theme on the root element
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme() {
  return useContext(ThemeContext);
}
