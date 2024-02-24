import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Product from './components/Product'

import Button from './components/Button'

import TextCarousel from './components/Textcarousel'
import Category from './Category'


const Home = () => {
  return (
    <>

      <Navbar />
      <Gallery />
      <Product />
      {/* <CarouselImg /> */}
      <TextCarousel />
      <Category />

      <Button />
    </>
  )
}

export default Home
