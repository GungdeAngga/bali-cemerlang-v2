import React from 'react'
import NewsDetails from './NewsDetails'

export default function NewsContent() {

  return (
    <div class=''>

    <div class='mt-20 lg:mt-44'>
      <div className='text-center pb-5'>
          <p className='font-bold text-lg md:text-2xl lg:text-4xl'>News</p>
      </div>
      
    </div>

    <div className='flex flex-col lg:flex lg:flex-row mt-9'>

        <div className='basis-8/12'>
            <div className='px-8'>
                <div className='h-44 md:h-64 lg:h-96 bg-LightGrayishViolet rounded-lg border-2 border-gray-600 shadow-md'>
                    <div className='flex flex-row'>
                        <div className='basis-1/2 p-3 mt-4 md:flex md:justify-center'>
                            <img src='./assets/news1.png' alt='' className='w-28 h-28 md:w-48 md:h-48 lg:w-80 lg:h-80'/>
                        </div>
                        <div className='basis-1/2 p-1 mt-5'>
                            <div className='flex flex-col text-xs md:text-sm lg:text-base'>
                                <span>
                                    Nature
                                </span>
                                <span className='font-bold'>
                                    5 Recommended Indonesia Tourist attractions in March 2023
                                </span>
                                <div className='flex mt-2'>
                                    <img src='./assets/admin1.png' alt='' className='rounded-full w-7 h-7 lg:w-12 lg:h-12'/>
                                    <div className='ml-1 lg:ml-3'>
                                        <div>
                                            Admin Bali Cemerlang
                                        </div>
                                        <span>
                                            March 10, 2023
                                        </span>
                                    </div>
                                    
                                </div>
                                <button className='bg-VividRed rounded-xl text-white mt-3 w-20'>Read Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='basis-5/12/12 mt-5 lg:mt-0'>
            <NewsDetails/>
        </div>

    </div>
  </div>
  )
}
