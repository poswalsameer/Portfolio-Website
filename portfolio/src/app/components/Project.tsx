import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>

      <h1 className='text-6xl font-bold mx-10 mt-40 mb-5 text-[#fefae0]' >&lt;PROJECTS /&gt;</h1>
      
      <div className='grid grid-cols-3 place-content-center place-items-center'>

        <div className='ml-10 mr-5'> 

          <ProjectCard projectImage="tunifyImage.jpg" projectName="Tunify Music" techUsed="HTML, Tailwind CSS, JavaScript, Google Firebase, NodeJS" /> 

        </div>

        <div className='m-10'>

          <ProjectCard projectImage='noteSync.png' projectName='Note-Sync' techUsed='JSX, ReactJS, Redux, Tailwind CSS, JavaScript Local Storage' />

        </div>

        <div className='mr-10 ml-5'>

          <ProjectCard projectImage='nitroDashImage.jpg' projectName='Nitro Dash' techUsed='Unity Game Engine, C#' />

        </div>

        <div className='ml-10 mr-5'>

          <ProjectCard projectImage='flyingNemo.png' projectName='Digital Ink' techUsed='ReactJS, HTML Canvas, Tailwind CSS' />
          
        </div>

        <div className='m-10'>

          <ProjectCard projectImage='flyingNemo.png' projectName='TypeMaster' techUsed='ReactJS, Tailwind CSS, NPM Packages' />
          
        </div>

        <div className='mr-10 ml-5'>

          <ProjectCard projectImage='flyingNemo.png' projectName='Flying Nemo' techUsed='Unity Game Engine, C#' />
          
        </div>

        <div className='ml-10 mr-5'>

          <ProjectCard projectImage='pass.jpg' projectName='KeyForge' techUsed=' JavaScript, ReactJS, Tailwind CSS, JSX' />
          
        </div>

        <div className='m-10'>

          <ProjectCard projectImage='tictactoe.jpg' projectName='Tic Tac Toe' techUsed='HTML, Tailwind CSS JavaScript' />
          
        </div>

        <div className='mr-10 ml-5'>

          <ProjectCard projectImage='flyingNemo.png' projectName='Encuentro 2k24' techUsed='HTML, Tailwind CSS, JavaScript, Google Sheets' />
          
        </div>


      </div>

    </>
  )
}

export default Project
