import React from 'react';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='bg-[#dc3545]'>
                <form className="fieldset  border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Sign Up</legend>

                    <label className="label">Name</label>
                    <input type="name" name='name' className="input" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input type="url" name='photoURL' className="input" placeholder="Photo Url" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password"name="password" className="input" placeholder="Password" />

                    <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;