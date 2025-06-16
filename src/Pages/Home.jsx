import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

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
                                   <h2 className="text-2xl font-bold">{d.title}</h2>
                            <p>{d.Subtitle}</p>
                             </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Home;
