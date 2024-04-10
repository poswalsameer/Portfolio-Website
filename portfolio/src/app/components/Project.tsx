import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>

      <h1 className='text-6xl font-bold mx-10 mt-40 mb-5 text-[#fefae0]' >&lt;PROJECTS /&gt;</h1>
      
      <div className='grid grid-cols-3 place-content-center place-items-center' id='projects'>

        <div className='ml-10 mr-5'> 

          <ProjectCard projectImage="music.jpg" projectName="Tunify Music" techUsed="HTML, Tailwind CSS, JavaScript, Google Firebase, NodeJS" liveLink='https://tunifymusic.netlify.app/musiclibrary' github="https://github.com/poswalsameer/Tunify-Music" /> 

        </div>

        <div className='m-10'>

          <ProjectCard projectImage='notesync.jpg' projectName='Note-Sync' techUsed='JSX, ReactJS, Redux, Tailwind CSS, JavaScript Local Storage' liveLink='https://notesync01.netlify.app/' github="https://github.com/poswalsameer/NoteSync" />

        </div>

        <div className='mr-10 ml-5'>

          <ProjectCard projectImage='nitro.jpg' projectName='Nitro Dash' techUsed='Unity Game Engine, C#' liveLink='https://sameerposwal.itch.io/nitro-dash' github="https://github.com/poswalsameer/Nitro-Dash" />

        </div>

        <div className='ml-10 mr-5'>

          <ProjectCard projectImage='sign.jpg' projectName='Digital Ink' techUsed='ReactJS, HTML Canvas, Tailwind CSS' liveLink='https://digitalinknew.vercel.app/' github="https://github.com/poswalsameer/DigitalInk"/>
          
        </div>

        <div className='m-10'>

          <ProjectCard projectImage='typing.jpg' projectName='TypeMaster' techUsed='ReactJS, Tailwind CSS, NPM Packages' liveLink='https://typemaster-typingtest.netlify.app/' github="https://github.com/poswalsameer/TypeMaster"/>
          
        </div>

        <div className='mr-10 ml-5'>

          <ProjectCard projectImage='nemo.jpg' projectName='Flying Nemo' techUsed='Unity Game Engine, C#' liveLink='https://sameerposwal.itch.io/flying-nemo' github="https://github.com/poswalsameer/Flying-Nemo" />
          
        </div>

        <div className='ml-10 mr-5'>

          <ProjectCard projectImage='pass.jpg' projectName='KeyForge' techUsed=' JavaScript, ReactJS, Tailwind CSS, JSX' liveLink='https://keyforge-passwordgenerator.netlify.app/' github="https://github.com/poswalsameer/KeyForge"/>
          
        </div>

        <div className='m-10'>

          <ProjectCard projectImage='tic.jpg' projectName='Tic Tac Toe' techUsed='HTML, Tailwind CSS JavaScript' liveLink='https://tictactango.netlify.app/' github="https://github.com/poswalsameer/Tic-Tac-Toe"/>
          
        </div>

        <div className='mr-10 ml-5'>

          <ProjectCard projectImage='encuentro.png' projectName='Encuentro 2k24' techUsed='HTML, Tailwind CSS, JavaScript, Google Sheets' liveLink='https://encuentro2k24.netlify.app/' github="https://github.com/poswalsameer/ieee-regn-page" />
          
        </div>


      </div>

    </>
  )
}

export default Project
