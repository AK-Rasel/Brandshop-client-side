
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



const googleAuthProvider = new GoogleAuthProvider();
export const AuthContextProvider = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
// google
    const googleLogin = () => {
        
        return signInWithPopup(auth, googleAuthProvider)
    }
    // register
    //  Create register
    const createRegister = (email,password) => {
        // setReload(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const login = (email,password) => {
        // setReload(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // ?logOut
    const logOut = () => {
        
        return signOut(auth)
    }

//    
useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        
        setUser(currentUser)
    });
    return () => unsubscribe()
},[])
    const AuthInfo = {
        user,
        googleLogin,
        createRegister,
        login,
        logOut,
        // reload,
    }
    return (
        <AuthContextProvider.Provider value={AuthInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthProvider;