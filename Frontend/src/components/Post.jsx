import React from 'react'
import dp from "../assets/dp.png"

function Post({id,author,like,comment,description,image}) {
  return (
    <div className='w-full min-h-[500px] bg-white rounded-lg shadow-lg p-[20px]'>

        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-start gap-[10px]'>
            {/* Profile and name */}
            <div className='w-[70px] h-[70px] rounded-full  overflow-hidden flex items-center justify-center cursor-pointer'>
                <img src={author.profileImage || dp} alt="" className='h-full'/>
            </div>
            <div>
                <div className='text-[20px] font-semibold'>{`${author.firstName} ${author.lastName}`}</div>
                 <div className='text-[16px]'>{author.headline}</div>
            </div>

            </div>
            <div>
                {/* button */}

            </div>
        </div>



    </div>
  )
}

export default Post