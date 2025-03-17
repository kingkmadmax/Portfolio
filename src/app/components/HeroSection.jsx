import React from "react";
import Image from "next/image";

const HeroSection =()=>{
    return <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">  
             <div className="col-span-7 place-self-center">
              <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold ">Hello, I'am kirubel

                </h1>
                  <p className="text-[~ADB7BE] lg:text-xl">
               Best front-end and back-end developer and enginare in ethiopia nd the world 
                    </p>
           </div>
           <div className ="col-span-5">
                <Image
                    src="/image/halo.jpg"
                    alt="hello world"
                    width={100}
                    height={200}
                />
           </div>
    </div>
    </section>
};
export default HeroSection;