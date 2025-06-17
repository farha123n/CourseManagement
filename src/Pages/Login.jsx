import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn(); // This returns userCredential
      const user = result.user;

      // 🔐 Get the Firebase ID token
      const idToken = await user.getIdToken();

      // 📨 Send the ID token to your backend for verification
      const response = await fetch('http://localhost:3000/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error('Failed to authenticate with backend');
      }

      
      toast.success('Google login successful!');
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      toast.error('Login failed: ' + error.message);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await logIn(email, password);
      const user = userCredential.user;

      // Get the Firebase ID Token
      const idToken = await user.getIdToken();

      // Optional: Send token to your backend to verify & return protected data or JWT
      const response = await fetch('http://localhost:3000/protected', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!response.ok) throw new Error('Backend auth failed');

      toast.success('Login Successful!');
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login Failed: ' + error.message);
    }
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
