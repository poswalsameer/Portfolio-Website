import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='h-28 w-44 bg-[#c6ac8f] bg-opacity-70 flex justify-center items-center rounded-xl transition-all ease-in hover:cursor-pointer hover:scale-110 hover:bg-opacity-90 ' >
      <img src={props.image} alt="" className='h-10 w-12'/>
    </div>
  )
}

export default SkillCard
