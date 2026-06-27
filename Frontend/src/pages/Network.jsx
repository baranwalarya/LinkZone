import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav.jsx'
import axios from 'axios'
import { authDataContext } from '../context/AuthContext.jsx'

function Network() {
  let {serverUrl}=useContext(authDataContext)
  let [connections,setConnections]=useState([])

  const handleGetRequest = async () => {
    try {
      let result=await axios.get(`${serverUrl}/api/connection/requests`,{withCredentials:true})
      setConnections(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    handleGetRequest()
  },[])

  return (
    <div className='w-screen h-[100vh] bg-[#f3f2ec] '>
        <Nav/>
        <div className='w-full h-[100px] bg-[white]'>
          Invitations {connections.length}
        </div>
    </div>
  )
}

export default Network