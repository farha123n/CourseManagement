import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
     }
     const updateUser=(update)=>{
      return updateProfile(auth.currentUser,update)
     }
      const logOut=()=>{
      return signOut(auth)
     }
    const Info = {
        user,
        loading,
        setUser, // optional, if you need to update user elsewhere
        setLoading, // optional
        createUser,
        updateUser,logIn,logOut
    };

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;