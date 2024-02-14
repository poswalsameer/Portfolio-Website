import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='h-40 w-40 border-2 flex justify-center items-center rounded-xl hover:cursor-pointer hover:bg-gray-800 ' >
      <img src={props.image} alt="" className='h-28 w-28'/>
    </div>
  )
}

export default SkillCard
