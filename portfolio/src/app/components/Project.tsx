import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>

      <h1 className='text-2xl font-bold mx-2 mb-10 text-[#fefae0]
      
      sm:text-4xl sm:font-bold sm:mx-6 sm:mb-10 sm:text-[#fefae0]
      
      md:text-4xl md:font-bold md:mx-8 md:mb-5 md:text-[#fefae0]
      
      lg:text-5xl lg:font-bold lg:mx-10 lg:mb-5 lg:text-[#fefae0]
      
      xl:text-5xl xl:font-bold xl:mx-10 xl:mb-5 xl:text-[#fefae0]
      
      2xl:text-5xl 2xl:font-bold 2xl:mx-12 ]2xl:mb-5 2xl:text-[#fefae0]' >
        &lt;PROJECTS /&gt;
      </h1>
      
      <div className='
      mt-3 h-full w-full flex justify-center items-center
      sm:mt-10 sm:h-full sm:w-full sm:flex sm:justify-center sm:items-center
      md:mt-10 md:h-full md:w-full md:flex md:justify-center md:items-center
      lg:mt-10 lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center
      xl:mt-10 xl:h-full xl:w-full xl:flex xl:justify-center xl:items-center
      2xl:mt-10 2xl:h-full 2xl:w-full 2xl:flex 2xl:justify-center 2xl:items-center'>

        <div className=' 
        w-[85%] grid grid-cols-1 gap-x-0 gap-y-2
        sm:w-[85%] sm:grid sm:grid-cols-1 sm:gap-x-0 sm:gap-y-4
        md:w-[90%] md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-8
        lg:w-[93%] lg:grid lg:grid-cols-3 lg:gap-x-0 lg:gap-y-8
        xl:w-[100%] xl:grid xl:grid-cols-3 xl:gap-x-0 xl:gap-y-8
        2xl:w-[85%] 2xl:grid 2xl:grid-cols-3 2xl:gap-x-0 2xl:gap-y-8'>

          <ProjectCard projectImage="mines-Image.jpeg" projectName="MineRush" techUsed="Next.js, TypeScript, Tailwind CSS, ShadCN" liveLink='https://minerush.vercel.app/' github="https://github.com/poswalsameer/MineRush" /> 

          <ProjectCard projectImage='sign.jpg' projectName='Digital Ink' techUsed='NextJS, JavaScript, HTML Canvas, Tailwind CSS' liveLink='https://digitalinknew.vercel.app/' github="https://github.com/poswalsameer/DigitalInk"/>

          <ProjectCard projectImage='typing.jpg' projectName='TypeMaster' techUsed='ReactJS, Tailwind CSS, NPM Packages' liveLink='https://typemaster-typingtest.netlify.app/' github="https://github.com/poswalsameer/TypeMaster"/>

          <ProjectCard projectImage="music.jpg" projectName="Tunify Music" techUsed="HTML, Tailwind CSS, JavaScript, Google Firebase, NodeJS" liveLink='https://tunifymusic.netlify.app/musiclibrary' github="https://github.com/poswalsameer/Tunify-Music" />

          <ProjectCard projectImage='nitro.jpg' projectName='Nitro Dash' techUsed='Unity Game Engine, C#' liveLink='https://sameerposwal.itch.io/nitro-dash' github="https://github.com/poswalsameer/Nitro-Dash" /> 

          <ProjectCard projectImage='flyingNemo.png' projectName='Flying Nemo' techUsed='Unity Game Engine, C#' liveLink='https://sameerposwal.itch.io/flying-nemo' github="https://github.com/poswalsameer/Flying-Nemo" />

          <ProjectCard projectImage='notesync.jpg' projectName='Note-Sync' techUsed='JSX, ReactJS, Redux, Tailwind CSS, JavaScript Local Storage' liveLink='https://notesync01.netlify.app/' github="https://github.com/poswalsameer/NoteSync" />

          <ProjectCard projectImage='pass.jpg' projectName='KeyForge' techUsed=' JavaScript, ReactJS, Tailwind CSS, JSX' liveLink='https://keyforge-passwordgenerator.netlify.app/' github="https://github.com/poswalsameer/KeyForge"/>

          <ProjectCard projectImage='tic.jpg' projectName='Tic Tac Tango' techUsed='HTML, Tailwind CSS, JavaScript' liveLink='https://tictactango.netlify.app/' github="https://github.com/poswalsameer/Tic-Tac-Toe"/>

          <ProjectCard projectImage='encuentro.png' projectName='Encuentro 2k24' techUsed='HTML, Tailwind CSS, JavaScript, Google Sheets' liveLink='https://encuentro2k24.netlify.app/' github="https://github.com/poswalsameer/ieee-regn-page" />

        </div>
      </div>

    </>
  )
}

export default Project
