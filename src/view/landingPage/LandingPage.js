import React from 'react'
import ShrinkingNavbar from '../../component/navbar/ShrinkingNavbar'
import SearchInput from '../../component/search/SearchInput'
import Content from '../../component/specialOffer/Content'
import Promo from '../../component/promo/Promo'
import CustomerFeedback from '../../component/feedback/CustomerFeedback'
import EmailSub from '../../component/emailSub/EmailSub'
import ContactUs from '../../component/contactUS/ContactUs'
import Footer from '../../component/footer/Footer'


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
            <div className='pt-11 md:pt-14 lg:pt-28'>
              <img src='./assets/Barong.png' alt='barong' class='p-2 w-20 h-20 md:w-40 md:h-40 lg:h-full lg:w-full lg:px-10'/> 
            </div>
            
            <div class='md:px-5 lg:px-10 lg:pt-32 w-3/4'>
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

        <Promo/>
        <CustomerFeedback/>

        <div class='flex justify-center item-center mt-6 h-40 md:h-44 lg:h-52'>
          <div class='w-full bg-gray-300'>
            <div class='pt-8 md:pt-11 lg:pt-14'>
                <div class='text-center'>
                <p className='font-bold text-sm md:text-base lg:text-xl'>Our Partner</p>
                </div>
                <div class='flex justify-center item-center pt-5'>
                  <img src='./assets/partner1.png' alt='partner'/>
                </div>
            </div>
          </div>
        </div> 

        <EmailSub/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
