import React, { useContext } from 'react';
import { CiTimer } from "react-icons/ci";
import { NavLink } from 'react-router'; // Make sure you import from react-router-dom
import { AuthContext } from '../Provider.jsx/AuthProvider';

const CourseList = ({ course }) => {
  const { setCourse } = useContext(AuthContext);

  const handleSelectCourse = () => {
    setCourse(course);
  };

  return (
    <div className='bg-[#dc3545] p-1'>
      <img src={course.url} alt="" />
      <div className='p-4'>
        <h1 className='text-3xl text-white'>{course.title}</h1>
      </div>
      <div className='flex'><CiTimer /> Duration :{course.duration} </div>
      <NavLink to='/details'>
        <button className='btn text-white bg-black my-4' onClick={handleSelectCourse}>
          Details
        </button>
      </NavLink>
    </div>
  );
};

export default CourseList;