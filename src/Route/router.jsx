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



export const router = createBrowserRouter([

    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            {
                path: 'login', Component: Login
            },
            {
                path: 'register', Component: Register
            },
            {
                path: 'addCourse', Component: AddCourses
            },
            {
                path: '/details', Component: CourseDetails
            },
            {
                path: '/manageCourse', Component: ManegerUser

            },
            {
                path: '/edit/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`),
                element: <PrivateRoute><Update /></PrivateRoute>
            },
            {
                path:'/myEnroll',
                element:<PrivateRoute><MyEnroll></MyEnroll></PrivateRoute>
            }
        ]
    }
])
