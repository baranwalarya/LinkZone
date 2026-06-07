import React, { useState } from 'react'
import logo2 from "../assets/logo2.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import dp from "../assets/dp.png"

function Nav() {
    let [activeSearch,setActiveSearch] = useState(false)
  return (
    <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-between md:justify-around items-center px-[10px]'>
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
        <div className='flex justify-center items-center gap-[50px]relative'>      

            <div className='w-[300px] h-[400px] bg-white shadow-lg absolute top-[82px]'></div>

            <div className='lg:flex flex-col items-center justify-center text-gray-600 hidden'>
                <IoMdHome className='h-[20px] w-[20px] text-gray-600'/>
                <div>Home</div>
            </div>
            <div className='lg:flex flex-col items-center justify-center text-gray-600 hidden'>
                <FaUsers className='h-[20px] w-[20px] text-gray-600'/>
                <div>My Network</div>
            </div>
            <div className='flex flex-col items-center justify-center text-gray-600 '>
                <IoNotificationsSharp className='h-[20px] w-[20px] text-gray-600'/>
                <div className='hidden md:block'>Notification</div>
            </div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img src={dp} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav 