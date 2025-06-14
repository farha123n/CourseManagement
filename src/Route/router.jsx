import { createBrowserRouter } from "react-router";
import Root from "../Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



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
            }
        ]
    }
])
