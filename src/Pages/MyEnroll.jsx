import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import Swal from 'sweetalert2';

const MyEnroll = () => {
    const { user } = useContext(AuthContext);
    const [enrolledCourse, setEnrolledCourse] = useState([]);
    console.log(user.email)

    const [myEnroll, setMyEnroll] = useState([])
    useEffect(() => {

        fetch(`http://localhost:3000/enrollCourse?email=${user.email}`).then(res => res.json()).
            then(data => {

                console.log(data)
                setEnrolledCourse(data)
            })


    }, [user.email]);
    console.log(enrolledCourse)
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
                    fetch(`http://localhost:3000/enroll/${id}`, {
                        method: 'DELETE',
                    }).then(res => res.json).then(data => {
                        if (data.deletedCount) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCourse = enrolledCourse.filter(t => t._id !== id)
                        setEnrolledCourse(remainingCourse)
                    })

                }
            })

    }
    return (
        <div>
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
                                enrolledCourse.map(course =>
                                    <tr key={course._id}>

                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td>
                                            <div className="join join-vertical">
                                                <button onClick={() => { handleDelete(course._id) }} className="btn join-item">remove</button>


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

export default MyEnroll;