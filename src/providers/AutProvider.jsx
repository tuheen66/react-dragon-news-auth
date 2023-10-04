/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null) // creating context

const auth = getAuth(app) // getting app from firebase config file

const AuthProvider = ({ children }) => {    // children used as props

    const [user, setUser] = useState(null)  // creating a state

    const [loading, setLoading] = useState(true) // to prevent redirecting to login page while already logged in when we reload

    const createUser = (email, password) => {   // create user function will get email and password from firebase
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password) // returning auth, email and password 
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the current state changed', currentUser)
            setUser(currentUser)
            setLoading(false) // setting loading to false after loading
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {

        user,
        loading,
        createUser,  // sending all three info auth, email and password to register component
        signIn,
        logOut
    }

    return (
        // this will carry all info to every where through context 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider