import React from 'react';
import { NavLink } from 'react-router';

const Table = ({ course }) => {
    
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
                fetch(`http://localhost:3000/course/${course._id}`,{
                    method:'DELETE',
                }).then(res=>res.json).then(data=>{
                    if(data.deletedCount){
                       
                         Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                    }
                     const remainingTask=tasks.filter(t=>t._id!==id)
                         setTasks(remainingTask)
                })
               
            }
        })
        
    }
    
    return (
        <tr>

            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>
                <div className="join join-vertical">
                    <button onClick={handleDelete} className="btn join-item">delete</button>
                    <button className="btn join-item">
                        <NavLink to='/edit'>edit</NavLink>
                    </button>
                    
                </div>
            </td>
        </tr>
    );
};

export default Table;