import React from 'react'
import SideBar from '../adminComponent/sideBar/SideBar'
import SearchMenu from '../adminComponent/search/SearchMenu'
import Garis from '../adminComponent/garis/Garis'
import AddPromo from '../adminComponent/tambahData/AddPromo'

export default function AddOfferPage() {
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
        <div className='flex pt-3'>
          <div className='flex items-center justify-center pr-5'>
            <a href='/Promo'><img src='./adminAssets/back1.svg' alt='back' className='w-8 '/></a>
          </div>
          <p className='text-5xl text-VividRed font-bold'>Tambah Promo</p>  
        </div>
        <Garis/>
        <div>
          <AddPromo/>
        </div>
      </div>
      <p className='absolute bottom-8 right-10 text-VividRed font-bold'>© 2023 Designed & Develop by CV Maiharta</p>
    </div>
  </div>
  )
}
