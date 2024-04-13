import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='xl:h-14 xl:w-20 xl:my-2 xl:bg-[#faf5f0] xl:bg-opacity-40 xl:flex xl:justify-center xl:items-center xl:rounded-lg xl:transition-all xl:ease-in xl:hover:scale-110 xl:hover:bg-opacity-90
    
    2xl:h-14 2xl:w-20 2xl:my-2 2xl:bg-[#faf5f0] 2xl:bg-opacity-40 2xl:flex 2xl:justify-center 2xl:items-center 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:bg-opacity-90 ' >
      <img src={props.image} alt="" className='xl:h-6 xl:w-7 2xl:h-6 2xl:w-7'/>
    </div>
  )
}

export default SkillCard
