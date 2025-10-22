import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';
import RefreshHandler from './RefreshHandler';
import LadingPage from './pages/LadingPage.jsx';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/home" />  //change login to home
  }

  
 

  return (
    <div className='App'>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} /> //change login to home
        <Route path="/login"  element={<Login setIsAuthenticated={setIsAuthenticated}/>} />  //ye change kiya hai
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />  //change huye hai private route hatayi hu jo ki extra file likha huaa hai.
        <Route path='/ladingPage' element={<LadingPage/>}/>
      </Routes>
    </div>
  )
}

export default App