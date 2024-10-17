// src/themes/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext({
    theme: lightTheme,
    toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false); // Commence par le thème clair par défaut

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const theme = useMemo(() => isDark ? darkTheme : lightTheme, [isDark]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
