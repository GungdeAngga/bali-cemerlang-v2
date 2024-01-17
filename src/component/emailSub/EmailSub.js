import React from 'react'

export default function EmailSub() {
    const handleSubscribe = () => {
        // Handle the subscription logic here, e.g., sending the email to a server.
        // You can add your specific functionality here.
        alert('Subscribed with email: ' + document.getElementById('email').value);
      };
  return (
    <div className='flex justify-center item-center h-40 md:h-60 lg:h-72'>
      <div className='w-full'>
        <div className='text-center pt-6 md:pt-10 lg:pt-14'>
          <p className='text-sm md:text-lg lg:text-2xl font-bold pb-2'>Enter Your Email</p>
          <p className='text-xs md:text-sm lg:text-base'>Join our newsletter to receive our latest special offers.</p>
        </div>
        <div className='flex justify-center item-center pt-2 md:pt-3 lg:pt-6'>
          <input
          className="border-2 rounded-xl w-[200px] h-8 md:h-10 md:w-[340px] lg:w-[420px] py-2 px-3 text-gray-700 border-gray-400 leading-tight text-xs md:text-sm lg:text-base"
          id="email"
          type="email"
          placeholder="Enter your email"
          />
          <button
          onClick={handleSubscribe}
          className="bg-VividRed hover:bg-VividRed2 text-white font-bold p-2 lg:py-2 lg:px-4 rounded-xl focus:outline-none focus:shadow-outline -ml-7 text-xs md:text-sm lg:text-base h-8 md:h-10"
           >
            Subscribe
           </button>
        </div>
        <div class='text-center pt-1 md:pt-2 text-xs md:text-sm lg:text-base'>
          by subscribing you have agreed our <a href='/' class="inline text-DarkBlue">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}
