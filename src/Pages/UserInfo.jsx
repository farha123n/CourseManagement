import React, { useContext } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';

const UserInfo = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='bg-red-600'>
            <p className='text-white'>My name : <span className='text-sky-600'>{user.displayName}</span></p>
            <p className='text-shadow-white'>my email {user.email}</p>
        </div>
    );
};

export default UserInfo;