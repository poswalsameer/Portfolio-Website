import React from 'react'

function ProjectCard() {
  return (
    <div className='flex flex-col' >

        <div><img src="tunifyImage.jpg" alt="" className='h-80 w-[37rem] rounded-t-xl' /></div>
        
        <div className='p-4 flex flex-col justify-center items-center bg-purple-300 h-56 w-[37rem] rounded-b-xl' >

            <h1 className='my-5 text-black text-4xl font-extrabold'>Tunify Music</h1>

            <h1 className='my-5 text-black font-bold text-xl '>HTML, Tailwind CSS, JavaScript, Google Firebase, NodeJS</h1>

            <div className=' w-full my-5 flex flex-row justify-between'>
                <a href="" className='mx-3 text-black text-xl font-bold' > Live Project </a>
                <a href="" className='mx-3 text-black text-xl font-bold'>GitHub Repository</a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard
