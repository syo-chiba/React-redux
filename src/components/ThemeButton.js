import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeButton;
