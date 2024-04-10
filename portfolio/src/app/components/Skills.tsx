import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='text-6xl font-bold mx-10 mt-40 mb-10 text-[#faf5f0]' id='skills'>
            &lt;TECHNOLOGIES I KNOW /&gt;
        </h1>

        <div className='grid grid-cols-2' >

            {/* FRONTEND WALA CARD */}
            <div className='flex flex-col items-center w-[90%] border border-white mx-10 rounded-xl'>

                <p className='text-white my-5'>Frontend Technologies</p>

                <div className='grid grid-cols-4 gap-x-3 my-3 '>

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
            <div className='flex flex-col  items-center w-[90%] border border-white mx-10 rounded-xl'>

                <p className='text-white my-5'>Backend Technologies</p>

                <div className='grid grid-cols-4 gap-x-3 '>

                    <SkillCard image='javascript.png' />
                    <SkillCard image='nodejs.png' />
                    <SkillCard image='express.png' />
                    <SkillCard image='npm.png' />

                </div>

            </div>


        </div>

        <div className='grid grid-cols-8 place-content-center place-items-center'>

                <div className='' >
                    <SkillCard image='cpp.png' />
                </div>

                <div className='' >
                    <SkillCard image='javascript.png'/>
                </div>

                <div className='' >
                    <SkillCard image='csharp.png' />
                </div>

                <div className='' >
                    <SkillCard image='html.png'/>
                </div>

                <div className='' >
                    <SkillCard image='css.png'/>
                </div>

                <div className='' >
                    <SkillCard image='unity.png'/>
                </div>


                <div className='' >
                    <SkillCard image='react.png'/>
                </div>

                <div className='' >
                    <SkillCard image='next.png'/>
                </div>
                <div className='' >
                    <SkillCard image='sql.png'/>
                </div>

                <div className='' >
                    <SkillCard image='mongo.png'/>
                </div>

                <div className='' >
                    <SkillCard image='python.png'/>
                </div>

                <div className='' >
                    <SkillCard image='tailwind.png'/>
                </div>

            <div className='' >
                <SkillCard image='nodejs.png'/>
            </div>

            <div className='' >
                <SkillCard image='bootstrap.png'/>
            </div>

            <div className='' >
                <SkillCard image='githubIcon.png'/>
            </div>

            

                       

        </div>

        

    </>
  )
}

export default Skills
