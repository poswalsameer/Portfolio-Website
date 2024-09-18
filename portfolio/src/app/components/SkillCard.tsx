import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='
    h-7 w-8 my-1 bg-[#faf5f0] bg-opacity-40 flex justify-center items-center rounded-[0.25rem] transition-all ease-in hover:scale-110 hover:bg-opacity-90
    sm:h-8 sm:w-12 sm:my-1 sm:bg-[#faf5f0] sm:bg-opacity-40 sm:flex sm:justify-center sm:items-center sm:rounded-[0.25rem] sm:transition-all sm:ease-in sm:hover:scale-110 sm:hover:bg-opacity-90
    md:h-9 md:w-12 md:my-1 md:bg-[#faf5f0] md:bg-opacity-40 md:flex md:justify-center md:items-center md:rounded-[0.25rem] md:transition-all md:ease-in md:hover:scale-110 md:hover:bg-opacity-90
    lg:h-12 lg:w-16 lg:my-2 lg:bg-[#faf5f0] lg:bg-opacity-40 lg:flex lg:justify-center lg:items-center lg:rounded-md lg:transition-all lg:ease-in lg:hover:scale-110 lg:hover:bg-opacity-90
    xl:h-14 xl:w-20 xl:my-2 xl:bg-[#faf5f0] xl:bg-opacity-40 xl:flex xl:justify-center xl:items-center xl:rounded-lg xl:transition-all xl:ease-in xl:hover:scale-110 xl:hover:bg-opacity-90
    2xl:h-14 2xl:w-20 2xl:my-2 2xl:bg-[#faf5f0] 2xl:bg-opacity-40 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:bg-opacity-90 ' >
      <img src={props.image} alt="" 
      className='
      h-4 w-5
      sm:h-4 sm:w-5
      md:h-4 md:w-5
      lg:h-5 lg:w-6
      xl:h-6 xl:w-7 
      2xl:h-6 2xl:w-7'/>
    </div>
  )
}

export default SkillCard
