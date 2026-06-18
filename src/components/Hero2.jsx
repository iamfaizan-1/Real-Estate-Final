import React from "react";
import group from "../assets/hero 2.png";

function Hero2() {
  return (
    
<div>
    {/* <div style={
        {
            backgroundImag:`url(${group})`,
            height:"500px",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center"
        }
    }>

    </div> */}

<div style={{
  backgroundImage: `url(${group})`,
         height: "600px",
         width: "100%",
         backgroundPosition: "center center",
         backgroundRepeat: "no-repeat",
 
}} className="md:py-15 py-10">
  
{/* content */}

<div>
<div className="flex flex-col items-center gap-2">
          <p className="md:text-[48px] text-2xl font-bold text-white">
            Find Your Dream Home
        </p>

        <p className="md:text-[15px] text-[12px] text-center text-white">
             Now you can save yourself from all the stress, time, and hidden costs
  with hundreds of homes waiting for you.
        </p>
      </div> 
</div>

</div>

</div>


  );
}

export default Hero2;