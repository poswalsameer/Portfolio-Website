import React from 'react'


function ProjectCard(props: {
  projectImage: string | undefined; projectName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; techUsed: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
}) {
  return (
    <div className='flex flex-col' >

        <div><img src={props.projectImage} alt="" className='h-80 w-[37rem] rounded-t-xl' /></div>
        
        <div className='p-6 flex flex-col justify-center items-center bg-purple-300 h-56 w-[37rem] rounded-b-xl' >

            <h1 className='my-2 text-black text-4xl font-extrabold'>{props.projectName}</h1>

            <h1 className='h-44 w-full my-2 text-center text-black font-bold text-xl '>{props.techUsed}</h1>

            <div className=' w-full my-1 flex flex-row justify-between'>
                <a href="" className='mx-3 h-10 w-32 rounded-lg bg-purple-600 flex justify-center items-center text-black text-lg font-bold border-2 border-purple-950' > Live Project </a>

                <a href="" className='mx-3 h-10 w-32 rounded-lg bg-purple-600 flex justify-center items-center text-black text-lg font-bold border-2 border-purple-950'>GitHub </a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard
