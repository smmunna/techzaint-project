import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User creating;
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User;
  const updateUser = (currentUser, name) => {
    return updateProfile(currentUser, {
      displayName: name
    });
  };
  // Login User;
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout for all
  const logOut = () => {
    return signOut(auth);
  };

  // Store the Signin user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // jwt sign in to the local storage;
      if (currentUser) {
        const loggedUser = { email: currentUser.email }
        fetch(`${import.meta.env.VITE_LOCAL_SERVER}/login`, {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedUser)
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            localStorage.setItem('access-token', data.token)
          })
          .catch(error => {
            console.log(error.message)
          })
      }
      else {
        localStorage.removeItem('access-token')
      }


    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    signInUser,
    updateUser,
    logOut,
    user,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
