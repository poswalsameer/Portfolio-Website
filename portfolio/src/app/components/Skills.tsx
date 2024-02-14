import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='text-6xl font-bold mx-20 my-14' >&lt;TECHNOLOGIES I KNOW /&gt;</h1>

        <div className='grid grid-cols-5 place-content-center place-items-center'>

            <div className='m-10 ' >

                <SkillCard image='c-.png' />

            </div>

            <div className='m-10' >

                <SkillCard image='js.png'/>

            </div>

            <div className='m-10' >

                <SkillCard image='c-sharp.png' />

            </div>

            <div className='m-10' >

                <SkillCard image='html-5.png'/>

            </div>

            <div className='m-10' >

                <SkillCard image='css-3.png'/>

            </div>

            <div className='m-10' >

                <SkillCard image='unity.png'/>

            </div>

            <div className='m-10' >

                <SkillCard image='database.png'/>

            </div>

            

        </div>

        

    </>
  )
}

export default Skills
