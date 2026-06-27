import React, { useContext } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { userDataContext } from './context/UserContext.jsx'
import Network from './pages/Network.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  let {userData} = useContext(userDataContext)
  return (
    <Routes>
       <Route path='/' element={userData?<Home/>:<Navigate to="/login/"/>}/>
       <Route path='/signup' element={userData?<Navigate to="/"/>:<Signup/>}/>
       <Route path='/login' element={userData?<Navigate to="/"/>:<Login/>}/>
       <Route path='/network' element={userData?<Network/>:<Navigate to="/login/"/>}/>
       <Route path='/profile' element={userData?<Profile/>:<Navigate to="/login/"/>}/>
    </Routes>
  )
}

export default App