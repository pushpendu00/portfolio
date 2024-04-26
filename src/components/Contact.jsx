import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react';
// import BeatLoader from "react-spinners/BeatLoader";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { base_url } from '../utils/constant';
import { BeatLoader } from 'react-spinners';

export const Contact = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLodar, setIslodar] = useState(false);



  async function HandelSubmit(event){
    try {
      event.preventDefault();
      setIslodar(true);
      const fetch_data = await fetch(`${base_url}/message/add`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        name,
        phone,
        message,
      }),
    });
    const jsonData = await fetch_data.json();
    if(jsonData.status === 200){
      setName('');
      setPhone('');
      setMessage('');
      toast.success("Message Sucessfully Send");
    }else{
      toast.error("Server Down! Please Try Again");
    }

     setIslodar(false);
      
    } catch (error) {
      // console.log(error);
      toast.error("Technical Error! Please Try Again");
      setIslodar(false);
      // setIslodar(true);
    }
  }

  return (
    <>
      <div className='w-full flex flex-col items-center'>
          <h1 className='flex justify-center items-center gap-5'>
              <Icon icon="grommet-icons:contact" width="30" height="30"  style={{color: '#f674ff'}} />
              <span className='text-4xl font-bold from-[#f674ff] to-[#ff6b19] bg-gradient-to-r bg-clip-text text-transparent'>Contact</span>
          </h1>


          <form onSubmit={HandelSubmit} className='w-[80%] md:w-[60%] lg:w-[40%]  flex flex-col gap-5 py-5' action="">
              <input value={name} onChange={(e)=>setName(e.target.value)} className='h-12 p-2 outline-none rounded-md bg-[#4b4b4b]' type="text" placeholder='Enter Your Full Name' required />
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} className='h-12 p-2 outline-none rounded-md bg-[#4b4b4b]' type="number" placeholder='Enter Your 10 Digits Phone Number' required />

              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className='p-2 rounded-md resize-none outline-none bg-[#4b4b4b]' name="" id="" cols="30" rows="5" placeholder='Text Here !' required></textarea>
              {isLodar?(
                <>
                  <div className='h-12 mt-7 rounded-md text-2xl font-semibold bg-blue-600 flex items-center justify-center'>
                    <BeatLoader color="white" loading={isLodar} />
                  </div>
                </>
              ):(
                <>
                  <button className='h-12 mt-7 bg-blue-500 rounded-md text-2xl font-semibold hover:bg-blue-600' type='submit'>Send</button>
                </>
              )}
          </form>
      </div>


      <ToastContainer
        position="top-center"
        autoClose={3000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}
