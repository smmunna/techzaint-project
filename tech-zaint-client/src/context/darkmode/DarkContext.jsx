import {useState } from "react";
import { createContext } from "react";

export const darkContext = createContext(null)
const DarkContext = ({children}) => {
    const [darkmode,setDarkmode] = useState(false)
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
