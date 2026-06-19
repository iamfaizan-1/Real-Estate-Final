import React from 'react';
import { Home } from 'lucide-react';
import logo from "../assets/logo.png"
export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8 font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col space-y-16">
        
        {/* Top Section: Logo & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="bg-[#009B5A] p-1.5 rounded-full flex items-center justify-center">
              <img src={logo} />
            </div>
            <span className="font-bold tracking-wide">Rumah Impian</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-semibold tracking-wide">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Features</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Login</a>
          </nav>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-xs text-gray-400">
          Copyright by Creative Academy All Right Reserved.
        </div>
        
      </div>
    </footer>
  );
}