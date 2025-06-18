import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyEnroll = () => {
    const { user } = useContext(AuthContext);
    const [enrolledCourse, setEnrolledCourse] = useState([]);
    console.log(user.email)

    const [myEnroll, setMyEnroll] = useState([])
    useEffect(() => {

        fetch(`https://server-rho-lime-60.vercel.app/enrollCourse?email=${user.email}`,{
            headers:{
                authorization:`Bearer ${user.accessToken}`
            }
        }).then(res => res.json()).
            then(data => {

                console.log(data)
                setEnrolledCourse(data)
            })


    }, [user.email]);
    console.log(enrolledCourse)
    const handleDelete = (id) => {
        console.log(id)
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
                    fetch(`https://server-rho-lime-60.vercel.app/enrolls/${id}`, {
                        method: 'DELETE',
                    }).then(res => res.json()).then(data => {
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
            <Helmet><title>enroll</title></Helmet>
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
                                enrolledCourse.map(enroll =>
                                    <tr key={enroll._id}>

                                        <td>{enroll.courseTitle}</td>
                                        <td>{enroll.description}</td>
                                        <td>
                                            <div className="join join-vertical">
                                                <button onClick={() => { handleDelete(enroll._id) }} className="btn join-item">remove</button>


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