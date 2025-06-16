import React, { useContext } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { CiTimer } from 'react-icons/ci';

const CourseDetails = () => {
    const { course,user } = useContext(AuthContext)
    console.log(course)
    const handleEnroll=()=>{

    }
    return (
        <div className='bg-[#dc3545] p-1 mx-auto my-3.5'>
            <img src={course.url} alt="" />
            <div className='p-4'>
                <h1 className='text-3xl text-white'>{course.title}</h1>
                <p>{course.description}</p>
            </div>
            <div className='flex'><CiTimer /> Duration :{course.duration} </div>
            <button
                onClick={handleEnroll}
                disabled={!user}
                className={`px-4 py-2 rounded ${user ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 cursor-not-allowed text-white'}`}
            >
                Enroll
            </button>
        </div>
    );
};

export default CourseDetails;