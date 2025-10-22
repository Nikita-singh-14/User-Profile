import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';
import RefreshHandler from './RefreshHandler';
import LadingPage from './pages/LadingPage';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='App'>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<LadingPage/>} />//change login to home
        <Route path="/ladingpage" element={<LadingPage />} />
        <Route path="/login"  element={<Login setIsAuthenticated={setIsAuthenticated}/>} />  //ye change kiya hai
        <Route path="/signup" element={<Signup />} />
        <Route path="/home"  element={<Home/>}/> //change huye hai private route hatayi hu jo ki extra file likha huaa hai.
        
    
       
      </Routes>
    </div>
  )
}

export default App