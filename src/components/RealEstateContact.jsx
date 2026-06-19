import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function RealEstateContact() {
  return (
    <div className="relative w-full min-h-[600px] flex items-center bg-gray-900 font-sans">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2048&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Extra darkening for text readability */}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Contact Details */}
        <div className="text-white space-y-10">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-wide">
            Need Consultation..? <br />
            Please contact us <br />
            We are Ready to Help
          </h1>

          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                  <span className="leading-relaxed">
                    Jl. Pelajar Pejuang 123 Majalaya Bandung<br />
                    Indonesia
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <span>022-6545-2041</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-white flex-shrink-0" />
                  <span>rumahimpian@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-4">Social Media</h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex space-x-3">
                  <FaFacebook className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
                  <FaTwitter className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
                  <FaInstagram className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
                </div>
                <span className="ml-2 font-medium">RumahImpian</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Question Form Card */}
        <div className="flex justify-start lg:justify-end">
          <div className="bg-white w-full max-w-[420px] p-8 shadow-2xl">
            <h2 className="text-[#009B5A] text-2xl font-bold text-center mb-6">
              any questions..?
            </h2>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email here.."
                className="w-full bg-[#C4C4C4] p-4 text-sm text-gray-800 placeholder-gray-600 focus:outline-none"
              />
              
              {/* Question Input */}
              <input
                type="text"
                placeholder="Your question.."
                className="w-full bg-[#C4C4C4] p-4 text-sm text-gray-800 placeholder-gray-600 focus:outline-none"
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#009B5A] text-white font-bold py-4 text-sm tracking-wide hover:bg-[#00824b] transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}