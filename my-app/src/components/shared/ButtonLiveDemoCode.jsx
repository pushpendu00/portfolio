import React from 'react';

export const ButtonLiveDemoCode = (props) => {
  const {live, demo, code} = props;
  return (
    <div>
        <div className='w-full flex justify-around'>
          <a  href={live}>
            <button className='px-5 py-2 text-[#000] bg-blue-100 rounded-md'>Go Live</button>
          </a>
          <a href={demo}>
            <button className='px-5 py-2 text-[#000] bg-blue-100 rounded-md'>Demo</button>
          </a>
          <a href={code}>
            <button className='px-5 py-2 text-[#000] bg-blue-100 rounded-md'>{'<Code/>'}</button>
          </a>
        </div>
    </div>
  )
}
