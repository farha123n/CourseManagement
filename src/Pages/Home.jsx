import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CourseList from '../Component/CourseList';
import EnrollList from '../Component/EnrollList';

const data = [
    {
        title: "Best Course for beginners",
        Subtitle: "All the courses are beginner friendly. Anyone can join.",
        img: '/bg1.png'
    },
    {
        title: "Updated Courses",
        Subtitle: "You will get Updated Courses",
        img: '/bg2.PNG'
    },
    {
        title: "Online or offline courses",
        Subtitle: "You can do both online or offline courses",
        img: '/bg3.PNG'
    }
];

const Home = () => {
    const [courses,setCourses]=useState([])
    const [sort,setSort]=useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(()=>{
      fetch('http://localhost:3000/courseEnrolled')
      .then(res=>res.json())
      .then(data=>{
        console.log(setSort(data))
        console.log(data)
      })

    },[])
    useEffect(()=>{
         fetch('http://localhost:3000/course')
      .then(res=>res.json())
      .then(data=>{
        console.log(setCourses(data))
        console.log(data)
      })
    },[])

    return (
        <div className="mt-4">
            <Slider {...settings}>
                {data.map((d, index) => (
                    <div className="relative w-full h-screen">
                        <img src={d.img} alt="" className="absolute w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
                        <div className="relative z-10 text-white p-4">
                            <div className='flex justify-center items-center'>
                             <div>
                                   <h2 className="text-5xl m-24 font-bold">{d.title}</h2>
                            <p className='text-xl text-center'>{d.Subtitle}</p>
                             </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className='mt-4'>
             <h1 className='text-red-600 text-center text-3xl'>Course Section</h1>
             <div className='grid m-10 grid-cols-1 lg:grid-cols-3 gap-3'>
              {courses.map(course=><CourseList course={course} key={course._id}></CourseList>)}
             </div>
            </div>
            <div className='mt-4'>
             <h1 className='text-red-600 text-center text-3xl'>Course by most amont of enrollment</h1>
             <div className='grid m-10 grid-cols-1 lg:grid-cols-3 gap-3'>
              {sort.map(e=><EnrollList e={e} key={e._id}></EnrollList>)}
             </div>
            </div>
        </div>
    );
};

export default Home;
