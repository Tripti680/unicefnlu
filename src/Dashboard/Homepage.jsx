import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import MarqueeComponent from '../Components/Marquee'
import NewsLegal from '../Components/NewsLegal'
import Resourcematerial from '../Components/Resourcematerial'
import Opinion from '../Components/Opinion'
import Notefield from '../Components/Notefield'
import Footer from '../Components/Footer'


function Homepage() {
  return (
    <div>
      <Header />
      <Banner />
  
     <MarqueeComponent />
     <Resourcematerial />
     <NewsLegal />
     <Opinion />
     <Notefield />
     <Footer />
     
    </div>
  )
}

export default Homepage
