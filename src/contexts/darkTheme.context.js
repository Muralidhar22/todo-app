import { createContext, useEffect, useState } from "react";

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
    
    useEffect(() => {
        if(!darkTheme){
            document.documentElement.setAttribute("data-theme", "light");
        }
        else{
            document.documentElement.removeAttribute("data-theme")
        }
    }, [darkTheme])

    return <DarkThemeContext.Provider value={value}>{children}</DarkThemeContext.Provider>
} 