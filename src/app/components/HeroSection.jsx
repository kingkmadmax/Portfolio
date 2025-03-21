import React from "react";
import Image from "next/image";

const HeroSection =()=>{
    return <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">  
             <div className="col-span-7 place-self-center">
              <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold ">Hello, I'am kirubel

                </h1>
                  <p className="text-[~ADB7BE] text-lg mb-6 lg:text-xl">
               Best front-end and back-end developer and enginare in ethiopia nd the world 
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">to hire me</button>
                        <button  className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white  border border-white mt3">Download CV</button>
                    </div>
           </div>
           <div className ="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[4000px] lg:h-[400px]  relative">
                <Image
                    src="/image/halo.jpg"
                    alt="hello world"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={100}
                    height={200}
                />
                </div>
           </div>
    </div>
    </section>
};
export default HeroSection;