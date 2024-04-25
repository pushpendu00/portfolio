import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import dana_logo from '../assets/images/logo-final.png';

export const Work = () => {
  return (
    <div className='work-div'>
        <h1 className='flex justify-center gap-5'>
            <Icon icon="raphael:employee" width="40" height="40"  style={{color: '#f674ff'}} />
            <span className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>Work</span>
        </h1>

        {/* body of work*/}
        <div className='w-full pt-10 p-3 flex flex-col items-center'>
            <div className='w-[95%] md:w-[90%] border-b-[0.7px] border-[#626262]'></div>

            {/* 1st Experence */}
            <div className='w-[95%] md:w-[90%] py-5 flex gap-3 md:gap-10   border-b-[0.7px] border-[#626262]'>
                <div className='w-[25%] md:w-[20%] lg:w-[10%]'>
                    <img className='w-full bg-white' src={dana_logo} alt="Dana" />
                    {/* <span>Self Employed</span> */}
                </div>
                <div className='w-full'>
                    <h1 className='text-xl font-bold text-white'>
                        {/* Full Stack Web Developer */}
                        Member, Full Stack Developer
                    </h1>
                    <p className='text-[#b6b6b6]'>
                        {/* <span>Self-employed</span> <br /> */}
                        <span>Dana . Part-time</span> <br />
                        <span>2023 - Present . 8 mos</span> <br />
                        <span>Kalyani, West Bengal, India</span> <br /><br />
                        <span>This website is created by me and I am still its developer. </span> <br />
                        <span> Working with <u className='font-bold'>React js</u>, <u className='font-bold'>Node js</u>, <u className='font-bold'>Express js</u>, <u className='font-bold'>MongoDB</u>, <u className='font-bold'>CSS</u>, <u className='font-bold'>Tailwind css</u></span> <br />
                        <a className='text-blue-500 underline' href="http://dana.org.in"><span>http://dana.org.in</span></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
