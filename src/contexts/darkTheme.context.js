import { createContext, useState } from "react";

export const DarkThemeContext = createContext({
    darkTheme: true,
    setDarkTheme: () => {}
})

export const DarkThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(true)
    const value = {
        darkTheme,
        setDarkTheme
    }

    return <DarkThemeContext.Provider value={value}>{children}</DarkThemeContext.Provider>
} 