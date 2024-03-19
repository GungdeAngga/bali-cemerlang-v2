import React from 'react'

export default function PackageMenu() {
  return (
    <div className='flex pt-3'>
        <p className='text-5xl font-bold text-VividRed font-poppins pr-5'>Package</p>
        <a href="/AdminTambahOffer" className='bg-VividRed rounded-md flex items-center justify-center w-28 text-white'><img src='./adminAssets/tambah.svg' alt='tambah'/>Tambah</a>
    </div>
  )
}
