import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setUser(localStorage.getItem('email'))
    },[])

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
