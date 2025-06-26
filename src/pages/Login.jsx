import React, { useContext, useState } from 'react';
import Images from '../constants/Images';
import { Link, useNavigate } from 'react-router-dom';
import { Mycontext } from '../context/Index';


const Login = () => {
    const {log,lognam,logpass,setLognam,setLogpass}= useContext(Mycontext)
    const navi = useNavigate()
    
    const login = ()=>{
        if (log(lognam, logpass)) {
            navi("/Dashboard")
        }else{
            alert("rak ralati")
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
                     <h1 className='font-bold text-[40px]'>BOOKS</h1>
                    <p className='font-bold text-[15px] text-black/60'>Hey enter you details to sign in to your account</p>
                   </div>
                    <div className='flex flex-col items-center gap-2'>
                    <input value={lognam} onChange={(e)=>{setLognam(e.target.value)}} type="text" placeholder='Enter your username/email'className='text-center w-[25vw] h-[6vh] bg-white rounded-[10px]'/>
                    <input value={logpass} onChange={(e)=>{setLogpass(e.target.value)}} type="password" placeholder='Enter your password'className='text-center text-center w-[25vw] h-[6vh] bg-white rounded-[10px]' />
                    <button onClick={()=>login()} className='bg-yellow-800/50 px-8 py-2 mt-4 cursor-pointer rounded-[10px] hover:bg-yellow-800/20'>Login In</button>
                    </div>
                    <p>Don't have an account? <Link to="Signup"><span className='font-bold'>Signup Now</span></Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;