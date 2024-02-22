import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Product from './components/Product'

import Button from './components/Button'
import Carousel from './components/Carousel'


const Home = () => {
  const slides = [
    "../../public/images/New2.jpg"

  ]
  return (
    <>

      <Navbar />
      <Gallery />
      <Product />
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="max-w-lg">
          <Carousel />
          {slides.map((s) => {
            <img src={s} />
          })}
        </div>
      </div>

      <Button />
    </>
  )
}

export default Home
