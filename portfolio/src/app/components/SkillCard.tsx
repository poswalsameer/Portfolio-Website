import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='h-24 w-56 bg-slate-400 flex justify-center items-center rounded-xl hover:cursor-pointer hover:scale-110 ' >
      <img src={props.image} alt="" className='h-12 w-14'/>
    </div>
  )
}

export default SkillCard
