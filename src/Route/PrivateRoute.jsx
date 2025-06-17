import React, { useContext } from 'react';
;
import { Navigate } from 'react-router';

import { AuthContext } from '../Provider.jsx/AuthProvider';
import Loader from '../Component/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return (
             <Loader></Loader>
        )
    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;