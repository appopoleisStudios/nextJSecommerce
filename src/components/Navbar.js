import React, { useState } from 'react'





const Navbar = () => {

  let Links = [
    { name: "Home", link: "/" },
    { name: "service", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Conatct", link: "/" },
  ];

  let [open, setOpen] = useState(false)




  return (
    <>
      <div className='shadow-md w-full  top-0 left-0 '>
        <div className='md:flex items-center justify-between bg-white p-4'>
          <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'></span>
            <img src="/images/appo.jpg" alt="not found"
              className="w-48 h-30 "
            />
          </div>
          <div onClick={() => setOpen(!open)} className='.
         absolute right-8 top-6 cursor-pointer md:hidden ' style={{ fontSize: '38px' }}>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                </li>
              ))
            }

          </ul>

          <div>
            <div className="flex space-x-4 items-center">
              <ul className="flex gap-4">
                <li><a href="/login" className="text-blue-500 hover:text-blue-700">Login</a></li>
                <li><a href="/register" className="text-blue-500 hover:text-blue-700">Register</a></li>
              </ul>
              <ion-icon name="heart" className="text-xl"></ion-icon>
              <ion-icon name="card" className="text-xl"></ion-icon>
              <ion-icon name="search" className="text-xl"></ion-icon>
            </div>
          </div>

        </div>



      </div>
    </>

  )
}

export default Navbar
