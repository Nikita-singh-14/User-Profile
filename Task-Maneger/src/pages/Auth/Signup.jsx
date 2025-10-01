import React, { useState } from 'react'
import Button from '../../component/Button';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../../utils/Toast';

const Signup = () => {
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const signupHandler = (e) => {
        const { name, value } = e.target;
        setSignupData({ ...signupData, [name]: value });
    }
    
    const navigate = useNavigate();
    const signupSubmitHandler = async (e) => {
        e.preventDefault();
        const {name, email, password} = signupData;
        if(!name || !email || !password){
            return handleError('name, email, and password are required')
        }
        try{
            const url = 'https://user-profile-git-main-nikita-singhs-projects-d95487a1.vercel.app/auth/signup';
            const response = await fetch(url, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(signupData)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if(success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                },1000)
            } else if(error){
                console.log(error); 
                const err = error;
                handleError(err);
            }
            else if(!success){
                handleError(message);
            }
            console.log(result);
        } catch (err){
            handleError(err);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={signupSubmitHandler} className='p-5 flex flex-col justify-center items-left gap-4 w-[300px] sm:w-[400px]'>

                    <div>
                        <h1 className='text-2xl'>Create an Account</h1>
                        <p className='text-gray-600 text-sm'>Join us today by entering your details below.</p>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="name">Full Name</label>
                        <div className="bg-gray-200 rounded md:rounded-lg ">
                            <input
                                className='w-full p-1 cursor-pointer'
                                type="text"
                                value={signupData.name}
                                autoFocus
                                placeholder='john'
                                name='name'
                                onChange={signupHandler}
                                required />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="email">Email Address.</label>
                        <div className="bg-gray-200 rounded md:rounded-lg ">
                            <input
                                className='w-full p-1 cursor-pointer'
                                type="email"
                                value={signupData.email}
                                placeholder='anu@gmail.com'
                                name='email'
                                onChange={signupHandler}
                                required />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password">Password</label>
                        <div className="bg-gray-200 rounded md:rounded-lg ">
                            <input
                                className='w-full p-1 cursor-pointer'
                                type='password'
                                value={signupData.password}
                                placeholder='Min. 4 Character'
                                name='password'
                                onChange={signupHandler}
                                required />
                        </div>
                    </div>
                    <Button>Signup</Button>
                    <p className='text-gray-600 text-sm'>Already have an account?
                        <Link className='text-blue-600 underline' to="/">Login</Link>
                    </p>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Signup;
