import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>
      
      <div className='grid grid-cols-2 place-content-center place-items-center'>

        <div className='m-10'> <ProjectCard /> </div>

        <div className='m-10'> <ProjectCard /> </div>

        <div className='m-10'> <ProjectCard /> </div>

        <div className='m-10'> <ProjectCard /> </div>


      </div>

    </>
  )
}

export default Project
