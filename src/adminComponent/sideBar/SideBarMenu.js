import React from 'react'

export default function SideBarMenu() {
  return (
    <div className='flex text-white font-bold text-3xl'>
        <ul className='space-y-7'>
            <li className='flex'>
                <a href='/AdminPage' className='flex'>
                    <img src='./adminAssets/dashboard.svg' alt='dahsboard' className='pr-3 '/>
                    dashboard
                </a>
            </li>
            <li className='flex'>
                <a href='/AdminOffer' className='flex'>
                    <img src='./adminAssets/offer.svg' alt='offer' className='pr-3'/>
                    offer
                </a>
            </li>
            <li className='flex'>
                <a href='/AdminPromo' className='flex'>
                    <img src='./adminAssets/promo.svg' alt='news' className='pr-3'/>
                    Promo
                </a>
            </li>
            <li className='flex'>
                <a href='/AdminPage' className='flex'>
                    <img src='./adminAssets/news.svg' alt='news' className='pr-3'/>
                    News
                </a>
            </li>
            <li className='flex'>
                <a href='/AdminPage' className='flex'>
                    <img src='./adminAssets/gallery.svg' alt='gallery' className='pr-3'/>
                    Gallery
                </a>
            </li>
            <li className='flex'>
                <a href='/' className='flex'>
                    <img src='./adminAssets/order.svg' alt='order' className='pr-3'/>
                    Order
                </a>
            </li>
            {/* <li className='flex'>
                <a href='/Tiket' className='flex'>
                    <img src='./AdminPage/tiket.svg' alt='tiket' className='pr-3'/>
                    Tiket
                </a>
            </li> */}
        </ul>
    </div>
  )
}
