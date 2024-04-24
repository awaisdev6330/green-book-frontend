import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useTheme();

  // Define the classes for dark and light modes
  const themeClass = isDarkMode ? 'dark:bg-gray-800 dark:text-white' : 'bg-white text-black';

  // Apply the classes to the wrapper div
  return <div className={themeClass}>{children}</div>;
};

export default ThemeWrapper;
