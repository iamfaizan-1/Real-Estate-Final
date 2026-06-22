import React from 'react'
import hero from "../assets/hero demo.png"
import { LiaAngleRightSolid } from 'react-icons/lia'
function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary">
      <div style={{
        backgroundImage: `url(${hero})`,
        height: "500px",
        width: "100%",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",



      }} className="img h-screen  flex flex-col md:justify-start justify-end ">


        {/* hero content */}

        <div className=" md:w-[50%] md:py-25 text-primary rounded-lg px-10 py-2 md:px-10 md:bg-transparent md:text-white bg-white md:gap-6 gap-3 flex flex-col">
          <p className="md:text-5xl text-2xl font-bold ">Unlock the door to your ideal home</p>
          <p className="md:text-[15px] text-[12px]">Browse, explore, and find the perfect property with our innovative website. Seamlessly connect with sellers, agents, and a vibrant community of home seekers. Your dream home awaits!</p>

          <div className="flex items-center gap-3 ">
            <button className="font-bold  md:bg-white bg-primary md:text-primary text-white px-6 py-3 md:text-[13px] text-[11px] hover:scale-[1.05] transition-transform ease-in-out">
              EXPLORE NOW
            </button>
            <LiaAngleRightSolid className="text-white font-bold text-2xl"/>

          </div>
        </div>


      </div>


    </div>
  )
}

export default Hero