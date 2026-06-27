import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav.jsx'
import dp from "../assets/dp.png"
import { FiPlus } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { userDataContext } from '../context/UserContext.jsx';
import { MdEdit } from "react-icons/md";
import { useContext } from 'react';
import axios from 'axios';
import { authDataContext } from '../context/AuthContext.jsx';
import EditProfile from '../components/EditProfile.jsx';
import Post from '../components/Post.jsx';

function Profile() {

    let {userData,setUserData,edit,setEdit,postData,setPostData}=useContext(userDataContext)
    let  [profilePost,setProfilePost]=useState([])
    let {serverUrl}=useContext(authDataContext)
    let [userConnection,setUserConnection] = useState([])
    const handleGetUserConnection = async () => {
        try {
            let result = await axios.get(`${serverUrl}/api/connection`,{withCredentials:true})
            setUserConnection(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleGetUserConnection()
    },[])

    useEffect(()=>{
        setProfilePost(postData.filter((post)=>post.author._id==userData._id))
    },[])
    
  return (
    <div className='w-full min-h-[100vh] bg-[#f3f2ec] flex flex-col items-center pt-[100px] pb-[40px]'>

        <Nav />
        {edit && <EditProfile />}
        
        <div className='w-full max-w-[900px] min-h-[100vh] flex flex-col gap-[10px]'>

            <div className='relative bg-[white] pb-[40px] rounded shadow-lg'>
                <div className='w-[100%] h-[100px] bg-gray-400 rounded overflow-hidden flex items-center justify-center relative cursor-pointer ' onClick={()=>setEdit(true)}>
                    <img src={userData.coverImage || ""} alt="" className='w-full'/>
                    <IoCameraOutline className='absolute right-[10px] top-[30px] w-[25px] h-[25px] text-white cursor-pointer' />
                </div>
                
                {/* Profile Image */}
                <div className='w-[70px] h-[70px] rounded-full overflow-hidden flex items-center justify-center absolute top-[65px] left-[35px] cursor-pointer' onClick={()=>setEdit(true)}>
                    <img src={userData.profileImage || dp} alt="" className='h-full'/>
                </div>
                <div className='w-[20px] h-[20px] bg-[#17c1ff] absolute top-[109px] left-[84px] rounded-full flex justify-center items-center'>
                    <FiPlus className='text-[white]'/>
                </div>
                
                {/* Details Name */}
                <div className='mt-[35px] pl-[15px] pr-[10px] font-semibold text-gray-700'>
                    <div className='text-[22px]'>{`${userData.firstName} ${userData.lastName}`}</div>
                    <div className='text-[19px] font-semibold text-gray-600'>{userData.headline || ""}</div>

                    <div className='text-[16px] text-gray-500'>{userData.location}</div>

                    <div className='text-[16px] text-gray-500'>{`${userConnection.length} connection`}</div>

                </div>
                
                <button className='min-w-[150px] h-[40px] mt-[30px] my-[25px] rounded-full border-2 ml-[20px] border-[#2dc0ff] text-[#2dc0ff] flex items-center justify-center gap-[10px]' onClick={()=>setEdit(true)}>Edit Profile <MdEdit className='text-[20px]'/></button>
            </div>

            <div className='w-full h-[100px] flex items-center p-[20px] text-[22px] text-gray-600 font-semibold bg-white shadow-lg rounded-lg'>{`Post (${profilePost.length})`}</div>
            
            {profilePost.map((post,index)=>(
                <Post key={index} id={post._id} description={post.description} author={post.author} image={post.image} like={post.like} comment={post.comment} createdAt={post.createdAt}/>
            ))}

            {userData.skills.length>0 && <div className='w-full h-[100px] flex items-center p-[20px] text-[22px] text-gray-600 font-semibold bg-white shadow-lg rounded-lg'>Skills</div>}

        </div>
    </div>
  )
}

export default Profile