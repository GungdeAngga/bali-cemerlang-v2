import React from 'react'

export default function TotalPrice() {
  return (
    <div className='pt-4 lg:pt-10'>
        <div className='flex text-lg md:text-2xl lg:text-4xl w-10/12 m-auto h-12 md:ml-10 md:w-[685px] md:h-16 lg:w-[900px] lg:h-[100px] font-bold border-4 border-gray-400 rounded-xl'>
            <div className='mt-1 ml-3 md:mt-2 lg:pt-5 lg:pl-5'>Payment</div>
            <div className='mt-1 pl-32 md:mt-2 md:pl-[420px] lg:pt-5 lg:pl-[490px]'>Rp.<span className='pt-6'>500.000</span></div>
        </div>
    </div>
  )
}
