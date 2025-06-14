import React from 'react';
import Nav from './Component/Nav';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;