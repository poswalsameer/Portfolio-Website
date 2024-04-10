import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='text-6xl font-bold mx-10 mt-40 mb-10 text-[#faf5f0]' id='skills'>
            &lt;TECHNOLOGIES I KNOW /&gt;
        </h1>

        <div className='grid grid-cols-2 gap-y-5' >

            {/* FRONTEND WALA CARD */}
            <div className='flex flex-col justify-center items-center h-56 w-[90%] border-2 border-[#faf5f0] border-opacity-40 mx-10 rounded-xl'>

                <p className='text-base text-[#faf5f0] text-opacity-70 font-semibold my-2'>Frontend Technologies</p>

                <div className='grid grid-cols-4 gap-x-3'>

                    <SkillCard image='html.png' />
                    <SkillCard image='css.png' />
                    <SkillCard image='javascript.png' />
                    <SkillCard image='react.png' />
                    <SkillCard image='next.png' />
                    <SkillCard image='tailwind.png' />
                    <SkillCard image='bootstrap.png' />
                    <SkillCard image='npm.png' />

                </div>

            </div>

            {/* BACKEND TECH WALA SECTION */}
            <div className='flex flex-col justify-center items-center h-56 w-[90%] border-2 border-[#faf5f0] border-opacity-40 mx-10 rounded-xl'>

                <p className='text-[#faf5f0] font-semibold text-opacity-70 my-2'>Backend Technologies</p>

                <div className='grid grid-cols-4 gap-x-3 '>

                    <SkillCard image='javascript.png' />
                    <SkillCard image='nodejs.png' />
                    <SkillCard image='express.png' />
                    <SkillCard image='npm.png' />
                    <SkillCard image='mongo.png' />
                    <SkillCard image='sql.png' />

                </div>

            </div>


            {/* DATABASES */}
            <div className='flex flex-col justify-center items-center h-56 w-[90%] border-2 border-[#faf5f0] border-opacity-40 mx-10 rounded-xl'>

                <p className='text-[#faf5f0] font-semibold text-opacity-70  my-2'>Programming Languages</p>

                <div className='grid grid-cols-4 gap-x-3 '>

                    <SkillCard image='cpp.png' />
                    <SkillCard image='javascript.png' />
                    <SkillCard image='csharp.png' />
                    <SkillCard image='python.png' />                    

                </div>

            </div>

            {/* GAME DEVELOPMENT WALA SECTION */}

            <div className='flex flex-col justify-center items-center h-56 w-[90%] border-2 border-[#faf5f0] border-opacity-40 mx-10 rounded-xl'>

                <p className='text-[#faf5f0] font-semibold text-opacity-70  my-2'>Game Development</p>

                <div className='grid grid-cols-2 gap-x-3 '>

                    <SkillCard image='unity.png' />
                    <SkillCard image='csharp.png' />                    

                </div>

            </div>

        </div>

    </>
  )
}

export default Skills
