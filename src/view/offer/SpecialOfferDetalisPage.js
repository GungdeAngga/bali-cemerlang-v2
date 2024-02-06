import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'
import { Link } from 'react-router-dom'

export default function SpecialOfferDetalis() {
  return (
    <div>
        <StaticNavbar/>
        <div className='w-3/4 m-auto '>

            <div className='mt-20 md:mt-28 lg:mt-44'>
            <Link to='/SpecialOfferPage'>
                <img src='./assets/back.svg' alt='back' className='ml-1 w-6 h-6 md:w-10 md:h-10'/>
            </Link>
            <div className='text-center text-xs md:text-sm lg:text-base lg:-mt-8'>
                <p className='font-bold'>Discount 50%</p>
            </div>

            <div className='lg:flex lg:flex-row mt-14 mb-20 md:mb-40 lg:mt-20 lg:mb-32'>
                <div className='lg:basis-1/2'>
                <div className='h-40 md:h-64 lg:h-96 flex justify-center items-center rounded-t-xl'>
                    <img src='./assets/Besakih.jpg' alt='' className='h-full w-full object-cover rounded-t-lg lg:rounded-lg'/>
                </div>
                </div>
                
                <div className='lg:basis-1/2'>
                <div className='flex flex-col justify-center items-center gap-1 p-2 lg:gap-4 lg:p-4 mt-5'>
                <p className='text-xs md:text-sm lg:text-base text-justify px-3'>Perjalanan ke pura besakih mendapatkan diskon 50%</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}
