import React, { useState } from 'react'
import Button from '../../component/Button';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { handleError, handleSuccess } from '../../utils/Toast';

const Login = ({setIsAuthenticated}) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const loginHandler = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const navigate = useNavigate();
    const loginSubmitHandler = async(e) => {
         e.preventDefault();
                const {email, password} = loginData;
                if(!email || !password){
                    return handleError('email, and password are required')
                }
                try{
                    const url = 'http://localhost:8080/auth/login';
                    const response = await fetch(url, {
                        method:"POST",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(loginData)
                    });
                    const result = await response.json();
                    const { success, message, jwtToken, name, error } = result;
                    if(success) {
                        handleSuccess(message);
                        localStorage.setItem('token', jwtToken);
                        localStorage.setItem('loggedInUser', name);
                        setIsAuthenticated(true);
                        setTimeout(() => {
                            navigate('/home')
                        },1000)
                    } else if(error){
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
            <form onSubmit={loginSubmitHandler} className='p-2 flex flex-col justify-center items-left gap-4 w-[300px] sm:w-[400px] '>
        
                    <div>
                        <h1 className='text-2xl'>Welcome Back</h1>
                        <p className='text-gray-600 text-sm'>Please enter your details to log in.</p>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Email Address.</label>
                        <div className="bg-gray-200 rounded md:rounded-lg ">
                            <input
                                className='w-full p-1 cursor-pointer'
                                type="text"
                                placeholder='anu@gmail.com'
                                name='email'
                                autoFocus
                                value={loginData.email}
                                onChange={loginHandler}
                                required />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <div className="bg-gray-200 rounded md:rounded-lg ">
                            <input
                                className='w-full p-1 cursor-pointer '
                                type="text"
                                name='password'
                                value={loginData.password}
                                placeholder='Min. 8 Character'
                                onChange={loginHandler}
                                required />
                        </div>
                    </div>
                    <Button>Login</Button>
                    <p className='text-gray-600 text-sm'>Don't have an account?
                        <Link className='text-blue-600 underline' to="/signup">signup</Link>
                    </p>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Login;