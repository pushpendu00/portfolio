import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const About = () => {
  return (
    <div className='about-div'>
      <h1 className='about-head text-center flex items-center justify-center gap-5 pb-5'>
        <span>
          {/* <img className='h-10' src="https://cdn-icons-png.flaticon.com/128/189/189664.png" alt="My About" /> */}
          <Icon icon="mdi:about" width="40" height="40"  style={{color: '#f674ff'}} />
        </span>
        <span className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>About</span>
      </h1>

      <div className='about-content w-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-[50%] md:w-[30%] lg:w-[20%] p-3 md:flex md:justify-end'>
          <img className='w-[100%]' src="https://pics.craiyon.com/2023-10-26/5e86e55df03c4bbdbbdaa6a261c4a0d6.webp" alt="about_photo" />
        </div>
        <div className='w-[80%] md:w-[50%] lg:w-[60%] p-3'>
          <p className='p-2 w-full text-xl text-justify justify-center font-semibold'>
            &emsp;Aspiring full stack web developer Looking
            for a challenging role in a reputable
            organization to utilize my technical, database, 
            and management skills for the
            growth of the organization as well as to
            enhance my knowledge about new and
            emerging trends in the IT sector.
          </p>
        </div>
      </div>
    </div>
  )
}
