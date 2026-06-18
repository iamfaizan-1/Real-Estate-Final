import React from 'react'
import cabin from "../assets/house 1.png"
import town from "../assets/town 1.png"
import Myasset from "../assets/assets 1.png"

const services=[
    {
        image: cabin,
        title: "Property Insurance",
        description:"Protect your home and peace of mind with our comprehensive property insurance coverage."

       
    },
     {
        image: town,
        title: "Easy Payment",
        description:"Experience hassle-free payments with our easy payment options.. Simplify your life and manage your finances effortlessly."

       
    },
    {
          image: Myasset,
        title: "Quick Process",
        description:"Experience swift and efficient service with our quick process. Say goodbye to long waits and hello to instant results"
        
    }
]
function Services() {
  return (
    <div className="bg-backround md:py-15 py-10">

      <div className="flex flex-col items-center gap-2">
          <p className="md:text-[48px] text-2xl font-bold text-primary">
            Our Services
        </p>

        <p className="md:text-[15px] text-[12px] text-center">
            With us, you can expect a transparent and trustworthy partnership
        </p>
      </div> 
      <div className="cards grid lg:grid-cols-3 grid-cols-1 gap-5 px-10 py-10">


    {
        services.map((item)=>(
<div className="flex flex-col items-center bg-white hover:bg-primary gap-3 py-3 px-3 md:p-6 transition-all duration-300 ease-in-out rounded-2xl hover:text-white" key={item.title}>
   <div className="h-20 w-20 bg-white border-4 border-primary rounded-full flex items-center justify-center">
     <img src={item.image} width="40px" alt="card img" />
   </div>
    <p className="md:text-xl text-[14px] font-bold">
        {
        item.title
        }

    </p>
    <p className="md:text-[14px] text-center text-[12px]">
        {
            item.description
        }
    </p>
</div>
        ))
    }


      </div>
    </div>
  )
}

export default Services