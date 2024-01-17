import React from 'react'

export default function ContactUs() {
    const openWhatsapp = () => {
        window.open('https://api.whatsapp.com/send?phone=628113971099', '_blank');
      };
  return (
    <div class='flex justify-center item-center h-28 md:h-40 lg:h-52'>
        <div class='w-full  bg-LightShadeofGray'>
            <div class='pt-6 md:pt-10 lg:pt-14'>
                <div class='text-center'>
                    <p className='text-sm md:text-lg lg:text-2xl font-bold'>Contact us for Payment</p>
                </div>
                <div class='flex justify-center item-center pt-3'>
                <button class='h-6 w-32 pl-2 md:h-8 md:w-40 md:pl-4 lg:h-10 lg:w-56 lg:pl-10 bg-VividRed rounded-full font-poppins text-xl text-white ' onClick={openWhatsapp}>
                    <div class='flex items-center text-xs md:text-sm lg:text-base'>
                       <img src='./assets/WA.svg' alt='Wa' class='ml-[22px] mr-1 w-3 h-3 md:mr-2 md:w-5 md:h-5 lg:ml-6 lg:w-6 lg:h-6 '/>
                        Contact Us 
                    </div>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}
