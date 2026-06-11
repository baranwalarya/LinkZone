import React, { useState } from 'react'
import Nav from '../components/Nav.jsx'
import EditProfile from '../components/EditProfile.jsx'
import dp from "../assets/dp.png"
import { FiPlus } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { useContext } from 'react';
import { userDataContext } from '../context/UserContext.jsx';
import { MdEdit } from "react-icons/md";

function Home() {

  let {userData,setUserData,edit,setEdit}=useContext(userDataContext)
  

  return (
    <div className='w-full min-h-[100vh] bg-[#f3f2ec] pt-[100px] flex items-start justify-center gap-[20px] px-[10px]  flex-col lg:flex-row  '>


      {edit && <EditProfile />}
      <Nav/>

        {/* Card div */}
        <div className='w-full lg:w-[25%] min-h-[200px] bg-white shadow-lg rounded-lg p-[10px] relative'>

          {/* Cover Image */}
          <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center relative cursor-pointer ' onClick={()=>setEdit(true)}>
            <img src="" alt="" className='w-full'/>
            <IoCameraOutline className='absolute right-[10px] top-[30px] w-[25px] h-[25px] text-white cursor-pointer' />
          </div>

          {/* Profile Image */}
            <div className='w-[70px] h-[70px] rounded-full overflow-hidden items-center justify-center absolute top-[65px] left-[35px] cursor-pointer' onClick={()=>setEdit(true)}>
              <img src={dp} alt="" className='h-full'/>
            </div>
            <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[109px] left-[84px] rounded-full flex justify-center items-center'>
                <FiPlus className='text-[white]'/>
            </div>

          {/* Details Name */}
            <div className='mt-[35px] pl-[15px] pr-[10px] text-[19px] font-semibold text-gray-700'>
              <div>{`${userData.firstName} ${userData.lastName}`}</div>
              <div className='text-[19px] font-semibold text-gray-700'>{userData.headline || ""}</div>
              <div className='text-[16px] text-gray-500'>{userData.location}</div>

              <button className='w-[100%] h-[40px] mt-[30px] my-[25px] rounded-full border-2 border-[#2dc0ff] text-[#2dc0ff] flex items-center justify-center gap-[10px]' onClick={()=>setEdit(true)}>Edit Profile <MdEdit className='text-[20px]'/></button>

            </div>

        </div>

        <div className='w-full lg:w-[50%] min-h-[200px] bg-[white] shadow-lg'>

        </div>

        <div className='w-full lg:w-[25%] min-h-[200px] bg-[white] shadow-lg'>

        </div>

    </div>
  )
}

export default Home