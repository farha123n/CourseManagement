import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';

const axiosInstance=axios.create({
    baseURL:'https://server-rho-lime-60.vercel.app//'
})
const useAxiosSecure = () => {
    const {user}=useContext(AuthContext)
    axiosInstance.interceptors.request.use(config=>{
        config.headers.Authorization=`Bearer ${user.accessToken}`
        return config
    })
    return axiosInstance
    
};

export default useAxiosSecure;