import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='text-6xl font-bold mx-10 mt-40 mb-10 text-[#faf5f0]' >&lt;TECHNOLOGIES I KNOW /&gt;</h1>

        <div className='text-white flex flex-row justify-between items-center'>

            <h1>Web Technologies</h1>

            <div className='grid ' >


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
