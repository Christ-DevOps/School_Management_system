import Image from 'next/image'
import React from 'react'
import { Announcement, Search } from '@/public'
import { Message } from '@/public'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4' >

      {/* SEARCH BAR */}
      <div className='hidden md:block ' >
        <Image src={Search} alt='Search here' />
        <input type="text" placeholder='Search now..' className='bg-white rounded-full w-7'/>
      </div>

      {/*USER AND ICONS */}
      <div className='flex justify-between'>
        
          <div className=''>
            <Image src={Message} alt='Message' />
            <div>
              <Image src={Announcement} alt='Announcement' />
              <span>2</span>
            </div>
            <div className='flex gap-2' >
              <div className='flex flex-col'>
                <span>Tangomo</span>
                <span>Student</span>
              </div>
            </div>
          </div>

      <div>

        </div>
      </div>
      
    </div>
  )
}

export default Navbar
