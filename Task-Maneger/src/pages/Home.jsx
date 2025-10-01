import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/Toast';
import { ToastContainer } from 'react-toastify';
const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User logged out.')
        setTimeout(() => {
            navigate('/login')
        }, 1000)

    }

    const fetchProduct = async (e) => {
        try {
            const url = 'https://user-profile-git-main-nikita-singhs-projects-d95487a1.vercel.app/products';
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            //ye khud se likha hai  ese likhne par code sahi se kam karne laga.
            if (Array.isArray(result)) {
                setProducts(result);
            } else {
                setProducts([]);
                handleError('Invalid product data');
            }
            //console.log(result);
            //setProducts(result);
        } catch (error) {
            handleError(error.message);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout}
                className='bg-red-500 hover:bg-red-400  rounded md:rounded-lg w-[5rem]  cursor-pointer'>
                Logout
            </button>
            <div>
                {
                    products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price} </span>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home;
