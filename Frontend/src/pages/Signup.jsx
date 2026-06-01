import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from "axios"

function Signup() {
  let [show,setShow] = useState(false)
  let {serverUrl} = useContext(authDataContext)
  let navigate=useNavigate()
  let [firstName,setFirstName]=useState("")
  let [lastName,setLastName]=useState("")
  let [userName,setUserName]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")


  const handleSignUp=async (e) => {
    e.preventDefault()
    try {
      let result= await axios.post(serverUrl+"/api/auth/signup",{
        firstName,
        lastName,
        userName,
        email,
        password
      },{withCredentials:true})
      console.log(result)
      setFirstName("")
      setLastName("")
      setUserName("")
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]'>
      <div className='p-[25px] lg:p-[30px] w-full h-[80px] flex items-center '>
        <img src={logo} alt="LinkedIn" />
      </div>
      <form className='w-[90%] max-w-[400px] h-[600px] md:shadow-2xl flex flex-col justify-center p-[15px] gap-[10px]' onSubmit={handleSignUp}>

        <h1 className='text-gray-800 text-[30px] font-semibold mb-[30px]'>Sign Up</h1>

        <input type="text" placeholder='firstname' required className='w-[100%] h-[50px] border-2 border-gray-800 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <input type="text" placeholder='lastname' required className='w-[100%] h-[50px] border-2 border-gray-800 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <input type="text" placeholder='username' required className='w-[100%] h-[50px] border-2 border-gray-800 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input type="email" placeholder='email' required className='w-[100%] h-[50px] border-2 border-gray-800 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <div className='w-[100%] h-[50px] border-2 border-gray-800 text-gray-800 text-[18px] rounded-md relative'>

          <input type={show?"text":"password"} placeholder='password' required className='w-full h-full text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md' value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <span className='absolute right-[20px] top-[10px] text-[#1d60fd] cursor-pointer font-semibold' onClick={()=>setShow(prev=>!prev)}>{show?"hidden":"show"}</span>
        </div>

        <button className='w-[100%] h-[50px] rounded-full bg-[#1d60fd] mt-[40px] text-white'>SignUp</button>

        <p className='text-center cursor-pointer' onClick={()=>navigate("/login")}>Already have an account? <span className='text-[#1d60fd] ' >Sign In</span></p>

      </form>
    </div>
  )
}

export default Signup