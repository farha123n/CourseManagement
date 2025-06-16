import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider.jsx/AuthProvider';
import { toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const { createUser, user, setUser, updateUser } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photoURL.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        const regex1 = /^(?=.*[A-Z])/;
        const regex2 = /^(?=.*[a-z])/;
        const regex3 = /(?=.*[^a-zA-Z0-9\s])/;
        const regex4 = /(?=.*[0-9])/;
        if (!regex1.test(password)) {
            toast.error('at least a upper case required')
            return
        }
        else if (!regex2.test(password)) {
            toast.error('at least a lower case required ')
            return
        }
        else if (!regex3.test(password)) {
            toast.error('at least one special charecter required')
            return
        }
        else if (!regex4.test(password)) {
            toast.error('there must be atleast one number')
            return
        }
        else if (password.length < 6) {
            toast.error('password must be at least 6 charecter')
            return
        }
        else if (password !== confirmPassword) {
            toast.error("password and confirm password doesn't match")
            return
        }
        else if (email === password) {
            toast.error('password cannot match with email')
            return
        }
        createUser(email, password).then((res) => {
            const User = res.user

            updateUser({ displayName: name, photoURL: photoURL }).then(() => {
                setUser({ ...User, displayName: name, photoURL: photoURL })
            })
            setUser(User)
            console.log(user)
            toast.success('registered done successfully')
            navigate('/')
        }).catch((error) => {
            // An error occurred
            // ...
            console.log(error)
            toast.error(error.message)
        });
    }
      const handleGoogleSignIN = () => {
           
            console.log('star')
          const auth = getAuth();
          signInWithPopup(auth, provider)
              .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential = GoogleAuthProvider.credentialFromResult(result);
                  const token = credential.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  // IdP data available using getAdditionalUserInfo(result)
                  // ...
                  toast.success("login successfull")
              }).catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  toast.error(errorMessage)
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential = GoogleAuthProvider.credentialFromError(error);
                  // ...
                  navigate('/')
              });
      }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-[#dc3545]'>
                <form onSubmit={handleRegister} className="fieldset  border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className="label">Name</label>
                    <input type="name" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input type="url" name='photoURL' className="input" placeholder="Photo Url" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <label className="label">Confirm Password</label>
                    <input type="confirmPassword" name="confirmPassword" className="input" placeholder="Confirm Password" />
                    <button onClick={handleGoogleSignIN} className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-5 h-5" />
                        <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                    </button>




                    <p className="mt-4 text-sm text-center text-gray-600">
                        Already have an account?
                        <NavLink to="/login" className="text-yellow-600 hover:underline">Login here</NavLink>
                    </p>
                    <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;