import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext.jsx'
import axios from 'axios'
export const userDataContext = createContext()
function UserContext({children}) {
let [userData,setUserData] = useState([])
let {serverUrl}=useContext(authDataContext)

const getCurrentUser = async () => {
  try {
    let result=await axios.get(serverUrl+"api/user/currentuser",{withCredentials:true})
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}


useEffect(()=>{
  getCurrentUser()
},[])

  const value={}

  return (
    <div>
        <userDataContext.provider value={value}>
            {children}
        </userDataContext.provider>
    </div>
  )
}

export default UserContext