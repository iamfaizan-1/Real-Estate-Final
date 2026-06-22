import React from 'react'
import img1 from "../assets/cardimg1.png"
import img2 from "../assets/cardimg2.png"
import img3 from "../assets/cardimg3.png"
import img4 from "../assets/cardimg4.png"
import img5 from "../assets/cardimg5.png"
import img6 from "../assets/cardimg6.png"
import icon1 from "../assets/bedIcon.png"
import icon2 from "../assets/bathroom.png"
import icon3 from "../assets/networkicon.png"

const bestCollection = [
    {
        img: img1,
        title: "IDR 200.000.000",
        description:"Jl. Soekarno Hatta, Jakarta",
        footer:" Sell"
    },
    {
        img: img2,
        title: "IDR 200.000.000",
        description:"Jl. Soekarno Hatta, Jakarta",
        footer:" Sell"

    },{
        img: img3,
        title: "IDR 200.000.000",
        description:"Jl. Soekarno Hatta, Jakarta",
        footer:" Sell"
    }
    ,{
        img: img4,
        title: "IDR 200.000.000",
        description:"Jl. Soekarno Hatta, Jakarta",
        footer:" Sell"
    },
    {
        img: img5,
        title: "IDR 200.000.000",
        description:"Jl. Soekarno Hatta, Jakarta",
        footer:" Sell"
    },
    {
        img: img6,
        title: "IDR 200.000.000",
        description:"Jl. Soekarno Hatta, Jakarta",
        footer:" Sell"
    }
]


function BestCollection() {
  return (
    <div className="bg-backround md:py-15 py-10 px-10">

 <div className="flex flex-col items-center gap-2">
          <p className="md:text-[48px] text-2xl font-bold text-primary">
           Best Collection On Sale
        </p>

        <p className="md:text-[15px] text-[12px] text-center">
Get your dream property right now and get best seller        </p>
      </div>


<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10">
    {
        bestCollection.map((item,index)=>(

            <div key={index}  className="bg-white rounded-lg hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white transition-colors duration-400 ease-in-out"
>

<div className="p-2" >
    <img src={item.img} width="100%" alt="" />
</div>

<div className="content p-4 flex flex-col gap-3">
    
<p className="md:text-xl text-[14px] font-bold">
    {
        item.title
    }
</p>
<p className="md:text-[14px]  text-[12px]">
    {
        item.description
    }
</p>
<p className="md:text-[14px]  text-[12px] font-bold">
    {
        item.footer
    }
</p>

<div className="flex justify-between">
    <div className="flex gap-2 flex-col">
<img src={icon1} width="15px" alt="" />
<p className="md:text-[14px]  text-[12px] ">Bedroom</p>
    </div>

    <div className="flex gap-2 flex-col">
<img src={icon2} width="15px"  alt="" />
<p className="md:text-[14px]  text-[12px] " >Bathroom</p>
    </div>

    <div className="flex gap-2 flex-col">
<img src={icon3} width="15px"  alt="" />
<p className="md:text-[14px]  text-[12px] " >Home icon</p>
    </div>
</div>
</div>
            </div>
        )

        )
    }
</div>

    </div>
  )
}

export default BestCollection