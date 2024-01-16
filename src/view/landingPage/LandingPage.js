import React from 'react'
import ShrinkingNavbar from '../../component/navbar/ShrinkingNavbar'
import SearchInput from '../../component/search/SearchInput'
import Content from '../../component/slider/Content'

export default function LandingPage() {
  return (
    <div className="h-screen overflow-y-visible">
      <div className="w-full mx-auto">
        <img src='/assets/background.png' alt='background' className='w-full bg-cover'/>
      </div>
        <ShrinkingNavbar/>
        <SearchInput/>
        <Content/>
    </div>
  )
}
