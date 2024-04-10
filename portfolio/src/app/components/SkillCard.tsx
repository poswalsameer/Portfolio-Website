import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='h-14 w-20 my-2 bg-[#faf5f0] bg-opacity-40 flex justify-center items-center rounded-lg transition-all ease-in hover:cursor-pointer hover:scale-110 hover:bg-opacity-90 ' >
      <img src={props.image} alt="" className='h-6 w-7'/>
    </div>
  )
}

export default SkillCard
