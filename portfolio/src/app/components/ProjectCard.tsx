import React from 'react'


function ProjectCard(props: {
  projectImage: string | undefined; projectName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; techUsed: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
}) {
  return (
    <div className='flex flex-col border-2 border-[#fefae0] rounded-xl' >

        <div>
          <img src={props.projectImage} alt="" className='h-72 w-[24rem] rounded-t-xl' />
        </div>
        
        <div className='p-4 flex flex-col justify-center items-center   bg-[#c6ac8f] h-56 w-[24rem] rounded-b-xl' >

            <h1 className='my-2 text-[#0a0908] text-3xl font-extrabold'>{props.projectName}</h1>

            <h1 className='h-44 w-full my-5 text-center text-[#22333b] font-bold text-sm '>{props.techUsed}</h1>

            <div className=' w-full my-1 flex flex-row justify-between'>
                <a href="" className='mx-3 h-8 w-28 rounded-lg bg-[#0a0908] flex justify-center items-center text-[#eae0d5] text-sm text-center font-semibold border-2 border-[#0a0908]' > Live Project </a>

                <a href="" className='mx-3 h-8 w-28 rounded-lg bg-[#0a0908] flex justify-center items-center text-[#eae0d5] text-sm text-center font-semibold border-2 border-[#0a0908]'>GitHub </a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard
