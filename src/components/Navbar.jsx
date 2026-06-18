import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png"
// --- SELF-CONTAINED SVG ICONS ---
const CrossIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HamburgerIcon = ({ size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);



 function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // --- SCROLL LOCK EFFECT ---
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <nav className="py-3 px-10 flex items-center justify-between bg-gradient-to-r from-primary to-secondary text-white relative z-50 ">
        
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <span className="font-bold tracking-wider text-sm text-white bg-clip-text ">
            Rumah Impian
          </span>
        </div>

        {/* Desktop list */}
        <ul className="md:flex hidden gap-6 text-sm font-medium text-white">
          <li className="cursor-pointer hover:scale-[1.05] transition-transform ease-in-out duration-300">Home</li>
          <li className="cursor-pointer hover:scale-[1.05] transition-transform ease-in-out duration-300">Features</li>
          <li className="cursor-pointer hover:scale-[1.05] transition-transform ease-in-out duration-300">Products</li>
          <li className="cursor-pointer hover:scale-[1.05] transition-transform ease-in-out duration-300">Clients</li>
        </ul>


<div className="hidden md:block">
  <button className=" font-bold bg-white text-primary px-3 py-2 text-[13px] hover:scale-[1.05] transition-transform ease-in-out">
    Contact us
  </button>
</div>
        {/* mobile button toggle */}
        <div className="md:hidden cursor-pointer text-zinc-300 hover:text-white" onClick={() => { setIsOpen(!isOpen) }}>
          <span className={`transition-transform duration-300 ease-in-out inline-block ${isOpen ? "rotate-180" : "rotate-0"}`}>
            {isOpen ? <CrossIcon size={24} /> : <HamburgerIcon size={24} />}
          </span>
        </div>

      </nav>

      {/* Mobile Drawer Menu */}
      <ul 
        className={`md:hidden absolute top-[54px] h-[90vh] gap-6 transition-all duration-300 ease-in-out left-0 w-full z-40 flex flex-col items-center justify-center overflow-hidden bg-primary text-white ${
          isOpen 
            ? "max-h-[90vh] py-3 opacity-100" 
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <li className="text-xl font-semibold hover:text-indigo-400 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
        <li className="text-xl font-semibold hover:text-indigo-400 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>Features</li>
        <li className="text-xl font-semibold hover:text-indigo-400 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>Products</li>
        <li className="text-xl font-semibold hover:text-indigo-400 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>Clients</li>
      </ul>
    </div>
  );
}

export default Navbar