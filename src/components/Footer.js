import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h1 className="text-xl font-semibold mb-4">Fashion</h1>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
            <nav className="list-none">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Blogs</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a>
              </li>
            </nav>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">ACCOUNT</h2>
            <nav className="list-none">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">My Account </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Orders Tracking</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Checkout</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Wishlist</a>
              </li>
            </nav>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <form className="max-w-xs mx-auto">
              <label htmlFor="email" className="sr-only">Subscribe to our newsletter</label>
              <input type="email" id="email" className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Subscribe" required />
              <button type="submit" className="w-full bg-red-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <span className="text-gray-600">© 2024 All rights reserved</span>
        <span className="text-sm text-gray-500 mt-4 md:mt-0">This template is made with ❤️ by Appopoleis</span>
      </div>
    </footer>
  );
}

export default Footer;
