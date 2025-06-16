import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { toast } from 'react-toastify';
import { auth } from '../firebase.init';
const Login = () => {
    const provider = new GoogleAuthProvider();
    const navigate=useNavigate()
    const location=useLocation()
    const {logIn,googleSignIn}=useContext(AuthContext)
    const handleGoogleSignIn=()=>{
         googleSignIn()
     }
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        
        logIn(email, password).then((user) => {
            console.log(user)
            toast.success("User successfully LoggedIn!");
            navigate(`${location.state ? location.state : '/'}`)
        }).catch((error) => {
            const errorCode = error.code;
            
            toast.error(error)
        });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-[#dc3545]'>
                <form onSubmit={handleLogin} className="fieldset  border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-5 h-5" />
                        <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                    </button>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don't have an account?
                        <NavLink to="/register" className="text-sky-600 hover:underline">Sign up</NavLink>
                    </p>
                    <button className="btn btn-neutral mt-4">Login</button>

                </form>
            </div>
        </div>
    );
};

export default Login;