import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='sm:h-10 sm:w-14 sm:my-2 sm:bg-[#faf5f0] sm:bg-opacity-40 sm:flex sm:justify-center sm:items-center sm:rounded-lg sm:transition-all sm:ease-in sm:hover:scale-110 sm:hover:bg-opacity-90
    
    md:h-12 md:w-16 md:my-2 md:bg-[#faf5f0] md:bg-opacity-40 md:flex md:justify-center md:items-center md:rounded-lg md:transition-all md:ease-in md:hover:scale-110 md:hover:bg-opacity-90
    
    lg:h-14 lg:w-20 lg:my-2 lg:bg-[#faf5f0] lg:bg-opacity-40 lg:flex lg:justify-center lg:items-center lg:rounded-lg lg:transition-all lg:ease-in lg:hover:scale-110 lg:hover:bg-opacity-90
    
    xl:h-14 xl:w-20 xl:my-2 xl:bg-[#faf5f0] xl:bg-opacity-40 xl:flex xl:justify-center xl:items-center xl:rounded-lg xl:transition-all xl:ease-in xl:hover:scale-110 xl:hover:bg-opacity-90
    
    2xl:h-14 2xl:w-20 2xl:my-2 2xl:bg-[#faf5f0] 2xl:bg-opacity-40 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:bg-opacity-90 ' >
      <img src={props.image} alt="" className='sm:h-6 sm:w-7
      
      md:h-6 md:w-7
      
      lg:h-6 lg:w-7
      
      xl:h-6 xl:w-7 2xl:h-6 2xl:w-7'/>
    </div>
  )
}

export default SkillCard
