"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection =()=>{
    return <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">  
             <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="text-white nb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-950">
                  Hello,I'm {""}

                  </span>
                  <br>
                  </br>
                  <TypeAnimation
      sequence={[
      
        'kirubel mamushet ',
        1000, 
        'Androide Developer ',
        1000,
        'Ui/Ux Designer',
        1000,
        'Algorithm Engineer',
        1000,
        'back-end developer,',
        1000,
        'version control engineer',
        1000
     
      ]}
      wrapper="span"
      speed={30}
     
      repeat={Infinity}
    />

                </h1>
                  <p className="text-[~ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-5">
               Best front-end and back-end developer and enginare in ethiopia nd the world 
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-300 via-blue-600 to-blue-950 hover:bg-slate-200 text-white">To Hire Me</button>
                        <button  className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-blue-300 via-blue-600 to-blue-950 hover:bg-slate-950 text-white mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-1">Download CV</span></button>
                    </div>
           </div>
           <div className ="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative">
                <Image
                    src="/image/halo.jpg"
                    alt="hello world"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={150}
                    height={20}
                />
                </div>
           </div>
    </div>
    </section>
};
export default HeroSection;