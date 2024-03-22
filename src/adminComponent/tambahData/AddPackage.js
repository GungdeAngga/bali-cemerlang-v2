import React, { useState } from 'react'
import useQuery from "../../component/util/hooks/useQuery";
import { addPackage } from "../../component/util/api/api";

export default function AddPackage() {
    const [inputValue, setInputValue] = useState('');

      const { data: dataPackage, isLoading, isError } = useQuery(addPackage);

      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>error</div>;
      }
    
      if (!dataPackage) {
        return null;
      }
  return (
    <div>
         <div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Nama paket<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' value={inputValue.nama_paket} onChange={(e) => setInputValue(e.target.value)} placeholder='Judul Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Tanggal<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' value={inputValue.tanggal} onChange={(e) => setInputValue(e.target.value)} placeholder='Isi Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Jam Keberangkatan<span className='text-VividRed'>*</span></label>
        <div className='flex flex-row border-2 border-gray-400 rounded-lg h-9 py-4 px-2 items-center'>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Benefit<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' value={inputValue.benefit} onChange={(e) => setInputValue(e.target.value)} placeholder='Isi Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
      <div className='pt-5'>
        <label className='font-bold text-xl'>Harga<span className='text-VividRed'>*</span></label>
        <div className='pt-1'>
          <input type='text' value={inputValue.harga} onChange={(e) => setInputValue(e.target.value)} placeholder='Isi Promo' className='w-full outline-none placeholder-gray-400 border-2 border-gray-400 rounded-lg pl-2'/>
        </div>
      </div>
     
      <div className='pt-10'>
        <button className='bg-VividRed text-white w-[1500px] flex items-center justify-center h-10 rounded-xl'>Tambah<img src='./adminAssets/arrow-right.svg' alt='simpan'></img></button>
      </div>
    </div>
    </div>
  )
}
