import React, { useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { useNavigate } from 'react-router';

const AddCourses = () => {
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const handleAddCourse = e => {
        e.preventDefault();
        const date = new Date();

        const form = e.target;
        const title = form.courseTitle.value;
        const description = form.description.value;
        const url = form.url.value;
        const duration = form.duration.value;

        const newCourse = {
            title,
            description,
            url,
            duration,
            courseCreationTime: date,
            enrolled:0,
            email:user.email
        };

        axios.post('http://localhost:3000/course', newCourse)
            .then(res => {
                if (res.data.insertedId || res.data.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This new course has been saved and published.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset(); // Clear form after submission
                    navigate('/')
                }
            })
            .catch(error => {
                console.log("Error posting course:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='bg-[#dc3545] p-4 my-3 rounded-3xl'>
                <p className="py-1 w-full text-3xl text-white text-center font-bold">Add Course</p>
                <form onSubmit={handleAddCourse} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">Course Title</label>
                    <input type="text" name='courseTitle' className="input m-1" placeholder="Course Title" required />

                    <label className="label">Description</label>
                    <textarea name="description" className='m-1 textarea' placeholder='Description' cols="15" rows="3" required></textarea>

                    <label className="label">Image URL</label>
                    <input type="text" name='url' className="input m-1" placeholder="URL" required />

                    <label className="label">Duration (in hours)</label>
                    <input type="number" name='duration' className="input m-1" placeholder="Duration" required />

                    <button className='bg-[#dc3545] text-white w-full p-3 mt-4 rounded-lg' type="submit">Add Course</button>
                </form>
            </div>
        </div>
    );
};

export default AddCourses;
