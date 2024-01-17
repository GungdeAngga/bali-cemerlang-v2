import React from 'react'

export default function FooterSearch() {
  return (
    <div>
        <p className='text-white pt-3 text-sm md:text-lg lg:text-2xl font-bold'>Search</p>
        <div className="flex items-center pt-1 md:pt-3 lg:pt-[15px]">
            <div className="flex flex-col text-xs md:text-sm lg:text-base text-white space-y-1 md:space-y-2">
                <a href='/'>
                  Tour
                </a>
                <a href='/'>
                  Attractive
                </a>
            </div>
        </div>
    </div>
  )
}
