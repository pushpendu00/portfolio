import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className='nav-div h-full p-2 flex justify-between items-center bg-[#2a2a2a] text-white shadow-md shadow-[#7a7a7a]'>
        <div className='nav-profile-name bg-green-500 text-4xl font-bold from-[#4cff8f] via-[#ff6b19] to-[#f065f4] bg-gradient-to-r bg-clip-text text-transparent'>Pushpendu</div>
        <ul className='nav-list w-0 overflow-hidden md:w-auto md:flex md:gap-5 lg:gap-7'>
            <a href='#Home' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Home</a>
            <a href='#About' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>About</a>
            <a href='#Skills' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Skills</a>
            <a href='#Work' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Work</a>
            <a href='#Projects' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Projects</a>
            <a href='#Education' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Education</a>
            <a href='#Contact' className='cursor-pointer hover:border-b-red-500 border-b-[3px] border-transparent'>Contact</a>
        </ul>

        <div className='like-icon w-0 overflow-hidden md:w-auto md:flex cursor-pointer'>
            {/* <Icon icon="icon-park-solid:like"  style={{color: 'white'}} /> */}
            {/* <button className='px-3 py-2 rounded-md bg-[#757575]'>Follow</button> */}
        </div>


        <div onClick={()=>setSidebarOpen(true)} className='sidebar-icon flex md:hidden text-[35px] cursor-pointer'>
            <Icon icon="fe:bar"  style={{color: 'white'}} />
        </div>
        <div className="absolute">
          <Sidebar sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen}
          />
      </div>
    </div>
  )
}
