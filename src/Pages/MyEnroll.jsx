import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';

const MyEnroll = () => {
    const { user } = useContext(AuthContext);
    const [enrolledCourse, setEnrolledCourse] = useState([]);
    
    const [myEnroll,setMyEnroll]=useState([])
    useEffect(() => {
          fetch('http://localhost:3000/enroll').then(res=>res.json()).
        then(data=>{
            const filteredCourses = data.filter(item => item.email === user.email);
                setEnrolledCourse(filteredCourses);
                console.log('Filtered Courses:', filteredCourses); 
        })
          fetch('http://localhost:3000/enrollCourse').then(res=>res.json()).
        then(data=>{
            
               
                setCheck(filteredCourses);
                console.log('Filtered Courses:', filteredCourses); 
        })
      
          
    }, [user.email]);
    console.log(enrolledCourse)
    return (
        <div>
          
        </div>
    );
};

export default MyEnroll;