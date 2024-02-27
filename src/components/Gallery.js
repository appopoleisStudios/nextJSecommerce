import React from 'react'


const Gallery = () => {
  return (

    <>

      <section className='flex flex-col lg:flex-row '>
        <div className='relative w-full lg:w-1/2 h-screen flex p-2 flex-col justify-center' style={{ backgroundColor: "#FAE3D9" }}>
          <div className='flex flex-col justify-center'>
            <h1 className='text-3xl lg:text-4xl font-bold' style={{ fontFamily: "serif" }}>Women’s fashion</h1>
            <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing el</p>
            <a href="#" className="text-black font-semibold hover:underline mt-4" style={{ textDecoration: 'underline', color: 'darkred' }}>Shop Now</a>
          </div>

          <div className='absolute bottom-0 right-0 h-3/5 lg:h-full '>
            <img src='./images/first1.png' className='h-full' alt="Women's Fashion" />
          </div>
        </div>


        <div className=' w-full lg:w-1/2 h-auto lg:h-screen flex flex-col justify-between '>



          <div className=" flex flex-col lg:flex-row items-center justify-evenly w-auto  m-2  gap-2 relative ">
            <div className=" bg-yellow-300  w-96 h-80 flex p-10 justify-between relative" style={{ backgroundColor: "#BEE2D6" }}>


              <div className='flex flex-col '>
                <h1 className='text-4xl font-bold' style={{ fontFamily: "serif", }}>Men’s fashion</h1>
                <p>358 items</p>
                <a href="#" className="text-black font-semibold hover:underline mt-4 " style={{ textDecoration: 'underline', color: 'darkred' }}>Shop Now</a>

              </div>


              <img src="./images/img22.png" alt="Image 1" className="absolute  right-0 bottom-0 w-1/2" />
            </div>


            <div className=" bg-yellow-300 w-96 h-80 flex  p-10 relative" style={{ backgroundColor: "#D6D3F0" }}>
              <div className='flex flex-col '>
                <h1 className='text-4xl font-bold' style={{ fontFamily: "serif", }}>Kid’s fashion</h1>
                <p>273 items</p>
                <a href="#" className="text-black font-semibold hover:underline mt-4" style={{ textDecoration: 'underline', color: 'darkred' }}>Shop Now</a>

              </div>
              <img src="./images/img3.png" alt="Image 2" className="absolute  left-0 bottom-0 " />
            </div>
          </div>


          <div className="flex flex-col lg:flex-row items-center justify-evenly m-2 w-auto gap-2 relative">
            <div className=" bg-yellow-300 p-10 w-96 h-80 flex   relative" style={{ backgroundColor: "#FEDBE4" }}>

              <div className='flex flex-col '>
                <h1 className='text-4xl font-bold' style={{ fontFamily: "serif", }}>Cosmetics</h1>
                <p>159 items</p>
                <a href="#" className="text-black font-semibold hover:underline mt-4" style={{ textDecoration: 'underline', color: 'darkred' }}>Shop Now</a>

              </div>
              <img src="./images/img2.png" alt="Image 1" className="absolute right-0 bottom-0  w-1/2" />
            </div>
            <div className=" bg-yellow-300 p-10 w-96 h-80 flex   relative " style={{ backgroundColor: "#CEE2F5" }}>

              <div className='flex flex-col '>
                <h1 className='text-4xl font-bold' style={{ fontFamily: "serif", }}>Accessories</h1>
                <p>792 items</p>
                <a href="#" className="text-black font-semibold  mt-4" style={{ textDecoration: 'underline', color: 'darkred' }}>Shop Now</a>

              </div>
              <img src="./images/img4.png" alt="Image 2" className="absolute left-0 bottom-0 " />
            </div>
          </div>
        </div>
      </section >

    </>
  )
}

export default Gallery
