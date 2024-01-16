import React from 'react'
import ShrinkingNavbar from '../../component/navbar/ShrinkingNavbar'
import SearchInput from '../../component/search/SearchInput'
import Content from '../../component/slider/Content'

export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="w-full mx-auto">
        <img src='/assets/background.png' alt='background' className='w-full bg-cover'/>
      </div>
        <ShrinkingNavbar/>
        <SearchInput/>
        <Content/>

        <div class='flex items-center justify-center'>
          <div class='flex flex-row'>
            <div className='pt-11 md:pt-9 lg:pt-16'>
              <img src='./assets/Barong.png' alt='barong' class='p-2 w-20 h-20 md:w-40 md:h-40 lg:h-full lg:w-full lg:px-10'/> 
            </div>
            
            <div class='px-1 md:px-5 lg:px-10 lg:pt-32'>
              <p class='font-poppins font-bold text-sm pt-6 md:text-xl lg:text-3xl '>Why Choose Bali Cemerlang Tour?</p>
              <p class='font-poppins text-xs pt-1 md:text-xl lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p class='font-poppins text-xs pt-1 md:text-xl lg:text-xl'>✔️ Best price range</p>
              <p class='font-poppins text-xs pt-1 md:text-xl lg:text-xl'>✔️ Experienced for more than 10 years</p>
              <p class='font-poppins text-xs pt-1 md:text-xl lg:text-xl'>✔️ A variety of accommodations to choose from</p>
              <button class='mt-2 h-7 w-24 md:h-12 md:w-36 md:text-lg lg:mt-6 lg:h-14 lg:w-44 lg:text-xl bg-VividRed rounded-full font-poppins text-xs text-white'>
                  About Us
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
