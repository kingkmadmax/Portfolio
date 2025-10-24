'use client'
import React from 'react';
import dynamic from 'next/dynamic';
 const AnimatedNumbers = dynamic(()=>
  {return import("react-animated-numbers")},
{ssr:false})
const achievmentsList = [
  { metric: "Projects", value: "100+" ,postfix:"+"},
  { metric: "Users", value: "1M+",postfix:"~" },
  { metric: "Awards", value: "1+" },
  { metric: "Years", value: "4" },
];

const AchivementsSecton = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-6 flex flex-row items-center justify-between flex-nowrap overflow-x-auto">
        {achievmentsList.map((achievment, index) => (
          <div
            key={index}
            className="flex  items-center justify-center mx-2 sm:mx-4 flex-shrink-0 scale-[0.8] sm:scale-100 flex-row"
          >
            <h2 className="text-white text-3xl sm:text-4xl font-bold">{achievment.postfix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievment.value)}
                locale='en-US'
                className='text-white text-4xl font-bold'
                configs={(_,index)=>{
                  return{
                    mass:1,
                    friction:100,
                    tensions:140 *(index+1),
                  };
                }}
                />
            </h2>
            <p className="text-[#ADB7BE] text-sm sm:text-base">{achievment.postfix}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementsSecton;
