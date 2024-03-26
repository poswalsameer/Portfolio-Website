import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='text-6xl font-bold mx-10 mt-40 mb-10 text-[#fefae0]' >&lt;TECHNOLOGIES I KNOW /&gt;</h1>

        {/* <div className='grid grid-cols-6 place-content-center place-items-center'> */}

            <div className='grid grid-cols-6 place-content-center place-items-center' id='firstRow'> 

                <div className='m-3 ' >
                    <SkillCard image='cpp.png' />
                </div>

                <div className='m-3' >
                    <SkillCard image='javascript.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='csharp.png' />
                </div>

                <div className='m-3' >
                    <SkillCard image='html.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='css.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='unity.png'/>
                </div>

            </div>

            

            

            <div className='grid grid-cols-6 place-content-center place-items-center' id='secondRow'>

                <div className='m-3' >
                    <SkillCard image='react.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='next.png'/>
                </div>
                <div className='m-3' >
                    <SkillCard image='sql.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='mongo.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='python.png'/>
                </div>

                <div className='m-3' >
                    <SkillCard image='tailwind.png'/>
                </div>

            </div>

           

            

            <div className='grid grid-cols-6 place-content-center place-items-center' id='thirdRow'>

            <div className='m-3' >
                <SkillCard image='nodejs.png'/>
            </div>

            <div className='m-3' >
                <SkillCard image='bootstrap.png'/>
            </div>

            <div className='m-3' >
                <SkillCard image='githubIcon.png'/>
            </div>

            </div>

                       

        {/* </div> */}

        

    </>
  )
}

export default Skills
