import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';

const ManegerUser = () => {
    const {user}=useContext(AuthContext)
    const [course,setCourse]=useState([])
      useEffect(() => {
        if (email) {
            fetch(`http://localhost:3000/course/${email}`)
                .then(res => res.json())
                .then(data => {
                    setCourse(data);
                    console.log('data is', data);
                });
        }
    }, [email]);
    return (
        <div>
            
        </div>
    );
};

export default ManegerUser;