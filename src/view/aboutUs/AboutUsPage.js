import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'

export default function AboutUsPage() {
  return (
    <div>
        <StaticNavbar/>
        <div className='mt-20 md:mt-32 lg:mt-44'>
            <div className='ml-10 text-xl md:text-3xl lg:text-5xl lg:ml-20'>
                <span className='font-bold'>About</span> <span>Us</span>
            </div>

            <div className='flex flex-col mt-5 md:flex md:flex-row md:mt-16'>
                <div className='md:basis-1/2'>
                    <div className='px-10 flex flex-col text-justify text-sm md:text-lg lg:text-xl lg:px-20'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        <span className='mt-8 md:mt-14'>Team,</span>
                        <span className='md:mb-24'>Bali Cemerlang</span>
                    </div>
                </div>

                <div className='md:basis-1/2'>
                    <div className='px-10 mt-6 mb-8 lg:mt-0 lg:mb-16 lg:px-20'>
                        <img src='./assets/aboutUs.svg' alt='aboutus' className=''/>
                    </div>

                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}
