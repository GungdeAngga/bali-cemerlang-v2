import React from 'react'
import SideBar from '../adminComponent/sideBar/SideBar'
import SearchMenu from '../adminComponent/search/SearchMenu'
import OfferMenu from '../adminComponent/offer/OfferMenu'
import OfferTable from '../adminComponent/offer/OfferTable'
import Garis from '../adminComponent/garis/Garis'

export default function OfferPage() {
  return (
    <div className='flex flex-row'>
    <div className='basis-1/5'>
      <SideBar/>
    </div>
    <div className='basis-3/4'>
      <div className='flex flex-col pt-8'>
          <div className='flex border border-VividRed rounded-xl p-2 w-[1500px]'>
            <SearchMenu/>
          </div>
        <div>
          <OfferMenu/>
          <Garis/>
        </div>
        <div>
          <OfferTable/>
        </div>
      </div>
      <p className='absolute bottom-8 right-10 text-VividRed font-bold'>© 2023 Designed & Develop by CV Maiharta</p>
    </div>
  </div>
  )
}
