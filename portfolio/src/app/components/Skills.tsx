import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='xl:text-5xl xl:font-bold xl:mx-10 xl:mt-40 xl:mb-10 xl:text-[#faf5f0]
        
        2xl:text-5xl 2xl:font-bold 2xl:mx-10 2xl:mt-40 2xl:mb-10 2xl:text-[#faf5f0]' id='skills'>
            &lt;TECHNOLOGIES I KNOW /&gt;
        </h1>

        <div className='xl:grid xl:grid-cols-2 xl:gap-y-5
        
        2xl:grid 2xl:grid-cols-2 2xl:gap-y-5' >

            {/* FRONTEND WALA CARD */}
            <div className='xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-56 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
            
            2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-56 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                <p className='xl:text-base xl:text-[#faf5f0] xl:font-semibold xl:my-2
                
                2xl:text-base 2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>Frontend Technologies</p>

                <div className='xl:grid xl:grid-cols-4 xl:gap-x-3
                
                2xl:grid 2xl:grid-cols-4 2xl:gap-x-3'>

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
            <div className='xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-56 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
            
            2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-56 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                <p className='xl:text-[#faf5f0] xl:font-semibold xl:my-2
                
                2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>Backend Technologies</p>

                <div className='xl:grid xl:grid-cols-4 xl:gap-x-3
                
                2xl:grid 2xl:grid-cols-4 2xl:gap-x-3 '>

                    <SkillCard image='javascript.png' />
                    <SkillCard image='nodejs.png' />
                    <SkillCard image='express.png' />
                    <SkillCard image='npm.png' />
                    <SkillCard image='mongo.png' />
                    <SkillCard image='sql.png' />

                </div>

            </div>


            {/* DATABASES */}
            <div className='xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-56 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
            
            2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-56 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                <p className='xl:text-[#faf5f0] xl:font-semibold xl:my-2
                
                2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>Programming Languages</p>

                <div className='xl:grid xl:grid-cols-4 xl:gap-x-3
                
                2xl:grid 2xl:grid-cols-4 2xl:gap-x-3 '>

                    <SkillCard image='cpp.png' />
                    <SkillCard image='javascript.png' />
                    <SkillCard image='csharp.png' />
                    <SkillCard image='python.png' />                    

                </div>

            </div>

            {/* GAME DEVELOPMENT WALA SECTION */}

            <div className='xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-56 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
            
            2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-56 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                <p className='xl:text-[#faf5f0] xl:font-semibold xl:my-2
                
                2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>Game Development</p>

                <div className='xl:grid xl:grid-cols-2 xl:gap-x-3
                
                2xl:grid 2xl:grid-cols-2 2xl:gap-x-3 '>

                    <SkillCard image='unity.png' />
                    <SkillCard image='csharp.png' />                    

                </div>

            </div>

        </div>

    </>
  )
}

export default Skills
