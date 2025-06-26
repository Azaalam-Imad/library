import React, { useContext, useState } from 'react';
import Images from '../constants/Images';
import { Mycontext } from '../context/Index';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
const {sin,cpas,email,nom,password,setCpas,setEmail,setNom,setPassword} = useContext(Mycontext)

  const navig = useNavigate();
  
  const sinn = ()=>{
  if (sin()) {
    navig("/")
  }else{
    alert("rakrlati 3awd")
  }
}



    return (
         <div className=' h-[100vh] flex items-center justify-center'>
                    <div className='w-[70vw] h-[90vh] bg-amber-500/50 rounded-[10px] flex'>
                        <div className='overflow-x-hidden w-[50%] h-[100%]'>
                            <img src={Images.bg} alt="" className='object-cover h-[100%] rounded-[10px]' />
                        </div>
                        <div className='flex  flex-col items-center pl-12 pt-20 pb-9 gap-15'>
                           <div className='flex  flex-col items-center'>
                             <h1 className='font-bold text-[40px]'>BOOKS  </h1>
                            <p className='font-bold text-[15px] text-black/60'>Hey enter you details to sign Up to your account</p>
                           </div>
                            <div className='flex flex-col items-center gap-2'>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter your email'className='text-center w-[25vw] h-[6vh] bg-white rounded-[10px]'/>
                            <input value={nom} onChange={(e)=>setNom(e.target.value)} type="text" placeholder='Enter your username'className='text-center w-[25vw] h-[6vh] bg-white rounded-[10px]'/>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your password'className='text-center text-center w-[25vw] h-[6vh] bg-white rounded-[10px]' />
                            <input value={cpas} onChange={(e)=>setCpas(e.target.value)} type="password" placeholder='Confirm your password'className='text-center text-center w-[25vw] h-[6vh] bg-white rounded-[10px]' />
                            <button onClick={()=>sinn()} className='bg-yellow-800/50 px-8 py-2 mt-4 cursor-pointer rounded-[10px] hover:bg-yellow-800/20'>Sign Up</button>
                            </div>
                            
                        </div>
        
                    </div>
                </div>
    );
};

export default Signup;