import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const Skills = () => {
  return (
    <div className='w-full'>
        <h1 className='w-full flex justify-center gap-5 pb-5'>
            <Icon icon="game-icons:skills" width="40" height="40"  style={{color: '#1cc44f'}} />
            <div className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>Skills</div>
        </h1>
        <div className='w-full md:w-[80%] lg:w-[70%] flex flex-wrap justify-center'>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="logos:java" width="70" height="70" />
                <span>Java</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="devicon:html5" width="70" height="70" />
                <span>HTML</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="devicon:css3" width="70" height="70" />
                <span>CSS</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="logos:javascript" width="70" height="70" />
                <span>Javascript</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="logos:nodejs-icon" width="70" height="70" />
                <span>Node js</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="devicon:mongodb" width="70" height="70" />
                <span>MongoDB</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="devicon:tailwindcss" width="70" height="70" />
                <span>Tailwind</span>
            </div>
            <div className='p-4 flex flex-col items-center'>
                <Icon icon="logos:react" width="70" height="70" />
                <span>React js</span>
            </div>
        </div>
    </div>
  )
}
