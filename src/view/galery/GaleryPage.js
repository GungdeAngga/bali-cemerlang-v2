import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'
import GaleryContent from '../../component/galeryComponent/GaleryContent'

export default function GaleryPage() {
  return (
    <div>
        <StaticNavbar/>
        <GaleryContent/>
        <Footer/>
    </div>
  )
}
