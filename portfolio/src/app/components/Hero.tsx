"use client";

import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';


const texts = ['Software', 'Frontend', 'Game'];

function Hero() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => setIndex((index) => index+1), 1800);

        return () => clearTimeout(intervalId);

    }, [])



  return (
    <div className='sm:mt-44 sm:flex sm:flex-row sm:justify-center sm:items-center
    
    md:mt-32 md:flex md:flex-row md:justify-center md:items-center
    
    lg:mt-32 lg:flex lg:flex-row lg:justify-center lg:items-center 
    
    xl:mt-32 xl:flex xl:flex-row xl:justify-center xl:items-center 
    
    2xl:mt-32 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center ' id='home'>
        
        <div className='sm:flex sm:flex-col sm:justify-center sm:items-center 
        
        md:flex md:flex-col md:justify-center md:items-center 
        
        lg:flex lg:flex-col lg:justify-center lg:items-center 
        
        xl:flex xl:flex-col xl:justify-center xl:items-center 
        
        2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center ' >

            <h1 className='sm:text-6xl sm:text-[#faf5f0] sm:font-extrabold sm:my-6
            
            md:text-7xl md:text-[#faf5f0] md:font-extrabold md:my-6
            
            lg:text-8xl lg:text-[#faf5f0] lg:font-extrabold lg:my-6
            
            xl:text-8xl xl:text-[#faf5f0] xl:font-extrabold xl:my-6
            
            2xl:text-8xl 2xl:text-[#faf5f0] 2xl:font-extrabold 2xl:my-6'>

                <b className='transition-all ease-in hover:text-[#c3a995]'>S</b><b className='transition-all ease-in hover:text-[#c3a995]'>A</b><b className='transition-all ease-in hover:text-[#c3a995]'>M</b><b className='transition-all ease-in hover:text-[#c3a995]'>E</b><b className='transition-all ease-in hover:text-[#c3a995]'>E</b><b className='transition-all ease-in hover:text-[#c3a995]'>R</b> <b className='transition-all ease-in hover:text-[#c3a995]'>P</b><b className='transition-all ease-in hover:text-[#c3a995]'>O</b><b className='transition-all ease-in hover:text-[#c3a995]'>S</b><b className='transition-all ease-in hover:text-[#c3a995]'>W</b><b className='transition-all ease-in hover:text-[#c3a995]'>A</b><b className='transition-all ease-in hover:text-[#c3a995]'>L</b>
            </h1>

            <div className='sm:flex sm:flex-row sm:text-4xl sm:text-[#c3a995] sm:font-semibold sm:my-3
            
            md:flex md:flex-row md:text-4xl md:text-[#c3a995] md:font-semibold md:my-3
            
            lg:flex lg:flex-row lg:text-5xl lg:text-[#c3a995] lg:font-semibold lg:my-3
            
            xl:flex xl:flex-row xl:text-5xl xl:text-[#c3a995] xl:font-semibold xl:my-3
            
            2xl:flex 2xl:flex-row 2xl:text-5xl 2xl:text-[#c3a995] 2xl:font-semibold 2xl:my-3 ' >

                <h1 className='sm:absolute sm:-ml-[28%] sm:text-[#c3a995]
                
                md:absolute md:-ml-[23%] md:text-[#c3a995]
                
                lg:absolute lg:-ml-[23%] lg:text-[#c3a995]
                
                xl:absolute xl:-ml-[18%] xl:text-[#c3a995]
                
                2xl:absolute 2xl:-ml-[15%] 2xl:text-[#c3a995]'><TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition></h1>

                <h1 className='sm:absolute sm:ml-[0%]
                
                md:absolute md:ml-[0%]
                
                lg:absolute lg:ml-[0%]
                
                xl:absolute xl:ml-[0%]
                
                2xl:absolute 2xl:ml-[0%]'>
                    Developer
                </h1>
            </div>

            <div className='sm:flex sm:flex-row sm:mt-14
            
            md:flex md:flex-row md:mt-20
            
            lg:flex lg:flex-row lg:mt-20
            
            xl:flex xl:flex-row xl:mt-20
            
            2xl:flex 2xl:flex-row 2xl:mt-20' >

                <a href="https://github.com/poswalsameer" target="_blank"><img src="github.png" alt="" className='sm:bg-[#f0e2d3] sm:p-2 sm:rounded-xl sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-3
                
                md:bg-[#f0e2d3] md:p-2 md:rounded-xl md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-4
                
                lg:bg-[#f0e2d3] lg:p-2 lg:rounded-xl lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-4
                
                xl:bg-[#f0e2d3] xl:p-2 xl:rounded-xl xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-4
                
                2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-xl 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:transition-all 2xl:ease-in 2xl:delay-75 2xl:hover:scale-110 2xl:hover:cursor-none 2xl:mx-4 '/></a> 

                <a href="https://leetcode.com/poswalsameer/" target="_blank"><img src="leetcode.png" alt="" className='sm:bg-[#f0e2d3] sm:p-2 sm:rounded-xl sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-3
                
                md:bg-[#f0e2d3] md:p-2 md:rounded-xl md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-4
                
                lg:bg-[#f0e2d3] lg:p-2 lg:rounded-xl lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-4
                
                xl:bg-[#f0e2d3] xl:p-2 xl:rounded-xl xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-4
                
                2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-xl 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:mx-4 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:cursor-none'/></a>

                <a href="https://twitter.com/sameerposwal03" target="_blank"><img src="twitter.png" alt="" className='sm:bg-[#f0e2d3] sm:p-2 sm:rounded-xl sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-3
                
                md:bg-[#f0e2d3] md:p-2 md:rounded-xl md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-4
                
                lg:bg-[#f0e2d3] lg:p-2 lg:rounded-xl lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-4
                
                xl:bg-[#f0e2d3] xl:p-2 xl:rounded-xl xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-4
                
                2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-xl 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:cursor-none 2xl:mx-4'/></a>

                <a href="https://www.linkedin.com/in/sameerposwal/" target="_blank"><img src="linkedin.png" alt="" className='sm:bg-[#f0e2d3] sm:p-2 sm:rounded-xl sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-3
                
                md:bg-[#f0e2d3] md:p-2 md:rounded-xl md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-4
                
                lg:bg-[#f0e2d3] lg:p-2 lg:rounded-xl lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-4
                
                xl:bg-[#f0e2d3] xl:p-2 xl:rounded-xl xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-4
                
                2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-xl 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:mx-4 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:cursor-none'/></a>
            </div>

            <a href="SameerPoswalResume.pdf" download>
                <button className='sm:h-12 sm:w-44 sm:flex sm:flex-row sm:justify-center sm:items-center sm:font-bold sm:text-lg sm:text-black sm:bg-[#c3a995] sm:rounded-xl sm:-ml-1 sm:my-12 sm:transition-all sm:ease-in sm:hover:bg-[#f0e2d3] sm:hover:text-black sm:hover:border-2 sm:hover:border-[#fefae0] sm:hover:cursor-none
                
                md:h-12 md:w-44 md:flex md:flex-row md:justify-center md:items-center md:font-bold md:text-lg md:text-black md:bg-[#c3a995] md:rounded-xl md:-ml-1 md:my-12 md:transition-all md:ease-in md:hover:bg-[#f0e2d3] md:hover:text-black md:hover:border-2 md:hover:border-[#fefae0] md:hover:cursor-none
                
                lg:h-12 lg:w-44 lg:flex lg:flex-row lg:justify-center lg:items-center lg:font-bold lg:text-lg lg:text-black lg:bg-[#c3a995] lg:rounded-xl lg:-ml-1 lg:my-12 lg:transition-all lg:ease-in lg:hover:bg-[#f0e2d3] lg:hover:text-black lg:hover:border-2 lg:hover:border-[#fefae0] lg:hover:cursor-none
                
                xl:h-12 xl:w-44 xl:flex xl:flex-row xl:justify-center xl:items-center xl:font-bold xl:text-lg xl:text-black xl:bg-[#c3a995] xl:rounded-xl xl:-ml-1 xl:my-12 xl:transition-all xl:ease-in xl:hover:bg-[#f0e2d3] xl:hover:text-black xl:hover:border-2 xl:hover:border-[#fefae0] xl:hover:cursor-none
                
                2xl:h-12 2xl:w-44 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:text-lg 2xl:text-black 2xl:bg-[#c3a995] 2xl:rounded-xl 2xl:-ml-10 2xl:my-12 2xl:transition-all 2xl:ease-in 2xl:hover:bg-[#f0e2d3] 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#fefae0] 2xl:hover:cursor-none '>
                    <p className='mx-2'>Resume</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </button>
            </a>

        </div>

        {/* <img src="meInSuit.jpg" alt="" id='imageDiv' className='h-[30rem] w-[22rem] rounded-xl my-10 mr-36' /> */}


    </div>
  )
}

export default Hero
