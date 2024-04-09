import React from 'react'

function SkillCard(props: any) {
  return (
    <div className='h-24 w-40 my-2 bg-[#c3a995] bg-opacity-70 flex justify-center items-center rounded-xl transition-all ease-in hover:cursor-pointer hover:scale-110 hover:bg-opacity-90 ' >
      <img src={props.image} alt="" className='h-8 w-10'/>
    </div>
  )
}

export default SkillCard
