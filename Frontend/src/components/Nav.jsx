import React, { useContext, useState } from 'react'
import logo2 from "../assets/logo2.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import dp from "../assets/dp.png"
import {userDataContext} from '../context/UserContext.jsx'
import { authDataContext } from '../context/AuthContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Nav() {
    let [activeSearch,setActiveSearch] = useState(false)
    let {userData,setUserData}=useContext(userDataContext)
    let [showPopUp,setShowPopUp] = useState(false)
    let navigate=useNavigate()
    let {serverUrl} = useContext(authDataContext)

    const handleSignOut = async () => {
        try {
            let result = await axios.get(serverUrl+"/api/auth/logout",{withCredentials:true})
            setUserData(null)
            console.log(result)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-between md:justify-around items-center px-[10px] z-[100]'>
        <div className='flex justify-center items-center gap-[10px]'>
            <div onClick={()=>{
                setActiveSearch(false)
            }}>
            <img src={logo2} alt="" className='w-[50px]'/>
            </div>

            {!activeSearch && <div> <IoSearchSharp className='w-[23px] h-[23px] text-gray-600 lg:hidden' onClick={()=>setActiveSearch(true)}/> </div>}


            <form action="" className={`w-[190px] lg:w-[350px] h-[40px] bg-[#f3f2ec] lg:flex items-center gap-[10px] px-[10px] py-[5px] rounded-md ${!activeSearch?"hidden":"flex"} `}>
           <div> <IoSearchSharp className='w-[23px] h-[23px] text-gray-700'/> </div>
           <input type="text" className='w-[100px] h-full bg-transparent outline-none border-0' placeholder='Search Users...'/>
            </form>
        </div>


        {/* Right div  */}
        <div className='flex justify-center items-center gap-[20px] relative'>    

            {/* Pop Up Div */}

            {showPopUp && <div className='w-[300px] min-h-[300px] bg-white shadow-lg absolute top-[75px] right-0 rounded-lg flex flex-col items-center p-[20px] gap-[20px] z-50'>

                <div className='w-[70px] h-[70px] rounded-full overflow-hidden'>
                    <img src={userData.profileImage || dp} alt="" className='w-full h-full'/>
                </div>

                <div className='text-[19px] font-semibold text-gray-700'>
                    {`${userData.firstName} ${userData.lastName}`}
                </div>

                <button className='w-[100%] h-[40px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff]'>View Profile</button>

                <div className='w-full h-[1px] bg-gray-700'></div>

                <div className='flex w-full items-center justify-start text-gray-600 gap-[10px] cursor-pointer' onClick={()=>navigate("/network")}>
                    <FaUsers className='h-[23px] w-[23px] text-gray-600'/>
                    <div>My Network</div>
                </div>

                <button className='w-[100%] h-[40px] rounded-full border-2 border-[#ff2d2d] text-[#ff2d2d]' onClick={handleSignOut}>Sign Out</button>
            </div>}  

            

            <div className='lg:flex flex-col items-center justify-center text-gray-600 hidden' onClick={()=>navigate("/")}>
                <IoMdHome className='h-[20px] w-[20px] text-gray-600'/>
                <div>Home</div>
            </div>
            <div className='md:flex flex-col items-center justify-center text-gray-600 hidden cursor-pointer' onClick={()=>navigate("/network")}>
                <FaUsers className='h-[20px] w-[20px] text-gray-600'/>
                <div>My Network</div>
            </div>
            <div className='flex flex-col items-center justify-center text-gray-600 '>
                <IoNotificationsSharp className='h-[20px] w-[20px] text-gray-600'/>
                <div className='hidden md:block'>Notification</div>
            </div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer' onClick={()=>setShowPopUp(prev=>!prev)}>
                <img src={userData.profileImage || dp} alt="" className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Nav 