import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddCourses from "../Pages/AddCourses";
import CourseDetails from "../Pages/CourseDetails";
import ManegerUser from "../Pages/ManegerUser";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update";
import MyEnroll from "../Pages/MyEnroll";
import Error from "../Pages/Error";
import UserInfo from "../Pages/UserInfo";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Support from "../Component/Support";
import Job from "../Component/Job";



export const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        errorElement:<Error></Error>,
        children: [
            { index: true, Component: Home },
            {
              path:'/about',Component:About
            },
            {
                path:'/contact',Component:Contact
            },
            {
              path:'/support',Component:Support
            },
            {
                path:'/jobs',Component:Job
            },
            {
                path: 'login', Component: Login
            },
            {
                path: 'register', Component: Register
            },
            {
                path: 'addCourse', element:<PrivateRoute><AddCourses></AddCourses></PrivateRoute>
            },
            {
                path: '/details', Component: CourseDetails
            },
            {
                path: '/manageCourse', element:<PrivateRoute><ManegerUser></ManegerUser></PrivateRoute>

            },
            {
                path: '/edit/:id',
                loader: ({ params }) => fetch(`https://server-rho-lime-60.vercel.app///courses/${params.id}`),
                element: <PrivateRoute><Update /></PrivateRoute>
            },
            {
                path:'/myEnroll',
                element:<PrivateRoute><MyEnroll></MyEnroll></PrivateRoute>
            },
            {
                path:'myInfo',
                element:<PrivateRoute><UserInfo></UserInfo></PrivateRoute>
            }
        ]
    }
])
