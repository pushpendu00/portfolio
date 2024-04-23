import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import {ButtonLiveDemoCode} from '../components/shared/ButtonLiveDemoCode';

export const Projects = () => {
  return (
    <div className='project-div w-full flex flex-col items-center'>
        <h1 className='project-head w-full flex justify-center items-center gap-5 pb-10'>
            <Icon icon="grommet-icons:projects" width="30" height="30"  style={{color: '#f674ff'}} />
            <span className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>Projects</span>
        </h1>

        <ul className='w-[90%] flex flex-col gap-10'>

            {/* project 1 */}
            <li className='w-full'>
                <div className='text-center py-10 text-2xl font-semibold underline text-green-500'>1. Spotify Clone</div>
                <div className='flex flex-col md:flex-row  justify-center items-center gap-5'>
                    <img className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md' src={require('../assets/images/projects/spotify.PNG')} alt="Spotify" />
                    <div className='w-full'>
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                This is Music Player App like to Spotify App.
                            </p>
                        </div> <br />
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                User login authentication, Search any Artist or song, Follow and Unfollow Artist
                            </p>
                        </div> <br />
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                Like and Play any song.
                            </p>
                        </div> <br />
                        <ButtonLiveDemoCode live={'https://4ypg4s-3000.csb.app'} 
                                            demo={'#'} 
                                            code={'https://github.com/pushpendu00/Spotify_Clone'}
                                            />
                    </div>
                </div>
            </li>

            {/* progect 2 */}
            <li className='w-full'>
                <div className='text-center py-10 text-2xl font-semibold underline text-amber-500'>2. Pizza Only</div>
                <div className='flex flex-col-reverse md:flex-row  justify-center items-center gap-5'>
                    <div className='w-full'>
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                This is Pizza delivery application.
                            </p>
                        </div> <br />

                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                Create an admin login and a user login with complete registration, authorization, email verification, and forgot password system.
                            </p>
                        </div> <br />

                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                            Integrate the razor pay checkout for payment. Create a
                            dummy account and integrate the test mode. In test
                            mode, on clicking success, place and confirm the order.
                            </p>
                        </div> <br />

                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                Admin must receive the order and change the status of
                                the pizza- as order received, In the kitchen, and Sent to
                                delivery.
                            </p>
                        </div> <br />

                        <ButtonLiveDemoCode live={'https://k9tjt9-3000.csb.app/'} 
                                            demo={'#'} 
                                            code={'https://github.com/pushpendu00/pizza_delivery_app'}
                        />

                    </div>
                    <img className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md' src={require('../assets/images/projects/pizza-only.PNG')} alt="Spotify" />
                </div>
            </li>

            {/* progect 3 */}
            <li className='w-full'>
                <div className='text-center py-10 text-2xl font-semibold underline text-blue-400'>3. Facebook Clone</div>
                <div className='flex flex-col md:flex-row  justify-center items-center gap-5'>
                    <img className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md' src={require('../assets/images/projects/facebook.PNG')} alt="Spotify" />
                    <div className='w-full'>
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                This is Social Media App like Facebook.
                            </p>
                        </div> <br />
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                User login authentication, login user can post only, login user can comment and like of any user’s post.
                            </p>
                        </div> <br />
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                Send friend request, accept request, and delete.
                            </p>
                        </div> <br />
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                Only login user delete post or comment and remove like also (Like Facebook features).
                            </p>
                        </div>
                        <br />
                        <div className='flex'>
                            <span className='font-bold'>&#8226;&emsp;</span>
                            <p>
                                Using skills  : -  HTML, CSS, Javascript, Ajax, Api, Node Js, Express Js, JWT Token, Ejs, MongoDB
                            </p>
                        </div>
                        <br />
                        <ButtonLiveDemoCode live={' https://8nw73l-4400.csb.app'} 
                                            demo={'#'} 
                                            code={'https://github.com/pushpendu00/Facebook_Clone'}
                                            />
                    </div>
                </div>
            </li>

            {/* <li className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md m-2 bg-[#f674b8]'>
                <img className='h-full w-full rounded-md' src={require('../assets/images/projects/pizza-only.PNG')} alt="pizza only" />
            </li>
            <li className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md m-2 bg-[#f674b8]'>
                <img className='h-full w-full rounded-md' src={require('../assets/images/projects/facebook.PNG')} alt="pizza only" />
            </li> */}
            {/* <li className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md m-2 bg-[#f674b8]'>4th Projects</li>
            <li className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md m-2 bg-[#f674b8]'>5th Projects</li>
            <li className='h-[calc(50vw)] w-[100%] md:h-[calc(25vw)] md:w-[45%] lg:h-[calc(20vw)] lg:w-[40%] rounded-md m-2 bg-[#f674b8]'>6th Projects</li> */}
        </ul>
    </div>
  )
}
