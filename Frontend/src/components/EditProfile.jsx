import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useContext } from 'react';
import { userDataContext } from '../context/UserContext.jsx';
import dp from "../assets/dp.png"
import { FiPlus } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";

function EditProfile() {

    let {userData,setUserData,edit,setEdit}=useContext(userDataContext)
    let [firstName,setFirstName] = useState(userData.firstName || "")
    let [lastName,setLastName] = useState(userData.lastName || "")
    let [userName,setUserName] = useState(userData.userName || "")
    let [headline,setHeadline] = useState(userData.headline || "")
    let [location,setLocation] = useState(userData.location || "")

  return (
    <div className='w-full h-[100vh] fixed top-0 z-[200] flex justify-center items-center'>
        <div className='w-full h-full bg-black opacity-[0.5] absolute '>
        </div>
        <div className='w-[90%] max-w-[490px] h-[600px] bg-white relative z-[200] shadow-lg rounded-lg p-[10px] overflow-auto'>
            <div className='absolute top-[20px] right-[20px] w-[25px] h-[25px] text-gray-800 font-semibold cursor-pointer ' onClick={()=>setEdit(false)}><RxCross1 className='w-[25px] h-[25px] text-gray-800 font-bold'/></div>


        <div className='w-full h-[150px] bg-gray-500 rounded-lg mt-[40px] overflow-hidden '>
            <img src="" alt="" className='w-full'/>
            <IoCameraOutline className='absolute right-[10px] top-[70px] w-[25px] h-[25px] text-white cursor-pointer' />
        </div>

        <div className='w-[80px] h-[80px] rounded-full overflow-hidden absolute top-[150px] ml-[20px]'>
            <img src={dp} alt="" className='w-full h-full'/>
        </div>

        <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[200px] left-[84px] rounded-full flex justify-center items-center'>
            <FiPlus className='text-[white]'/>
        </div>

        <form className='w-full flex flex-col items-center justify-center gap-[20px] mt-[50px]'>
            <input type="text" placeholder='firstName' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[2px] text-[18px] border-2 rounded-lg'/>
            <input type="text" placeholder='lastName' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[2px] text-[18px] border-2 rounded-lg'/>
            <input type="text" placeholder='userName' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[2px] text-[18px] border-2 rounded-lg'/>
            <input type="text" placeholder='headline' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[2px] text-[18px] border-2 rounded-lg'/>
            <input type="text" placeholder='location' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[2px] text-[18px] border-2 rounded-lg'/>
            <input type="text" placeholder='gender (male/female/other)' className='w-full h-[50px] outline-none border-gray-600 px-[10px] py-[2px] text-[18px] border-2 rounded-lg'/>
            <div>
                <h1>Skills</h1>

            </div>

        </form>

        </div>
    </div>
  )
}

export default EditProfile