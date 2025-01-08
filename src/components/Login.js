import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg' alt='logo'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>)}
            <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login