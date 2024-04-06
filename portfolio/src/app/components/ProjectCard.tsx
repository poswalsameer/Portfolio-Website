import React, { MouseEventHandler, ReactNode } from 'react'


function ProjectCard(props: {
  github: string | undefined;
  liveLink: string | undefined;
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
                <a href={props.liveLink} target="_blank" className='mx-8' > 

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                
                </a>

                <a href={props.github} target="_blank" className='mx-8' > 

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>

                </a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard
