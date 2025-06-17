import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import Table from '../Component/Table';

const ManegerUser = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [courses, setCourses] = useState([])
    useEffect(() => {
       
          if(user.email){
              fetch(`http://localhost:3000/course/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setCourses(data);
                    console.log('data is', data);
                });
          }
        
    },[user.email] );
    console.log(courses)
    return (
        <div>
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                
                                <th>Title</th>
                                <th>short description</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courses.map(course=><Table course={course} key={course._id}></Table>)
                            }
                          
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManegerUser;