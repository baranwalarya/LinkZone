import React, { useContext } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { userDataContext } from './context/UserContext.jsx'

function App() {
  let {userData} = useContext(userDataContext)
  return (
    <Routes>
       <Route path='/' element={userData?<Home/>:<Navigate to="/login/"/>}/>
       <Route path='/signup' element={userData?<Navigate to="/"/>:<Signup/>}/>
       <Route path='/login' element={userData?<Navigate to="/"/>:<Login/>}/>
    </Routes>
  )
}

export default App