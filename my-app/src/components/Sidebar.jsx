import React from "react";
import SideBar from "react-sidebar";

export const Sidebar = (props) => {
  const {sidebarOpen, setSidebarOpen} = props;
  return (
    <SideBar
        sidebar={
        <div className="h-full w-full p-3 bg-[#3a3939]">
          <ul className='nav-list flex flex-col'>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Home' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>Home</a>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#About' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>About</a>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Skill' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>Skills</a>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Skill' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>Work</a>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Projects' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>Projects</a>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Education' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>Education</a>
            <a onClick={()=>setSidebarOpen(prev=>!prev)} href='#Contact' className='cursor-pointer px-3 py-5 hover:bg-gray-900 rounded-md text-xl'>Contact</a>
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
