import React from 'react';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-[#dc3545]'>
                <form className="fieldset  border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;