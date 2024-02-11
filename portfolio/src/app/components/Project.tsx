import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>
      
      <div className='grid grid-cols-2 place-content-center place-items-center'>

        <div className='m-10'> 

          <ProjectCard projectImage="tunifyImage.jpg" projectName="Tunify Music" techUsed="HTML, Tailwind CSS, JavaScript, Google Firebase, NodeJS" /> 

        </div>

        <div className='m-10'>

          <ProjectCard projectImage='noteSync.png' projectName='Note-Sync' techUsed='ReactJS, Redux, Tailwind CSS, JavaScript Local Storage' />

        </div>

        <div className='m-10'>

          <ProjectCard projectImage='nitroDashImage.jpg' projectName='Nitro Dash' techUsed='Unity Game Engine, C#' />

        </div>

        <div className='m-10'>

          <ProjectCard projectImage='flyingNemo.png' projectName='Flying Nemo' techUsed='Unity Game Engine, C#' />
          
        </div>


      </div>

    </>
  )
}

export default Project
