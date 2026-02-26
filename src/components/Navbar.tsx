import Image from 'next/image'
import React from 'react'
import { Announcement, Search, Message } from '@/public'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow-xl'>
      
      {/* SEARCH BAR - Professional Container */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3 py-2'>
        <Image src={Search} alt='Search' width={14} height={15} />
        <input 
          type="text" 
          placeholder='Search...' 
          className='w-[200px] bg-transparent outline-none'
        />
      </div>

      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 w-full justify-end'>
        
        {/* MESSAGES */}
        <div className='bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition'>
          <Image src={Message} alt='Messages' width={200} height={200} />
        </div>

        {/* ANNOUNCEMENTS WITH BADGE */}
        <div className='relative bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition'>
          <Image src={Announcement} alt='Announcements' width={250} height={250} />
          <div className='absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full text-[10px] font-medium'>
            2
          </div>
        </div>

        {/* USER PROFILE */}
        <div className='flex items-center gap-3 ml-2'>
          <div className='flex flex-col gap-2 text-right'>
            <span className='text-xl leading-3 font-semibold'>Tangomo Christ </span>
            <span className='text-[14px] text-gray-500 capitalize'>Student</span>
          </div>
          {/* Avatar Placeholder - Professional apps usually have a circular image here */}
          <div className='w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-gray-100'>
             <span className='text-xs font-bold text-gray-600'>T</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar