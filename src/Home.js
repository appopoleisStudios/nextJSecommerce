import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Product from './components/Product'



import TextCarousel from './components/Textcarousel'
import Category from './Category'
import Timing from './components/Timing'
import Fax from './components/Fax'
import Footer from './components/Footer'


const Home = () => {
  return (
    <>

      <Navbar />
      <Gallery />
      <Product />
      {/* <CarouselImg /> */}
      <TextCarousel />
      <Category />
      <Timing />
      <Fax />
      <Footer />


    </>
  )
}

export default Home
