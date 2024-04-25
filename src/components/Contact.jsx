import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <h1 className='flex justify-center items-center gap-5'>
            <Icon icon="grommet-icons:contact" width="30" height="30"  style={{color: '#f674ff'}} />
            <span className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>Contact</span>
        </h1>


        <form className='w-[80%] md:w-[60%] lg:w-[40%]  flex flex-col gap-5 py-5' action="">
            <input className='h-12 p-2 outline-none rounded-md bg-[#4b4b4b]' type="text" placeholder='Enter Your Full Name' required />
            <input className='h-12 p-2 outline-none rounded-md bg-[#4b4b4b]' type="text" placeholder='Enter Your 10 Digits Phone Number' required />

            <textarea className='p-2 rounded-md resize-none outline-none bg-[#4b4b4b]' name="" id="" cols="30" rows="5" placeholder='Text Here !' required></textarea>
            <button className='h-12 mt-7 bg-blue-500 rounded-md text-2xl font-semibold hover:bg-blue-600' type='submit'>Send</button>
        </form>
    </div>
  )
}
