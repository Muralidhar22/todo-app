import { useContext } from "react";
import { DarkThemeContext } from "../contexts/darkTheme.context"; 
import {ReactComponent as ThemeIconSun} from "../images/icon-sun.svg";
import {ReactComponent as ThemeIconMoon} from "../images/icon-moon.svg";


function Header(){
    const { darkTheme, setDarkTheme } = useContext(DarkThemeContext)

    return(
        <header>
            <h1 className="header-title">TODO</h1>
            <button className="theme-change-btn" onClick={() => setDarkTheme(!darkTheme)}>
                {
                    darkTheme ?
                    <ThemeIconMoon /> :
                    <ThemeIconSun />
                }
            </button>
        </header>
    )
}

export default Header;