import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='h-16 w-24 my-2 bg-[#c3a995] bg-opacity-70 flex justify-center items-center rounded-xl transition-all ease-in hover:cursor-pointer hover:scale-110 hover:bg-opacity-90 ' >
      <img src={props.image} alt="" className='h-6 w-8'/>
    </div>
  )
}

export default SkillCard
