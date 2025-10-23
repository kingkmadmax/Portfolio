import React from 'react'

const  achievmentsList  =[
    {
        metric:"Projects",
        value:"100+",
    },
     {
        metric:"Users",
        value:"1M+",
    },
     {
        metric:"Awards",
        value:"1+",
    },
     {
        metric:"Years",
        value:"4+",
    },
    
    
    
]

const AchivementsSecton = () => {
  return (
    <div key={index} className='flex flex-col items-center justify-center mx-4'>
      <h2>{achievment.value}</h2>
      <p>{achievment.metric}</p>
    </div>
  )
}

export default AchivementsSecton
