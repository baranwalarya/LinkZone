import React, { createContext, useContext, useState } from 'react'
import { authDataContext } from './AuthContext.jsx'
export const userDataContext = createContext()
function userContext({children}) {
let [userData,setUserData] = useState([])
let {serverUrl}=useContext(authDataContext)

const getCurrentUser = 


  const value={}

  return (
    <div>
        <userDataContext.provider value={value}>
            {children}
        </userDataContext.provider>
    </div>
  )
}

export default userContext