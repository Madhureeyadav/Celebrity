// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-pink-500 text-yellow-300 py-4">
      <div className="container mx-auto px-4 sm:px-20 flex items-center justify-between">
        <div className="text-yellow-300 text-xl font-bold">
          Famous<span className="text-yellow-300 text-lg font-extrabold">&nbsp;star's</span>
        </div>
        <div className="hidden md:flex md:items-center">
          <span className="ml-4 cursor-pointer hover:underline hover:underline-color-green font-bold">Home</span>
          <span className="ml-4 cursor-pointer hover:underline font-bold">Star</span>
          <span className="ml-4 cursor-pointer hover:underline font-bold">Singer</span>
          <span className="ml-4 cursor-pointer hover:underline font-bold">Dance</span>
        </div>
        <div className="md:hidden">
          <button className="text-yellow-300 font-semibold cursor-pointer" id="menu-toggle">
            Menu
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-2 hidden" id="mobile-menu">
        <span className="block text-yellow-300 font-semibold cursor-pointer">Home</span>
        <span className="block text-yellow-300 font-semibold cursor-pointer">Star</span>
        <span className="block text-yellow-300 font-semibold cursor-pointer">Singer</span>
        <span className="block text-yellow-300 font-semibold cursor-pointer">Dance</span>
      </div>
    </div>
  );
};

export default Navbar;
