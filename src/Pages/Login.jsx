import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn=()=>{
         googleSignIn()
     }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((userCredential) => {
        toast.success('Login Successful!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
  console.error('Login error:', error); // ← Debug log
  toast.error('Login Failed: ' + error.message);
});
  };

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='bg-[#dc3545] p-6 rounded-lg'>
        <form onSubmit={handleLogin} className="w-80 space-y-4 text-white">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <div>
            <label className="block">Email</label>
            <input type="email" name="email" required className="w-full p-2 rounded text-black" placeholder="Email" />
          </div>

          <div>
            <label className="block">Password</label>
            <input type="password" name="password" required className="w-full p-2 rounded text-black" placeholder="Password" />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-neutral rounded hover:bg-black text-white font-semibold"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg bg-white hover:bg-gray-100 transition text-black"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>

          <p className="mt-4 text-sm text-center text-white">
            Don't have an account?{' '}
            <NavLink to="/register" className="text-blue-200 hover:underline">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
