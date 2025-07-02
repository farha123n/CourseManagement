import React from 'react';
import Nav from './Component/Nav';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Nav></Nav>
             <ToastContainer autoClose={3000} />
             <div className='pt-40 min-h-screen'>
                <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;