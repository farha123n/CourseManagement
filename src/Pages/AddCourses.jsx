import React from 'react';

const AddCourses = () => {

    const handleAddCourse=e=>{
        e.preventDefault()


    }
    
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='bg-[#dc3545] p-10 rounded-3xl'>
                <p className=" py-3 w-full text-3xl text-white text-center font-bold">Add Course</p>
                <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    

                    <label className="label ">Course Title</label>
                    <input type="text" name='courseTitle' className="input m-1" placeholder="Course Title" />

                    <label className="label  ">Description</label>
                   <textarea name="description" className='m-1' placeholder='description' id="" cols="15" rows="3"></textarea>

                    <label className="label  ">Image Url</label>
                    <input type="text" name='url' className="input m-1" placeholder="URL" />
                    <label className="label  ">Duration</label>
                    <input type="number" name='duration' className="input m-1" placeholder="Duration" />
                    <button className='bg-[#dc3545] text-white w-full p-3' type="submit">Add Course</button>
                </form>
            </div>
        </div>
    );
};

export default AddCourses;