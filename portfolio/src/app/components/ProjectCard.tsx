import React from 'react'


function ProjectCard(props: {
  projectImage: string | undefined; projectName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; techUsed: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
}) {
  return (
    <div className='flex flex-col border-2 border-[#3e3121] rounded-xl' >

        <div>
          <img src={props.projectImage} alt="" className='h-80 w-[27rem] rounded-t-xl' />
        </div>
        
        <div className='p-4 flex flex-col justify-center items-center   bg-[#dda15e] h-56 w-[27rem] rounded-b-xl' >

            <h1 className='my-2 text-[#3e3121] text-3xl font-extrabold'>{props.projectName}</h1>

            <h1 className='h-44 w-full my-5 text-center text-[#3e3121] font-bold text-sm '>{props.techUsed}</h1>

            <div className=' w-full my-1 flex flex-row justify-between'>
                <a href="" className='mx-3 h-8 w-28 rounded-lg bg-[#fefae0] flex justify-center items-center text-[#3e3121] text-sm font-semibold border-2 border-[#3e3121]' > Live Project </a>

                <a href="" className='mx-3 h-8 w-28 rounded-lg bg-[#fefae0] flex justify-center items-center text-[#3e3121] text-sm font-semibold border-2 border-[#3e3121]'>GitHub </a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard
