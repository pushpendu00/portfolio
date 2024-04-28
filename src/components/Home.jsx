import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/images/profile-pushpendu-removebg.png';
import { Icon } from '@iconify/react/dist/iconify.js';
import { base_url } from '../utils/constant';
import { BeatLoader } from 'react-spinners';

export const Home = (props) => {
    const {ipAddress, ipdetils, setIpDetils} = props;

    const [isLodar, setIsLoader] = useState(false);

    async function Handel_follow_unfollow(ipAddress,status){
        try{
            setIsLoader(true);
          const response = await fetch(`${base_url}/ip/follow-unfollow`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ipAddress,status
            }),
          });
          const jsonData = await response.json();
            // console.log(jsonData);
            setIpDetils(jsonData.updateIp);
            setIsLoader(false);
        }catch(err){
          return;
        }
    }


  return (
    <div className='px-5 py-[50px] w-full flex flex-col items-center gap-5 md:flex-row md:justify-around'>
        <div className='w-full md:w-[45%] font-bold text-white'>
            <span className='text-[19px] md:text-2xl flex flex-col items-center'>
                <span className='text-2xl text-[rgb(170,198,255)]'>Hi, I am <br /></span>
                <span className='text-4xl from-[#4cff8f]  to-[#f065f4] bg-gradient-to-r bg-clip-text text-transparent'>Pushpendu Jana <br /></span>
                <span className='text-2xl text-[#ffa372]'>And I am a</span> 
                    <span className='underline text-3xl md:text-4xl text-[#fff]'>
                    {/* ff8949 */}
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                2000,
                                'Backend Developer',
                                2000,
                                'Full Stack Developer',
                                2000,
                            ]}
                            speed={1}
                            // style={{ fontSize: '1.5em' }}
                            repeat={Infinity}
                        />
                    </span>
            </span>
            <div className='w-full py-5 flex items-center justify-center gap-10 '>
                {/* {ipdetils === undefined?(<></>):(
                    <> */}
                        {ipdetils.follow?(
                            <>
                                {isLodar?(
                                    <div className='px-5 py-2 text-xl rounded-md bg-[#3b8aff]'>
                                        <BeatLoader color="white" loading={isLodar} />
                                    </div>
                                ):(
                                    <button onClick={()=>Handel_follow_unfollow(ipAddress,false)} className='px-5 py-2 text-xl rounded-md bg-[#3b8aff]'>unfollow</button>
                                )}
                            </>
                            ):(
                                <>
                                    {isLodar?(
                                        <div className='px-5 py-2 text-xl rounded-md bg-[#3b8aff]'>
                                            <BeatLoader color="white" loading={isLodar} />
                                        </div>
                                    ):(
                                        <button onClick={()=>Handel_follow_unfollow(ipAddress,true)} className='px-5 py-2 text-xl rounded-md bg-[#3b8aff]'>Follow</button>
                                    )}
                                </>
                        )}
                    {/* </>
                )} */}
            </div>
            <div className='py-5 w-full flex justify-center gap-6'>
                <a href='https://github.com/pushpendu00' target='_blank' rel="noopener noreferrer">
                    <Icon icon="devicon:github" height={35} style={{background:'white'}} className='rounded-full cursor-pointer box shadow-lg  hover:shadow-[#bbbbbb] hover:scale-105' />
                </a>
                <a href='https://www.linkedin.com/in/pushpendu-jana-a97a04221' target='_blank' rel="noopener noreferrer">
                    <Icon icon="skill-icons:linkedin" height={35} style={{background:'white'}} className='rounded-full cursor-pointer box shadow-lg hover:shadow-[#bbbbbb] hover:scale-105' />
                </a>
                <a href='https://www.youtube.com/@PupaiJ' target='_blank' rel="noopener noreferrer">
                    <Icon icon="mdi:youtube" height={35}  style={{color: '#ff0000',background:'white'}} className='rounded-full cursor-pointer box shadow-lg hover:shadow-[#bbbbbb] hover:scale-105'/>
                </a>
                <a href='https://leetcode.com/pushpendu00' target='_blank' rel="noopener noreferrer">
                    <Icon icon="cib:leetcode" height={35}  style={{color: '#bd9832',background:'white'}} className='rounded-full cursor-pointer box shadow-lg hover:shadow-[#bbbbbb] hover:scale-105' />
                </a>
            </div>
        </div>
        <div className='w-full md:w-[45%] rounded-full flex items-center justify-center'>
            <img src={profile} className='w-[70%] rounded-full md:rounded-lg' alt="profile" />
        </div>
    </div>
  )
}
