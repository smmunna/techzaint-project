import { useEffect } from "react";
import {useState } from "react";
import { createContext } from "react";

export const darkContext = createContext(null)
const DarkContext = ({children}) => {
    const initialDarkMode = localStorage.getItem('theme') === 'dark';
    const [darkmode,setDarkmode] = useState(initialDarkMode)

    useEffect(() => {
        // Set the theme preference in local storage
        localStorage.setItem('theme', darkmode ? 'dark' : 'light');
      }, [darkmode]);

    const darkmodestatus = {
        darkmode,
        setDarkmode
    }
    return (
        <darkContext.Provider value={darkmodestatus}>
           {children}
        </darkContext.Provider>
    );
}

export default DarkContext;
