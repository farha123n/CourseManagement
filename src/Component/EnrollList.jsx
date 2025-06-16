import React from 'react';
import { CiTimer } from 'react-icons/ci';

const EnrollList = ({e}) => {
    return (
        <div>
            <div className='bg-[#dc3545] p-1'>
                  <img src={e.url} alt="" />
                  <div className='p-4'>
                    <h1 className='text-3xl text-white'>{e.title}</h1>
                    <p>{e.description}</p>
                  </div>
                  <div className='flex'><CiTimer /> Duration :{e.duration} </div>
                  <h1 className='text-white'>enrolled {e.enrolled}</h1>
        </div>
        </div>
    );
};

export default EnrollList;