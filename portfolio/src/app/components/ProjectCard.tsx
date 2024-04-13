import React, { MouseEventHandler, ReactNode } from 'react'


function ProjectCard(props: {
  github: string | undefined;
  liveLink: string | undefined;
  projectImage: string | undefined; projectName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; techUsed: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
}) {
  return (
    // border-2 border-[#fefae0]
    <div className='md:flex md:flex-col md:rounded-xl md:transition-all md:ease-in md:hover:scale-105
    
    lg:flex lg:flex-col lg:rounded-xl lg:transition-all lg:ease-in lg:hover:scale-105
    
    xl:flex xl:flex-col xl:rounded-xl xl:transition-all xl:ease-in xl:hover:scale-105
    
    2xl:flex 2xl:flex-col 2xl:rounded-xl 2xl:transition-all 2xl:ease-in 2xl:hover:scale-105 ' >

        <div>
          <img src={props.projectImage} alt="" className='md:h-64 md:w-[19.5rem] md:rounded-t-xl
          
          lg:h-60 lg:w-[19.5rem] lg:rounded-t-xl
          
          xl:h-72 xl:w-[24rem] xl:rounded-t-xl
          
          2xl:h-72 2xl:w-[24rem] 2xl:rounded-t-xl' />
        </div>
        
        <div className='md:p-4 md:flex md:flex-col md:justify-center md:items-center md:bg-[#c3a995] md:h-44 md:w-[19.5rem] md:rounded-b-xl
        
        lg:p-4 lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-[#c3a995] lg:h-56 lg:w-[19.5rem] lg:rounded-b-xl
        
        xl:p-4 xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-[#c3a995] xl:h-56 xl:w-[24rem] xl:rounded-b-xl
        
        2xl:p-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-[#c3a995] 2xl:h-56 2xl:w-[24rem] 2xl:rounded-b-xl' >

            <h1 className='md:mt-4 md:text-[#0c1821] md:text-3xl md:font-extrabold
            
            lg:mt-2 lg:text-[#0c1821] lg:text-3xl lg:font-extrabold
            
            xl:mt-2 xl:text-[#0c1821] xl:text-3xl xl:font-extrabold
            
            2xl:mt-2 2xl:text-[#0c1821] 2xl:text-3xl 2xl:font-extrabold'>{props.projectName}</h1>

            <h1 className='md:h-44 md:w-full md:my-5 md:text-center md:text-[#6f5e53] md:font-bold md:text-xs
            
            lg:h-44 lg:w-full lg:my-5 lg:text-center lg:text-[#6f5e53] lg:font-bold lg:text-sm
            
            xl:h-44 xl:w-full xl:my-5 xl:text-center xl:text-[#6f5e53] xl:font-bold xl:text-sm
            
            2xl:h-44 2xl:w-full 2xl:my-5 2xl:text-center 2xl:text-[#6f5e53] 2xl:font-bold 2xl:text-sm '>{props.techUsed}</h1>

            <div className='md:w-full md:my-0 md:flex md:flex-row md:justify-between
            
            lg:w-full lg:my-1 lg:flex lg:flex-row lg:justify-between 
            
            xl:w-full xl:my-1 xl:flex xl:flex-row xl:justify-between 
            
            2xl:w-full 2xl:my-1 2xl:flex 2xl:flex-row 2xl:justify-between'>

                <a href={props.liveLink} target="_blank" className='md:mb-4 md:mx-8 md:bg-[#ab947e] md:p-2 md:rounded-lg md:border-2 md:border-[#ab947e] md:hover:border-2 md:hover:border-[#4a4036] md:hover:cursor-none
                
                lg:mx-8 lg:bg-[#ab947e] lg:p-2 lg:rounded-lg lg:border-2 lg:border-[#ab947e] lg:hover:border-2 lg:hover:border-[#4a4036] lg:hover:cursor-none
                
                xl:mx-8 xl:bg-[#ab947e] xl:p-2 xl:rounded-lg xl:border-2 xl:border-[#ab947e] xl:hover:border-2 xl:hover:border-[#4a4036] xl:hover:cursor-none
                
                2xl:mx-8 2xl:bg-[#ab947e] 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-[#ab947e] 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl:hover:cursor-none ' > 

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                
                </a>

                <a href={props.github} target="_blank" className='md:mb-4 md:mx-8 md:bg-[#ab947e] md:p-2 md:rounded-lg md:border-2 md:border-[#ab947e] md:hover:border-2 md:hover:border-[#4a4036] md:hover:cursor-none
                
                lg:mx-8 lg:bg-[#ab947e] lg:p-2 lg:rounded-lg lg:border-2 lg:border-[#ab947e] lg:hover:border-2 lg:hover:border-[#4a4036] lg:hover:cursor-none
                
                xl:mx-8 xl:bg-[#ab947e] xl:p-2 xl:rounded-lg xl:border-2 xl:border-[#ab947e] xl:hover:border-2 xl:hover:border-[#4a4036] xl:hover:cursor-none
                
                2xl:mx-8 2xl:bg-[#ab947e] 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-[#ab947e] 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl:hover:cursor-none ' > 

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>

                </a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard
