import React from 'react'
import { Link } from 'react-router-dom'
import PackagesDetails from './PackagesDetails'



export default function PackagesContent() {
  return (
    <div className='mt-20 md:mt-32 lg:mt-44'>
        <div class=''>
            <Link to='/'>
                <img src='./assets/back.svg' alt='back' className='ml-10 md:ml-[80px] lg:ml-[120px] w-6 h-6 md:w-10 md:h-10'/>
            </Link>
            <div className='flex justify-center -mt-[26px] md:-mt-[42px] lg:-mt-[54px]'>
                <img src='assets/packages.svg' alt='packages' className='h-7 mr-2 md:h-9 lg:h-14'/>
                <div class='font-bold text-xl md:text-3xl lg:text-5xl text-VividRed'>Packages</div>
            </div>

            <div class='flex flex-col items-center mt-10 md:mt-16 lg:mt-28'>

                <div className='w-[330px] h-20 rounded-xl border-2 bg-LightGrayishViolet -mt-3 md:w-[650px] md:h-28 md:-mt-6 lg:w-[1500px] lg:h-48 lg:-mt-14'>
                    <div className='flex items-center justify-center'>
                        <div className='absolute pt-[22px] mr-60 md:pt-8 md:mr-[500px] lg:pt-16 lg:mr-[1230px]'>
                            <img src='./assets/search2.svg' alt='search' className='w-4 md:w-5 lg:w-7'/>
                        </div>
                        <div className='pt-[22px] md:pt-8 lg:pt-16'>
                            <input type='text' placeholder='search' className='pt- text-xs border-Gray65 border-2 w-72 h-7 text-left pl-10 rounded-lg hover:bg-gray-200 focus:outline-none shadow-xl md:text-lg md:w-[550px] md:h-10 lg:w-[1300px] lg:h-16 lg:pl-14'/> 
                        </div>
                    </div>
                </div>

                <div class='flex justify-center item-center -mt-4 lg:-mt-7'>
                    <button class='h-8 w-56 bg-VividRed rounded-xl font-poppins text-xs text-white md:w-[350px] md:h-10 md:text-lg lg:w-[640px] lg:h-14 lg:text-xl'>
                        SEARCH
                    </button>
                </div>
      
            </div>
        
        <div class='pt-16 pb-36'>

                <PackagesDetails/>

        </div>
        
        </div>
    </div>

  )
}
