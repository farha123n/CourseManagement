import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [course,setCourse]=useState([])
    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
          setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (update) => {
          setLoading(true)
        return updateProfile(auth.currentUser, update)
    }
     const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
    const logOut = () => {
          setLoading(true)
        return signOut(auth)
    }
   
    const Info = {
        user,
        loading,
        setUser, // optional, if you need to update user elsewhere
        setLoading, // optional
        createUser,
        updateUser, logIn, logOut,
        course,setCourse,alreadyEnrolled, setAlreadyEnrolled,googleSignIn
    };

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;