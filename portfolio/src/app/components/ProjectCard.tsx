import React, { MouseEventHandler, ReactNode } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';
import {Github } from 'lucide-react';


function ProjectCard(props: {
  github: string | undefined;
  liveLink: string | undefined;
  projectImage: string | undefined; projectName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; techUsed: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
}) {
  return (
    // border-2 border-[#fefae0]
    <div className='flex flex-row justify-center items-center rounded-xl transition-all ease-in hover:scale-105
    
    sm:flex sm:flex-row sm:justify-center sm:items-center sm:rounded-xl sm:transition-all sm:ease-in sm:hover:scale-105
    
    md:flex md:flex-col md:rounded-xl md:transition-all md:ease-in md:hover:scale-105
    
    lg:flex lg:flex-col lg:rounded-xl lg:transition-all lg:ease-in lg:hover:scale-105
    
    xl:flex xl:flex-col xl:rounded-xl xl:transition-all xl:ease-in xl:hover:scale-105
    
    2xl:flex 2xl:flex-col 2xl:rounded-xl 2xl:transition-all 2xl:ease-in 2xl:hover:scale-105 ' >

        <div>
          <img src={props.projectImage} alt="" className='h-28 w-[6rem] rounded-l-xl
          
          sm:h-36 sm:w-[10.5rem] sm:rounded-l-xl
          
          md:h-64 md:w-[19.5rem] md:rounded-t-xl md:rounded-bl-none md:rounded-br-none
          
          lg:h-60 lg:w-[19.5rem] lg:rounded-t-xl
          
          xl:h-72 xl:w-[24rem] xl:rounded-t-xl
          
          2xl:h-72 2xl:w-[24rem] 2xl:rounded-t-xl' />
        </div>
        
        <div className='p-4 flex flex-col bg-[#c3a995] h-28 w-[15rem] rounded-r-xl
        
        sm:p-4 sm:flex sm:flex-col sm:bg-[#c3a995] sm:h-36 sm:w-[24rem] sm:rounded-r-xl
        
        md:p-4 md:flex md:flex-col md:justify-center md:items-center md:bg-[#c3a995] md:h-44 md:w-[19.5rem] md:rounded-b-xl md:rounded-tr-none
        
        lg:p-4 lg:flex lg:flex-col lg:justify-center lg:items-center lg:bg-[#c3a995] lg:h-56 lg:w-[19.5rem] lg:rounded-b-xl
        
        xl:p-4 xl:flex xl:flex-col xl:justify-center xl:items-center xl:bg-[#c3a995] xl:h-56 xl:w-[24rem] xl:rounded-b-xl
        
        2xl:p-4 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:bg-[#c3a995] 2xl:h-56 2xl:w-[24rem] 2xl:rounded-b-xl' >

            <h1 className='mt-0 text-[#0c1821] text-center text-xl font-extrabold
            
            sm:mt-0 sm:text-[#0c1821] sm:text-center sm:text-3xl sm:font-extrabold
            
            md:mt-4 md:text-[#0c1821] md:text-3xl md:font-extrabold
            
            lg:mt-2 lg:text-[#0c1821] lg:text-3xl lg:font-extrabold
            
            xl:mt-2 xl:text-[#0c1821] xl:text-3xl xl:font-extrabold
            
            2xl:mt-2 2xl:text-[#0c1821] 2xl:text-3xl 2xl:font-extrabold'>{props.projectName}</h1>

            <h1 className='h-40 w-full my-1 text-center text-[#6f5e53] font-bold text-[0.5rem]
            
            sm:h-44 sm:w-full sm:my-4 sm:text-center sm:text-[#6f5e53] sm:font-bold sm:text-xs
            
            md:h-44 md:w-full md:my-5 md:text-center md:text-[#6f5e53] md:font-bold md:text-xs
            
            lg:h-44 lg:w-full lg:my-5 lg:text-center lg:text-[#6f5e53] lg:font-bold lg:text-sm
            
            xl:h-44 xl:w-full xl:my-5 xl:text-center xl:text-[#6f5e53] xl:font-bold xl:text-sm
            
            2xl:h-44 2xl:w-full 2xl:my-5 2xl:text-center 2xl:text-[#6f5e53] 2xl:font-bold 2xl:text-sm '>{props.techUsed}</h1>

            <div className='w-full my-0 flex flex-row justify-between 
            
            sm:w-full sm:my-0 sm:flex sm:flex-row sm:justify-between
            
            md:w-full md:my-0 md:flex md:flex-row md:justify-between
            
            lg:w-full lg:my-1 lg:flex lg:flex-row lg:justify-between 
            
            xl:w-full xl:my-1 xl:flex xl:flex-row xl:justify-between 
            
            2xl:w-full 2xl:my-1 2xl:flex 2xl:flex-row 2xl:justify-between'>

                <a href={props.liveLink} target="_blank" className='mb-0 mx-8 bg-[#ab947e] p-1 rounded-md border-2 border-[#ab947e] hover:border-2 hover:border-[#4a4036] hover:cursor-none
                
                sm:mb-1 sm:mx-8 sm:bg-[#ab947e] sm:p-1 sm:rounded-md sm:border-2 sm:border-[#ab947e] sm:hover:border-2 sm:hover:border-[#4a4036] sm:hover:cursor-none
                
                md:mb-4 md:mx-8 md:bg-[#ab947e] md:p-2 md:rounded-lg md:border-2 md:border-[#ab947e] md:hover:border-2 md:hover:border-[#4a4036] md:hover:cursor-none
                
                lg:mx-8 lg:bg-[#ab947e] lg:p-2 lg:rounded-lg lg:border-2 lg:border-[#ab947e] lg:hover:border-2 lg:hover:border-[#4a4036] lg:hover:cursor-none
                
                xl:mx-8 xl:bg-[#ab947e] xl:p-2 xl:rounded-lg xl:border-2 xl:border-[#ab947e] xl:hover:border-2 xl:hover:border-[#4a4036] xl:hover:cursor-none
                
                2xl:mx-8 2xl:bg-[#ab947e] 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-[#ab947e] 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl:hover:cursor-none ' > 

                  <SquareArrowOutUpRight className='h-3 w-3
                  
                  sm:h-5 sm:w-5
                  '/>
                
                </a>

                <a href={props.github} target="_blank" className='mb-0 mx-8 bg-[#ab947e] p-1 rounded-md border-2 border-[#ab947e] hover:border-2 hover:border-[#4a4036] hover:cursor-none
                
                sm:mb-1 sm:mx-8 sm:bg-[#ab947e] sm:p-1 sm:rounded-md sm:border-2 sm:border-[#ab947e] sm:hover:border-2 sm:hover:border-[#4a4036] sm:hover:cursor-none
                
                md:mb-4 md:mx-8 md:bg-[#ab947e] md:p-2 md:rounded-lg md:border-2 md:border-[#ab947e] md:hover:border-2 md:hover:border-[#4a4036] md:hover:cursor-none
                
                lg:mx-8 lg:bg-[#ab947e] lg:p-2 lg:rounded-lg lg:border-2 lg:border-[#ab947e] lg:hover:border-2 lg:hover:border-[#4a4036] lg:hover:cursor-none
                
                xl:mx-8 xl:bg-[#ab947e] xl:p-2 xl:rounded-lg xl:border-2 xl:border-[#ab947e] xl:hover:border-2 xl:hover:border-[#4a4036] xl:hover:cursor-none
                
                2xl:mx-8 2xl:bg-[#ab947e] 2xl:p-2 2xl:rounded-lg 2xl:border-2 2xl:border-[#ab947e] 2xl:hover:border-2 2xl:hover:border-[#4a4036] 2xl:hover:cursor-none ' > 

                  <Github className='h-3 w-3
                  
                  sm:h-5 sm:w-5' />

                </a>
            </div>

        </div>

    </div>
  )
}

export default ProjectCard




