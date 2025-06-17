import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { CiTimer } from 'react-icons/ci';
import Swal from 'sweetalert2';
import axios from 'axios';
import { toast } from 'react-toastify';

const CourseDetails = () => {
  const { course, user } = useContext(AuthContext);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [enroll,setEnroll]=useState([])
  const [enrolledCourse,setEnrolledCourse]=useState([])
  useEffect(() => {
  if (user?.email) {
    fetch('http://localhost:3000/courses')
      .then(res => res.json())
      .then(data => {
        setEnroll(data);
        console.log('Courses:', data);
      });
  }
}, [user]);
  useEffect(()=>{
         fetch('http://localhost:3000/enroll')
      .then(res => res.json())
      .then(data => {
        setEnrolledCourse(data);
        console.log('Courses:', data);
      });
  },[])
  useEffect(() => {
    if (user?.email && course?._id) {
      axios
        .get(`http://localhost:3000/enroll/check?email=${user.email}&courseId=${course._id}`)
        .then(res => {
          setAlreadyEnrolled(res.data.alreadyEnrolled);
        })
        .catch(err => {
          console.error('Enrollment check failed', err);
          setAlreadyEnrolled(false);
        });
    }
  }, [user, course]);

      console.log(enroll)
      console.log(enrolledCourse)

     
   const nroll=enroll.find(e=>e._id==course._id)
   console.log(nroll)
  const handleEnroll = () => {
   
    if(nroll.enrolled>10){
      toast.error('sorry cannot enroll')
      return
    }
    if (alreadyEnrolled) {
      Swal.fire({
        icon: 'error',
        title: 'Already enrolled',
        text: 'You have already enrolled in this course.',
      });
      return;
    }
      let count;
      for(const e of enrolledCourse){
         if(user.email===e.email){
          count++
         }
      }
       if(count>3){
      toast.error('user cannot enroll this course')
      
    }
    const Enroll = {
      courseId: course._id,
      courseTitle:course.title,
      description:course.description,

      email: user.email,
    };

    axios
      .post('http://localhost:3000/enroll', Enroll)
      .then(res => {
        if (res.data.insertedId || res.data.acknowledged) {
          const enrollCourseCount = (course.enrolled || 0) + 1;

          axios
            .patch(`http://localhost:3000/course/${course._id}`, {
              enrolled: enrollCourseCount,
            })
            .then(() => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully enrolled!',
                showConfirmButton: false,
                timer: 1500,
              });
              setAlreadyEnrolled(true);
            })
            .catch((err) => {
              console.error("Enrollment count update failed", err);
            });
        } else {
          throw new Error('Enrollment failed');
        }
      })
      .catch(error => {
        console.error('Error enrolling:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <div className="bg-[#dc3545] p-1 mx-auto my-3.5 max-w-md">
      <img src={course.url} alt={course.title} className="w-full h-auto" />
      <div className="p-4">
        <h1 className="text-3xl text-white">{course.title}</h1>
        <p className="text-white">{course.description}</p>
      </div>
      <div className="flex items-center text-white mb-4">
        <CiTimer className="mr-2" /> Duration: {course.duration}
      </div>
      <button
        onClick={handleEnroll}
        disabled={!user || alreadyEnrolled}
        className={`px-4 py-2 rounded ${user && !alreadyEnrolled
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-gray-400 cursor-not-allowed text-white'
          }`}
      >
        {alreadyEnrolled ? 'Already Enrolled' : 'Enroll'}
      </button>
    </div>
  );
};

export default CourseDetails;
