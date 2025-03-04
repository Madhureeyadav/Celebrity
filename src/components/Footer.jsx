// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-pink-500 text-yellow-300 py-4">
      <div className="container mx-auto px-4 sm:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Branding Section */}
          <div className="text-yellow-300 text-2xl font-bold mb-4 items-center flex flex-col items-center border-yellow-300 p-4 shadow-lg">
            <span>Famous</span>
            <span className="text-yellow-300 text-lg font-extrabold">star's</span>
          </div>

          {/* Links Section */}
          <div className="mb-4">
            <h5 className="font-bold text-yellow-300 mb-2">Quick Links</h5>
            <ul>
              <li className="mb-1">
                <Link to="/" className="text-yellow-300 hover:text-white transition duration-300 font-bold">Home</Link>
              </li>
              <li className="mb-1">
                <Link to="/about" className="text-yellow-300 hover:text-white transition duration-300 font-bold">About Us</Link>
              </li>
              <li className="mb-1">
                <Link to="/services" className="text-yellow-300 hover:text-white transition duration-300 font-bold">Services</Link>
              </li>
              <li className="mb-1">
                <Link to="/contact" className="text-yellow-300 hover:text-white transition duration-300 font-bold">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-4">
            <h5 className="font-bold text-yellow-300 mb-2">Contact Us</h5>
            <p className="text-yellow-300">Email: info@example.com</p>
            <p className="text-yellow-300">Phone: +123 456 7890</p>
          </div>

          {/* Social Media Section */}
          {/* <div className="mb-4">
            
            
            </div> */}
        
        </div>

        <div className="text-center border-t border-gray-700 mt-4 pt-4">
          <p className="text-yellow-300 text-sm font-bold">&copy; {new Date().getFullYear()} Famous Star's. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
