import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react';
import ku_logo from '../assets/images/education/Kalyani-University-logo.png';

export const Education = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='education-head w-full flex justify-center items-center gap-5 pb-10'>
        <Icon icon="ph:student" width="40" height="40"  style={{color: '#f674ff'}} />
        <span className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>Education</span>
      </h1>
      <div className='w-full flex flex-col items-center'>

        <div className='w-[95%] md:w-[90%] border-b-[0.7px] border-[#626262]'></div>

        {/* B.Tech */}
        <div className='w-[95%] md:w-[90%] py-5 flex gap-3 md:gap-10 border-b-[0.7px] border-[#626262]'>
          <div className='w-[25%] md:w-[20%] lg:w-[10%]'>
              <img className='w-full bg-white' src={ku_logo} alt="UK" />
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-bold text-white'>
              Bachelor of Technology
            </h1>
            <p className='text-[#b6b6b6]'>
              <span>University Of Kalyani, Kalyani, WB</span> <br /> <br />
              <span>Information Technology</span> <br />
              <span>Aug 2019 - Jul 2023</span> <br />
              <span>CGPA : 7.85</span>
            </p>
          </div>
        </div>

        {/* class 12  */}
        <div className='w-[95%] md:w-[90%] py-5 flex gap-3 md:gap-10 border-b-[0.7px] border-[#626262]'>
          <div className='w-[25%] md:w-[20%] lg:w-[10%]'>
              <img className='w-full bg-white' src='https://directory.edugorilla.com/wp-content/uploads/sites/6/2018/06/7601026306c071abc7a59267bcf6c82d.jpeg' alt="UK" />
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-bold text-white'>
                Higher Secondary Education
            </h1>
            <p className='text-[#b6b6b6]'>
              <span>Patharpratima Ananda Lal Adarsha Vidyalaya, South 24 Pargans, WB</span> <br /> <br />
              <span>Math, Physics, Chemistry, Biology</span> <br />
              <span>Apr 2018 - Apr 2019</span> <br />
              <span>Percentage : 63.20%</span>
            </p>
          </div>
        </div>

        {/* class 10  */}
        <div className='w-[95%] md:w-[90%] py-5 flex gap-3 md:gap-10 border-b-[0.7px] border-[#626262]'>
          <div className='w-[25%] md:w-[20%] lg:w-[10%]'>
              <img className='w-full bg-white' src='https://directory.edugorilla.com/wp-content/uploads/sites/6/2018/06/7601026306c071abc7a59267bcf6c82d.jpeg' alt="UK" />
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-bold text-white'>
                Secondary Education
            </h1>
            <p className='text-[#b6b6b6]'>
              <span>Patharpratima Ananda Lal Adarsha Vidyalaya, South 24 Pargans, WB</span> <br /> <br />
              <span>Jan 2016 - Feb 2017</span> <br />
              <span>Percentage : 67%</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
