import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import SideBar from "react-sidebar";

export const Sidebar = (props) => {
  const {sidebarOpen, setSidebarOpen} = props;
  return (
    <SideBar
        sidebar={
        <div className="h-full w-full p-3 bg-[#3a3939]">
          <ul className='nav-list flex flex-col'>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Home' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>
              <Icon icon="material-symbols:home" width="30" height="30"  style={{color: '#fff'}} />
              <span>Home</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#About' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>
              <Icon icon="mdi:about" width="30" height="30"  style={{color: '#fff'}} />
              <span>About</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Skills' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>             
            <Icon icon="game-icons:skills" width="30" height="30"  style={{color: '#fff'}} />
              <span>Skills</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Work' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>          
            <Icon icon="raphael:employee" width="30" height="30"  style={{color: '#fff'}} />
              <span>Work</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Projects' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>
            <Icon icon="grommet-icons:projects" width="30" height="30"  style={{color: '#fff'}} />
              <span>Projects</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Education' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>
            <Icon icon="ph:student" width="30" height="30"  style={{color: '#fff'}} />
              <span>Education</span>
            </a>

            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Contact' className='flex gap-3 items-center cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>
            <Icon icon="grommet-icons:contact" width="30" height="30"  style={{color: '#fff'}} />
              <span>Contact</span>
            </a>
          </ul>
        </div>
      }
        open={sidebarOpen}
        onSetOpen={()=>setSidebarOpen(prev=>!prev)}
        over
        styles={{ sidebar: { background: "white", position : 'fixed' ,top: '0', height : '100vh', width : '55%' } }}
      >
    </SideBar>
  )
}
