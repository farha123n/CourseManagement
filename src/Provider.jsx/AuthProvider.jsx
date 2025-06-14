import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Info = {
        user,
        loading,
        setUser, // optional, if you need to update user elsewhere
        setLoading // optional
    };

    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;