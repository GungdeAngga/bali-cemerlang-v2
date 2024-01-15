import React from 'react'

export default function SearchInput() {
  return (
    <div class='flex flex-col items-center -mt-12 md:-mt-20 lg:-mt-40'>

        <div className='z-10 flex flex-col justify-center items-center w-64 h-11 rounded-xl shadow-xl bg-LightGrayishViolet md:h-20 md:w-[450px] lg:h-36 lg:w-[1110px]'>
            <img src='assets/packages.svg' alt='packages' className='h-5 md:h-7 lg:h-14'/>
            <span className='font-bold text-VividRed text-xs md:text-lg lg:text-2xl'>Packages</span>
        </div>
      
        <div className='w-[330px] h-20 rounded-xl border-2 bg-LightGrayishViolet -mt-3 md:w-[650px] md:h-28 md:-mt-6 lg:w-[1500px] lg:h-48 lg:-mt-14'>
            <div className='flex items-center justify-center'>
                <div className='absolute pt-5 mr-60 md:pt-10 md:mr-[500px] lg:pt-20 lg:mr-[1230px]'>
                    <img src='./assets/search2.svg' alt='search' className='w-4 md:w-5 lg:w-7'/>
                </div>
                <div className='pt-5 md:pt-10 lg:pt-20'>
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
  )
}
