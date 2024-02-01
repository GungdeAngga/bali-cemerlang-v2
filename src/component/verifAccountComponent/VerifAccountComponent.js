import React from 'react'
import { Link } from 'react-router-dom'

export default function VerifAccountComponent() {
  return (
    <div>
        <button>
            <Link to='/LoginPage'>
                <img src='./assets/back.svg' alt='back' className='w-6 h-6 md:w-8 md:h-8'/>
            </Link>
        </button>
        <p className='text-xl md:text-3xl font-bold'>Forgot your password?</p>
        <p className='text-sm md:text-lg mt-2'>Don't worry, happens to all of us. Enter your email below to recover your password</p>

        <div className='flex flex-col mt-2'>
            <label className='absolute bg-white w-[47px] ml-2 pl-1 text-sm md:text-lg md:w-[58px]'>E-mail</label>
            <input type='text' className='border-2 rounded-sm mt-[10px] p-1 md:mt-4'/>
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
