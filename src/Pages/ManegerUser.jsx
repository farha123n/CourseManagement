import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';

import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManegerUser = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [courses, setCourses] = useState([])

    const email = user?.email
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:3000/course/${email}`,{
                headers:{
                    authorization:`Bearer ${user.accessToken} `
                }
            })
                .then(res => res.json())
                .then(data => {
                    setCourses(data);
                    console.log(data)
                })
                .catch(console.error);
        }
    }, [email]);
    const handleDelete = (id) => {
        Swal
            .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {

                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/course/${id}`, {
                        method: 'DELETE',
                    }).then(res => res.json).then(data => {
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCourse = courses.filter(t => t._id !== id)
                        setCourses(remainingCourse)
                    })

                }
            })

    }
    console.log(courses)
    return (
        <div>
            <Helmet><title>manage</title></Helmet>
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
                                courses.map(course =>
                                    <tr key={course._id}>

                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td>
                                            <div className="join join-vertical">
                                                <button onClick={() => { handleDelete(course._id) }} className="btn join-item">delete</button>
                                                <Link to={`/edit/${course._id}`} className="btn join-item">
                                                    Edit
                                                </Link>

                                            </div>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManegerUser;