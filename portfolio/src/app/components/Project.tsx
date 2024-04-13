import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>

      <h1 className='text-2xl font-bold mx-4 mt-40 mb-10 text-[#fefae0]
      
      sm:text-4xl sm:font-bold sm:mx-6 sm:mt-40 sm:mb-10 sm:text-[#fefae0]
      
      md:text-4xl md:font-bold md:mx-8 md:mt-40 md:mb-5 md:text-[#fefae0]
      
      lg:text-5xl lg:font-bold lg:mx-10 lg:mt-40 lg:mb-5 lg:text-[#fefae0]
      
      xl:text-5xl xl:font-bold xl:mx-10 xl:mt-40 xl:mb-5 xl:text-[#fefae0]
      
      2xl:text-5xl 2xl:font-bold 2xl:mx-12 2xl:mt-40 2xl:mb-5 2xl:text-[#fefae0]' >&lt;PROJECTS /&gt;</h1>
      
      <div className='grid grid-cols-1 gap-y-4 place-content-center place-items-center
      
      sm:grid sm:grid-cols-1 sm:gap-y-4 sm:place-content-center sm:place-items-center
      
      md:grid md:grid-cols-2 md:place-content-center md:place-items-center
      
      lg:grid lg:grid-cols-3 lg:place-content-center lg:place-items-center
      
      xl:grid xl:grid-cols-3 xl:place-content-center xl:place-items-center
      
      2xl:grid 2xl:grid-cols-3 2xl:place-content-center 2xl:place-items-center' id='projects'>

        <div className='md:ml-10 md:mr-5
        
        lg:ml-10 lg:mr-5
        
        xl:ml-10 xl:mr-5
        
        2xl:ml-10 2xl:mr-5'> 

          <ProjectCard projectImage="music.jpg" projectName="Tunify Music" techUsed="HTML, Tailwind CSS, JavaScript, Google Firebase, NodeJS" liveLink='https://tunifymusic.netlify.app/musiclibrary' github="https://github.com/poswalsameer/Tunify-Music" /> 

        </div>

        <div className='md:m-10 
        
        lg:m-10 
        
        xl:m-10 
        
        2xl:m-10'>

          <ProjectCard projectImage='notesync.jpg' projectName='Note-Sync' techUsed='JSX, ReactJS, Redux, Tailwind CSS, JavaScript Local Storage' liveLink='https://notesync01.netlify.app/' github="https://github.com/poswalsameer/NoteSync" />

        </div>

        <div className='md:mr-0 md:ml-5
        
        lg:mr-10 lg:ml-5 
        
        xl:mr-10 xl:ml-5 
        
        2xl:mr-10 2xl:ml-5'>

          <ProjectCard projectImage='nitro.jpg' projectName='Nitro Dash' techUsed='Unity Game Engine, C#' liveLink='https://sameerposwal.itch.io/nitro-dash' github="https://github.com/poswalsameer/Nitro-Dash" />

        </div>

        <div className='md:ml-5 md:mr-5
        
        lg:ml-10 lg:mr-5
        
        xl:ml-10 xl:mr-5 
        
        2xl:ml-10 2xl:mr-5'>

          <ProjectCard projectImage='sign.jpg' projectName='Digital Ink' techUsed='NextJS, ReactJS, HTML Canvas, Tailwind CSS' liveLink='https://digitalinknew.vercel.app/' github="https://github.com/poswalsameer/DigitalInk"/>
          
        </div>

        <div className='md:m-10 md:mr-5
        
        lg:m-10
        
        xl:m-10 
        
        2xl:m-10'>

          <ProjectCard projectImage='typing.jpg' projectName='TypeMaster' techUsed='ReactJS, Tailwind CSS, NPM Packages' liveLink='https://typemaster-typingtest.netlify.app/' github="https://github.com/poswalsameer/TypeMaster"/>
          
        </div>

        <div className='md:mr-5 md:ml-5
        
        lg:mr-10 lg:ml-5
        
        xl:mr-10 xl:ml-5 
        
        2xl:mr-10 2xl:ml-5'>

          <ProjectCard projectImage='nemo.jpg' projectName='Flying Nemo' techUsed='Unity Game Engine, C#' liveLink='https://sameerposwal.itch.io/flying-nemo' github="https://github.com/poswalsameer/Flying-Nemo" />
          
        </div>

        <div className='md:ml-10 md:mr-5
        
        lg:ml-10 lg:mr-5
        
        xl:ml-10 xl:mr-5 
        
        2xl:ml-10 2xl:mr-5'>

          <ProjectCard projectImage='pass.jpg' projectName='KeyForge' techUsed=' JavaScript, ReactJS, Tailwind CSS, JSX' liveLink='https://keyforge-passwordgenerator.netlify.app/' github="https://github.com/poswalsameer/KeyForge"/>
          
        </div>

        <div className='md:m-10
        
        lg:m-10
        
        xl:m-10
        
        2xl:m-10'>

          <ProjectCard projectImage='tic.jpg' projectName='Tic Tac Tango' techUsed='HTML, Tailwind CSS, JavaScript' liveLink='https://tictactango.netlify.app/' github="https://github.com/poswalsameer/Tic-Tac-Toe"/>
          
        </div>

        <div className='md:mr-0 md:ml-5
        
        lg:mr-10 lg:ml-5
        
        xl:mr-10 xl:ml-5
        
        2xl:mr-10 2xl:ml-5'>

          <ProjectCard projectImage='encuentro.png' projectName='Encuentro 2k24' techUsed='HTML, Tailwind CSS, JavaScript, Google Sheets' liveLink='https://encuentro2k24.netlify.app/' github="https://github.com/poswalsameer/ieee-regn-page" />
          
        </div>


      </div>

    </>
  )
}

export default Project
