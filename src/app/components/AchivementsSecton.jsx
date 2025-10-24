import React from 'react';

const achievmentsList = [
  { metric: "Projects", value: "100+" },
  { metric: "Users", value: "1M+" },
  { metric: "Awards", value: "1+" },
  { metric: "Years", value: "4+" },
];

const AchivementsSecton = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-6 flex flex-row items-center justify-between flex-nowrap overflow-x-auto">
        {achievmentsList.map((achievment, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-2 sm:mx-4 flex-shrink-0 scale-[0.8] sm:scale-100"
          >
            <h2 className="text-white text-3xl sm:text-4xl font-bold">{achievment.value}</h2>
            <p className="text-[#ADB7BE] text-sm sm:text-base">{achievment.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementsSecton;
