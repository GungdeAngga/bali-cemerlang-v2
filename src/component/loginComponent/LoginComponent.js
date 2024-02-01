import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

export default function LoginComponent() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <div>
        <p className='text-xl md:text-3xl font-bold'>Login</p>
        <p className='text-sm md:text-lg mt-2'>Login to access your Golobe account</p>

        <div className='flex flex-col mt-2'>
            <label className='absolute bg-white w-[47px] ml-2 pl-1 text-sm md:text-lg md:w-[58px]'>E-mail</label>
            <input type='text' className='border-2 rounded-sm mt-[10px] p-1 md:mt-4'/>
        </div>
        
        <div className='flex flex-col mt-2'>
            <label className='absolute bg-white w-[66px] ml-2 pl-1 text-sm md:text-lg md:w-[82px]'>Password</label>
            <input 
            type={showPassword ? 'text' : 'password'}
            className='border-2 rounded-sm mt-[10px] p-1 md:mt-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className=" -mt-7 ml-[300px] lg:ml-[800px]"
            >
                {showPassword ? (
                <FaRegEyeSlash className="h-5 w-5 text-gray-500" />
                ) : (
                <FaRegEye className="h-5 w-5 text-gray-500" />
                )}
            </button>
        </div>
        
        <div className='flex flex-row mt-8 text-sm md:text-base'>
            <div className='basis-1/2'>
                <input
                type="checkbox"
                id="myCheckbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="h-3 w-3 md:h-4 md:w-4 text-green-500 mt-1"
                />
                <label htmlFor="myCheckbox" className="ml-1 ">
                    Remember Me
                </label>
            </div>
            
            <div className='basis-1/2 text-right'>
                <a href="/ForgotPasswordPage" className='md:text-right text-VividRed'>Forgot Password?</a>
            </div>
        </div>

        <div className='flex flex-col mt-6 text-sm md:text-base'>
            <button className='bg-VividRed  w-full rounded-sm text-white font-bold h-7 md:h-10'>Login</button>
            <span className='text-center mt-2'>
                Don't have any account? 
                <a href='/RegisterPage' className='text-VividRed ml-1'>sign up</a> 
            </span>
        </div>

        <div className='flex justify-center mt-6 border-t text-xs md:mt-10'>
            <span className='absolute -mt-[10px] bg-white px-1 text-slate-400'>Or login With</span>
        </div>

        <div className='mt-14'>
            <button className='border border-VividRed w-full h-9 '>
                <img src='./assets/google.svg' alt='google' className='m-auto'/>
            </button>
        </div>
    </div>
  )
}
