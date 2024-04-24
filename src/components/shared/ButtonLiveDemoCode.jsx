import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

export const ButtonLiveDemoCode = (props) => {
  const {live, demo, code} = props;
  return (
    <div>
        <div className='w-full flex justify-around'>
          <a href={live} target='_blank' rel="noopener noreferrer">
            <button className='flex items-center gap-2 px-3 py-2 text-[#000] font-semibold bg-blue-100 rounded-md hover:scale-105'>
              <Icon icon="mdi:web" width="20" height="20"  style={{color: 'black'}} />
              <span>Go Live</span>
              </button>
          </a>
          <a href={demo} target='_blank' rel="noopener noreferrer">
            <button className='flex items-center gap-2 px-3 py-2 text-[#000] font-semibold bg-blue-100 rounded-md hover:scale-105'>
              <Icon icon="carbon:demo" width="20" height="20"  style={{color: 'black'}} />
              <span>Demo</span>
              </button>
          </a>
          <a href={code} target='_blank' rel="noopener noreferrer">
            <button className='flex items-center gap-2 px-3 py-2 text-[#000] font-semibold bg-blue-100 rounded-md hover:scale-105'>
                <Icon icon="mdi:code" width="20" height="20"  style={{color: 'black'}} />
                <span>Code</span>
            </button>
          </a>
        </div>
    </div>
  )
}
