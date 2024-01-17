import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'
import PackagesContent from '../../component/packagesComponent/PackagesContent'

export default function PackagesPage() {
  return (
    <div>
        <StaticNavbar/>
        <PackagesContent/>
        <Footer/>
    </div>
  )
}
