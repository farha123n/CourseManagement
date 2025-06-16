import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCourses from "../Pages/AddCourses";
import CourseDetails from "../Pages/CourseDetails";



export  const router = createBrowserRouter([

    {
        path:'/',
        Component:Root,
        children:[
            {index:true,Component:Home},
            {
                path:'login',Component:Login
            },
            {
                path:'register',Component:Register
            },
            {
                path:'addCourse',Component:AddCourses
            },
            {
                path:'/details',Component:CourseDetails
            }
        ]
    }
])
