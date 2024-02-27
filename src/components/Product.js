import React, { useState } from 'react';
import Productinfo from './Productinfo';

const Product = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='p-5'>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <a href="./components/Productinfo.js" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Product</span>
            </a>
            <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
              <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"></a>

              <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded={isMenuOpen ? "true" : "false"}>
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div id="mega-menu" className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}>
              <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                  <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">All</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Women’s</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Men’s</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Kid’s</a>
                </li>

                <li>
                  <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"> Accessories</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page"> Cosmetics</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <section class="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center md:justify-start m-4"> {/* Centering in small screens and starting from the left in medium and larger screens */}
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" className="flex-shrink-0 rounded-lg w-56 h-96 object-cover object-center mb-4" src="images/product1.jpg" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Buttons tweed blazer</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p className="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>

              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product3.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Flowy striped skirt</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 49.0</p>
                  </div>
                </div>
              </div>


              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product2.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Cotton T-Shirt</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>


              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product4.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Fit micro corduroy shirt</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>


              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product5.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Tropical Kimono</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>


              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product7.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Contrasting sunglasses</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>


              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product6.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Slim striped pocket shirt</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>



              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-56 h-96  object-cover object-center mb-4" src="images/product8.jpg" />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">Water resistant backpack</h2>
                    <h3 className="text-gray-500 mb-3">
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                      <i className="fa-solid fa-star text-yellow-500"></i>
                    </h3>
                    <p class="mb-4">$ 59.0</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>


    </>
  )
}

export default Product;
