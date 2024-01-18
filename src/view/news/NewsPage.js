import React from 'react'
import StaticNavbar from '../../component/navbar/StaticNavbar'
import Footer from '../../component/footer/Footer'
import NewsContent from '../../component/newsComponent/NewsContent'

export default function NewsPage() {
  return (
    <div>
        <StaticNavbar/>
        <NewsContent/>
        <Footer/>
    </div>
  )
}
