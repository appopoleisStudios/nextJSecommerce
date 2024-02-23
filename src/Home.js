import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Product from './components/Product'

import Button from './components/Button'

import TextCarousel from './components/Textcarousel'


const Home = () => {
  return (
    <>

      <Navbar />
      <Gallery />
      <Product />
      {/* <CarouselImg /> */}
      <TextCarousel />

      <Button />
    </>
  )
}

export default Home
