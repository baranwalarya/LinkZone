import React from 'react'
import logo2 from "../assets/logo2.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import dp from "../assets/dp.png"

function Nav() {
  return (
    <div className='w-full h-[80px] bg-[white] fixed top-0 shadow-lg flex justify-center items-center'>
        <div className='flex justify-center items-center gap-[10px]'>
            <div>
            <img src={logo2} alt="" className='w-[50px]'/>
            </div>
            <form action="">
           <div> <IoSearchSharp /> </div>
           <input type="text" />
            </form>
        </div>


        {/* Right div  */}
        <div className='flex justify-center items-center gap-[13px]'>      
            <div>
                <IoMdHome />
                <div>Home</div>
            </div>
            <div>
                <FaUsers />
                <div>My Network</div>
            </div>
            <div>
                <IoNotificationsSharp />
                <div>Notification</div>
            </div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img src={dp} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav 