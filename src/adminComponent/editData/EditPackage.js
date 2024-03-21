import React from 'react'

export default function EditPackage() {
  return (
    <div>
         <div className='pt-5'>
            <label className='font-bold text-xl'>Nama Paket<span className='text-VividRed'>*</span></label>
            <div className='pt-1'>
                <input type='text' placeholder='Judul Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
            </div>
        </div>
        <div className='pt-5'>
            <label className='font-bold text-xl'>tanggal<span className='text-VividRed'>*</span></label>
            <div className='pt-1'>
                <input type='text' placeholder='Judul Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
            </div>
        </div>
        <div className='pt-5'>
            <label className='font-bold text-xl'>Jam Keberangkatan<span className='text-VividRed'>*</span></label>
            <div className='pt-1'>
                <input type='text' placeholder='Judul Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
            </div>
        </div>
        <div className='pt-5'>
            <label className='font-bold text-xl'>Benefit<span className='text-VividRed'>*</span></label>
            <div className='pt-1'>
                <input type='text' placeholder='Judul Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
            </div>
        </div>
        <div className='pt-5'>
            <label className='font-bold text-xl'>Harga<span className='text-VividRed'>*</span></label>
            <div className='pt-1'>
                <input type='text' placeholder='Judul Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
            </div>
        </div>
        <div className='pt-10'>
            <button className='bg-VividRed text-white w-[1500px] flex items-center justify-center h-10 rounded-xl'>Edit<img src='./adminAssets/arrow-right.svg' alt='simpan'></img></button>
        </div>
    </div>
  )
}
