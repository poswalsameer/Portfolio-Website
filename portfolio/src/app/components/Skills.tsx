import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
  return (

    <>
        <h1 className='
        text-2xl font-bold mx-2 mb-10 text-[#faf5f0]
        sm:text-4xl sm:font-bold sm:mx-6 sm:mb-10 sm:text-[#faf5f0]
        md:text-4xl md:font-bold md:mx-8 md:mb-10 md:text-[#faf5f0]
        lg:text-5xl lg:font-bold lg:mx-10 lg:mb-10 lg:text-[#faf5f0]
        xl:text-5xl xl:font-bold xl:mx-10 xl:mb-10 xl:text-[#faf5f0]
        2xl:text-5xl 2xl:font-bold 2xl:mx-12 2xl:mb-16 2xl:text-[#faf5f0]' id='skills'>
            &lt;TECHNOLOGIES I KNOW /&gt;
        </h1>

        <div className='h-full w-full flex justify-center items-center'>

            <div className='
            w-[100%] grid place-content-center place-items-center grid-cols-1 gap-y-5
            sm:w-[90%] sm:grid sm:grid-cols-1 sm:gap-y-5
            md:w-[90%] md:grid md:grid-cols-2 md:gap-y-5
            lg:w-[90%] lg:grid lg:grid-cols-2 lg:gap-y-5
            xl:w-[90%] xl:grid xl:grid-cols-2 xl:gap-y-5
            2xl:w-[85%] 2xl:grid 2xl:grid-cols-2 2xl:gap-y-5' >

                {/* FRONTEND WALA CARD */}
                <div className='
                flex flex-col justify-center items-center h-[8.5rem] w-[95%] border-2 border-[#faf5f0] border-opacity-40 mx-14 rounded-md
                sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-40 sm:w-[93%] sm:border-2 sm:border-[#faf5f0] sm:border-opacity-40 sm:mx-10 sm:rounded-lg
                md:flex md:flex-col md:justify-center md:items-center md:h-56 md:w-[95%] md:border-2 md:border-[#faf5f0] md:border-opacity-40 md:mx-10 md:rounded-xl
                lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-72 lg:w-[90%] lg:border-2 lg:border-[#faf5f0] lg:border-opacity-40 lg:mx-10 lg:rounded-xl
                xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-72 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-72 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                    <p className='
                    text-base text-[#faf5f0] font-semibold my-1
                    sm:text-base sm:text-[#faf5f0] sm:font-semibold sm:my-2
                    md:text-base md:text-[#faf5f0] md:font-semibold md:my-2
                    lg:text-base lg:text-[#faf5f0] lg:font-semibold lg:my-2
                    xl:text-base xl:text-[#faf5f0] xl:font-semibold xl:my-2
                    2xl:text-base 2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>
                        Frontend Technologies
                    </p>

                    <div className='
                    grid grid-cols-5 gap-x-1
                    sm:grid sm:grid-cols-5 sm:gap-x-3
                    md:grid md:grid-cols-5 md:gap-x-3
                    lg:grid lg:grid-cols-5 lg:gap-x-3
                    xl:grid xl:grid-cols-5 xl:gap-x-3
                    2xl:grid 2xl:grid-cols-5 2xl:gap-x-3'>

                        <SkillCard image='html.png' />
                        <SkillCard image='css.png' />
                        <SkillCard image='javascript.png' />
                        <SkillCard image='typescript.png' />
                        <SkillCard image='react.png' />
                        <SkillCard image='next.png' />
                        <SkillCard image='redux.svg' />
                        <SkillCard image='tailwind.png' />
                        <SkillCard image='bootstrap.png' />
                        <SkillCard image='npm.png' />

                    </div>

                </div>

                {/* BACKEND TECH WALA SECTION */}
                <div className='
                flex flex-col justify-center items-center h-[8.5rem] w-[95%] border-2 border-[#faf5f0] border-opacity-40 mx-14 rounded-md
                sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-40 sm:w-[93%] sm:border-2 sm:border-[#faf5f0] sm:border-opacity-40 sm:mx-10 sm:rounded-lg
                md:flex md:flex-col md:justify-center md:items-center md:h-56 md:w-[95%] md:border-2 md:border-[#faf5f0] md:border-opacity-40 md:mx-10 md:rounded-xl
                lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-72 lg:w-[90%] lg:border-2 lg:border-[#faf5f0] lg:border-opacity-40 lg:mx-10 lg:rounded-xl
                xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-72 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-72 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                    <p className='
                    text-base text-[#faf5f0] font-semibold my-1
                    sm:text-base sm:text-[#faf5f0] sm:font-semibold sm:my-2
                    md:text-base md:text-[#faf5f0] md:font-semibold md:my-2
                    lg:text-base lg:text-[#faf5f0] lg:font-semibold lg:my-2
                    xl:text-[#faf5f0] xl:font-semibold xl:my-2
                    2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>
                        Backend Technologies
                    </p>

                    <div className='
                    grid grid-cols-4 gap-x-1
                    sm:grid sm:grid-cols-4 sm:gap-x-3
                    md:grid md:grid-cols-4 md:gap-x-3
                    lg:grid lg:grid-cols-4 lg:gap-x-3
                    xl:grid xl:grid-cols-4 xl:gap-x-3
                    2xl:grid 2xl:grid-cols-4 2xl:gap-x-3 '>

                        <SkillCard image='javascript.png' />
                        <SkillCard image='nodejs.png' />
                        <SkillCard image='express.png' />
                        <SkillCard image='npm.png' />
                        <SkillCard image='mongo.png' />
                        <SkillCard image='sql.png' />
                        <SkillCard image='appwrite.png' />
                        <SkillCard image='socketio.png' />
                        

                    </div>

                </div>


                {/* DATABASES */}
                <div className='
                flex flex-col justify-center items-center h-[8.5rem] w-[95%] border-2 border-[#faf5f0] border-opacity-40 mx-14 rounded-md
                sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-40 sm:w-[93%] sm:border-2 sm:border-[#faf5f0] sm:border-opacity-40 sm:mx-10 sm:rounded-lg
                md:flex md:flex-col md:justify-center md:items-center md:h-56 md:w-[95%] md:border-2 md:border-[#faf5f0] md:border-opacity-40 md:mx-10 md:rounded-xl
                lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-72 lg:w-[90%] lg:border-2 lg:border-[#faf5f0] lg:border-opacity-40 lg:mx-10 lg:rounded-xl
                xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-72 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-72 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                    <p className='
                    text-base text-[#faf5f0] font-semibold my-1
                    sm:text-base sm:text-[#faf5f0] sm:font-semibold sm:my-2
                    md:text-base md:text-[#faf5f0] md:font-semibold md:my-2
                    lg:text-base lg:text-[#faf5f0] lg:font-semibold lg:my-2
                    xl:text-[#faf5f0] xl:font-semibold xl:my-2
                    2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>
                        Programming Languages
                    </p>

                    <div className='
                    grid grid-cols-6 gap-x-1
                    sm:grid sm:grid-cols-6 sm:gap-x-3
                    md:grid md:grid-cols-3 md:gap-x-3
                    lg:grid lg:grid-cols-3 lg:gap-x-3
                    xl:grid xl:grid-cols-3 xl:gap-x-3
                    2xl:grid 2xl:grid-cols-3 2xl:gap-x-3 '>

                        <SkillCard image='cpp.png' />
                        <SkillCard image='javascript.png' />
                        <SkillCard image='typescript.png' />
                        <SkillCard image='csharp.png' />
                        <SkillCard image='python.png' /> 
                        <SkillCard image='golang.png' />                    

                    </div>

                </div>

                {/* GAME DEVELOPMENT WALA SECTION */}

                <div className='
                flex flex-col justify-center items-center h-[8.5rem] w-[95%] border-2 border-[#faf5f0] border-opacity-40 mx-14 rounded-md
                sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-40 sm:w-[93%] sm:border-2 sm:border-[#faf5f0] sm:border-opacity-40 sm:mx-10 sm:rounded-lg
                md:flex md:flex-col md:justify-center md:items-center md:h-56 md:w-[95%] md:border-2 md:border-[#faf5f0] md:border-opacity-40 md:mx-10 md:rounded-xl
                lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-72 lg:w-[90%] lg:border-2 lg:border-[#faf5f0] lg:border-opacity-40 lg:mx-10 lg:rounded-xl
                xl:flex xl:flex-col xl:justify-center xl:items-center xl:h-72 xl:w-[90%] xl:border-2 xl:border-[#faf5f0] xl:border-opacity-40 xl:mx-10 xl:rounded-xl
                2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:h-72 2xl:w-[90%] 2xl:border-2 2xl:border-[#faf5f0] 2xl:border-opacity-40 2xl:mx-10 2xl:rounded-xl'>

                    <p className='
                    text-base text-[#faf5f0] font-semibold my-1
                    sm:text-base sm:text-[#faf5f0] sm:font-semibold sm:my-2
                    md:text-base md:text-[#faf5f0] md:font-semibold md:my-2
                    lg:text-base lg:text-[#faf5f0] lg:font-semibold lg:my-2
                    xl:text-[#faf5f0] xl:font-semibold xl:my-2
                    2xl:text-[#faf5f0] 2xl:font-semibold 2xl:my-2'>
                        Other tools
                    </p>

                    <div className='
                        grid grid-cols-6 gap-x-1
                        sm:grid sm:grid-cols-6 sm:gap-x-3
                        md:grid md:grid-cols-3 md:gap-x-3
                        lg:grid lg:grid-cols-3 lg:gap-x-3
                        xl:grid xl:grid-cols-3 xl:gap-x-3
                        2xl:grid 2xl:grid-cols-3 2xl:gap-x-3 '>

                        <SkillCard image='unity.png' />   
                        <SkillCard image='vercel-logo.svg' /> 
                        <SkillCard image='docker.png' />
                        <SkillCard image='netlify.png' />  
                        <SkillCard image='github.png' />
                        <SkillCard image='postman.png' />              

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default Skills
