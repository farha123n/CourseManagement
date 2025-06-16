import React from 'react';
import Nav from './Component/Nav';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Nav></Nav>
             <ToastContainer autoClose={3000} />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;