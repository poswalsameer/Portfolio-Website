"use client";

import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { ArrowBigDown, Route } from 'lucide-react';
import { ChevronsDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const texts = ['Software', 'Frontend', 'Game'];

function Hero() {

  return (

    <>

    <div className='h-full w-full flex flex-col'>

    {/* ELEMENTS WALA DIV */}
    <div className=' 
    h-[90%] flex flex-col justify-center items-center
    sm:flex sm:flex-col sm:justify-center sm:items-center
    md:flex md:flex-col md:justify-center md:items-center
    lg:flex lg:flex-col lg:justify-center lg:items-center 
    xl:flex xl:flex-col xl:justify-center xl:items-center 
    2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center ' id='home'>

        <h1 className='
        text-[2.75rem] text-[#faf5f0] font-extrabold
        sm:text-7xl sm:text-[#faf5f0] sm:font-extrabold
        md:text-7xl md:text-[#faf5f0] md:font-extrabold
        lg:text-8xl lg:text-[#faf5f0] lg:font-extrabold
        xl:text-8xl xl:text-[#faf5f0] xl:font-extrabold
        2xl:text-8xl 2xl:text-[#faf5f0] 2xl:font-extrabold'>

            <b className='transition-all ease-in hover:text-[#c3a995]'>S</b><b className='transition-all ease-in hover:text-[#c3a995]'>A</b><b className='transition-all ease-in hover:text-[#c3a995]'>M</b><b className='transition-all ease-in hover:text-[#c3a995]'>E</b><b className='transition-all ease-in hover:text-[#c3a995]'>E</b><b className='transition-all ease-in hover:text-[#c3a995]'>R</b> <b className='transition-all ease-in hover:text-[#c3a995]'>P</b><b className='transition-all ease-in hover:text-[#c3a995]'>O</b><b className='transition-all ease-in hover:text-[#c3a995]'>S</b><b className='transition-all ease-in hover:text-[#c3a995]'>W</b><b className='transition-all ease-in hover:text-[#c3a995]'>A</b><b className='transition-all ease-in hover:text-[#c3a995]'>L</b>
        </h1>

        <div className='
            flex flex-row justify-center items-center text-2xl text-[#c3a995] font-semibold my-3
            sm:flex sm:flex-row sm:justify-center sm:items-center sm:text-4xl sm:text-[#c3a995] sm:font-semibold sm:my-3
            md:flex md:flex-row md:justify-center md:items-center md:text-4xl md:text-[#c3a995] md:font-semibold md:my-4             
            lg:flex lg:flex-row lg:justify-center lg:items-center lg:text-5xl lg:text-[#c3a995] lg:font-semibold lg:my-4 
            xl:flex xl:flex-row xl:justify-center xl:items-center xl:text-5xl xl:text-[#c3a995] xl:font-semibold xl:my-4            
            2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:text-5xl 2xl:text-[#c3a995] 2xl:font-semibold 2xl:my-4' >

                <div className='
                px-0 w-36 flex justify-end items-center
                sm:px-0 sm:w-56 sm:flex sm:justify-end sm:items-center
                md:px-0 md:w-60 md:flex md:justify-end md:items-center                
                lg:px-1 lg:w-72 lg:flex lg:justify-end lg:items-center
                xl:px-1 xl:w-72 xl:flex xl:justify-end xl:items-center                
                2xl:px-1 2xl:w-72 2xl:flex 2xl:justify-end 2xl:items-center '>

                    <h1 className='
                    text-[#c3a995]                    
                    sm:text-[#c3a995]                    
                    md:text-[#c3a995]                    
                    lg:text-[#c3a995]                    
                    xl:text-[#c3a995]
                    2xl:text-[#c3a995]'>

                        <Typewriter  
                            options={{
                                strings: ['Software', 'Full-Stack', 'Game'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </h1>

                </div>

                <div className='
                    px-1 w-40 flex justify-start items-center
                    sm:px-1 sm:w-56 sm:flex sm:justify-start sm:items-center
                    md:px-1 md:w-60 md:flex md:justify-start md:items-center
                    lg:px-1 lg:w-72 lg:flex lg:justify-start lg:items-center
                    xl:px-1 xl:w-72 xl:flex xl:justify-start xl:items-center
                    2xl:px-1 2xl:w-72 2xl:flex 2xl:justify-start 2xl:items-center '> 
                    <h1 className=''>
                        Developer
                    </h1>
                </div>

            </div>

            <div className='
                flex flex-row my-3
                sm:flex sm:flex-row sm:my-3
                md:flex md:flex-row md:my-4
                lg:flex lg:flex-row lg:my-4
                xl:flex xl:flex-row xl:my-4
                2xl:flex 2xl:flex-row 2xl:my-4 ' >

                <a href="https://github.com/poswalsameer" target="_blank"><img src="github.png" alt="" className='
                    bg-[#f0e2d3] p-2 rounded-md h-10 w-10 border-2 border-[#f0e2d3] transition-all ease-in delay-75 hover:scale-110 hover:cursor-none mx-1
                    sm:bg-[#f0e2d3] sm:p-2 sm:rounded-md sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-2
                    md:bg-[#f0e2d3] md:p-2 md:rounded-md md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-3
                    lg:bg-[#f0e2d3] lg:p-2 lg:rounded-lg lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-3
                    xl:bg-[#f0e2d3] xl:p-2 xl:rounded-lg xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-3
                    2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-lg 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:transition-all 2xl:ease-in 2xl:delay-75 2xl:hover:scale-110 2xl:hover:cursor-none 2xl:mx-3 '/></a> 

                <a href="https://leetcode.com/poswalsameer/" target="_blank"><img src="leetcode.png" alt="" className='
                    bg-[#f0e2d3] p-2 rounded-md h-10 w-10 border-2 border-[#f0e2d3] transition-all ease-in delay-75 hover:scale-110 hover:cursor-none mx-1
                    sm:bg-[#f0e2d3] sm:p-2 sm:rounded-md sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-2
                    md:bg-[#f0e2d3] md:p-2 md:rounded-md md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-3
                    lg:bg-[#f0e2d3] lg:p-2 lg:rounded-lg lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-3
                    xl:bg-[#f0e2d3] xl:p-2 xl:rounded-lg xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-3
                    2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-lg 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:mx-3 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:cursor-none'/></a>

                <a href="https://twitter.com/sameerposwal03" target="_blank"><img src="twitter.png" alt="" className='
                    bg-[#f0e2d3] p-2 rounded-md h-10 w-10 border-2 border-[#f0e2d3] transition-all ease-in delay-75 hover:scale-110 hover:cursor-none mx-1
                    sm:bg-[#f0e2d3] sm:p-2 sm:rounded-md sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-2
                    md:bg-[#f0e2d3] md:p-2 md:rounded-md md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-3
                    lg:bg-[#f0e2d3] lg:p-2 lg:rounded-lg lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-3
                    xl:bg-[#f0e2d3] xl:p-2 xl:rounded-lg xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-3
                    2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-lg 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:cursor-none 2xl:mx-3'/></a>

                <a href="https://www.linkedin.com/in/sameerposwal/" target="_blank"><img src="linkedin.png" alt="" className='
                    bg-[#f0e2d3] p-2 rounded-md h-10 w-10 border-2 border-[#f0e2d3] transition-all ease-in delay-75 hover:scale-110 hover:cursor-none mx-1
                    sm:bg-[#f0e2d3] sm:p-2 sm:rounded-md sm:h-10 sm:w-10 sm:border-2 sm:border-[#f0e2d3] sm:transition-all sm:ease-in sm:delay-75 sm:hover:scale-110 sm:hover:cursor-none sm:mx-2
                    md:bg-[#f0e2d3] md:p-2 md:rounded-md md:h-12 md:w-12 md:border-2 md:border-[#f0e2d3] md:transition-all md:ease-in md:delay-75 md:hover:scale-110 md:hover:cursor-none md:mx-3
                    lg:bg-[#f0e2d3] lg:p-2 lg:rounded-lg lg:h-12 lg:w-12 lg:border-2 lg:border-[#f0e2d3] lg:transition-all lg:ease-in lg:delay-75 lg:hover:scale-110 lg:hover:cursor-none lg:mx-3
                    xl:bg-[#f0e2d3] xl:p-2 xl:rounded-lg xl:h-12 xl:w-12 xl:border-2 xl:border-[#f0e2d3] xl:transition-all xl:ease-in xl:delay-75 xl:hover:scale-110 xl:hover:cursor-none xl:mx-3
                    2xl:bg-[#f0e2d3] 2xl:p-2 2xl:rounded-lg 2xl:h-12 2xl:w-12 2xl:border-2 2xl:border-[#f0e2d3] 2xl:mx-3 2xl:transition-all 2xl:ease-in 2xl:hover:scale-110 2xl:hover:cursor-none'/></a>
            </div>

            <a href="https://docs.google.com/document/d/1X5eMOd4Jn4zolTgN-wwA2KxnnPu25FRe/edit?usp=sharing&ouid=105591030184095501081&rtpof=true&sd=true" target="_blank">
                <button 
                className='
                
                h-10 w-36 flex flex-row justify-center items-center font-bold text-lg text-black bg-[#c3a995] rounded-md transition-all ease-in hover:bg-[#f0e2d3] hover:text-black hover:border-2 hover:border-[#fefae0] hover:cursor-none my-3
                sm:h-12 sm:w-40 sm:flex sm:flex-row sm:justify-center sm:items-center sm:font-bold sm:text-lg sm:text-black sm:bg-[#c3a995] sm:rounded-lg sm:transition-all sm:ease-in sm:hover:bg-[#f0e2d3] sm:hover:text-black sm:hover:border-2 sm:hover:border-[#fefae0] sm:hover:cursor-none sm:my-3
                md:h-12 md:w-40 md:flex md:flex-row md:justify-center md:items-center md:font-bold md:text-lg md:text-black md:bg-[#c3a995] md:rounded-lg md:transition-all md:ease-in md:hover:bg-[#f0e2d3] md:hover:text-black md:hover:border-2 md:hover:border-[#fefae0] md:hover:cursor-none md:my-4
                lg:h-12 lg:w-40 lg:flex lg:flex-row lg:justify-center lg:items-center lg:font-bold lg:text-lg lg:text-black lg:bg-[#c3a995] lg:rounded-lg lg:transition-all lg:ease-in lg:hover:bg-[#f0e2d3] lg:hover:text-black lg:hover:border-2 lg:hover:border-[#fefae0] lg:hover:cursor-none lg:my-4
                xl:h-12 xl:w-40 xl:my-4 xl:flex xl:flex-row xl:justify-center xl:items-center xl:font-bold xl:text-lg xl:text-black xl:bg-[#c3a995] xl:rounded-lg xl:transition-all xl:ease-in xl:hover:bg-[#f0e2d3] xl:hover:text-black xl:hover:border-2 xl:hover:border-[#fefae0] xl:hover:cursor-none
                2xl:h-12 2xl:w-40 2xl:my-4 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:text-lg 2xl:text-black 2xl:bg-[#c3a995] 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:bg-[#f0e2d3] 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#fefae0] 2xl:hover:cursor-none '>

                    <p className='mx-2'>
                        Resume
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </button>
            </a>


    </div>

    <div className='h-[10%] flex justify-center items-center'>
        <Link href="/portfolio" id='navButton'>
         
            <button className='
            
                mb-20 h-10 w-10 font-bold  text-lg text-black bg-[#f0e2d3] rounded-lg transition-all ease-in hover:bg-[#c3a995] hover:text-black hover:border-2 hover:border-[#c3a995] hover:cursor-none
                sm:h-12 sm:w-12 sm:font-bold  sm:text-lg sm:text-black sm:bg-[#f0e2d3] sm:rounded-lg sm:transition-all sm:ease-in sm:hover:bg-[#c3a995] sm:hover:text-black sm:hover:border-2 sm:hover:border-[#c3a995] sm:hover:cursor-none
                md:h-12 md:w-12 md:font-bold  md:text-lg md:text-black md:bg-[#f0e2d3] md:rounded-lg md:transition-all md:ease-in md:hover:bg-[#c3a995] md:hover:text-black md:hover:border-2 md:hover:border-[#c3a995] md:hover:cursor-none
                lg:h-12 lg:w-12 lg:font-bold  lg:text-lg lg:text-black lg:bg-[#f0e2d3] lg:rounded-lg lg:transition-all lg:ease-in lg:hover:bg-[#c3a995] lg:hover:text-black lg:hover:border-2 lg:hover:border-[#c3a995] lg:hover:cursor-none
                xl:h-12 xl:w-12 xl:font-bold  xl:text-lg xl:text-black xl:bg-[#f0e2d3] xl:rounded-lg xl:transition-all xl:ease-in xl:hover:bg-[#c3a995] xl:hover:text-black xl:hover:border-2 xl:hover:border-[#c3a995] xl:hover:cursor-none
                2xl:h-12 2xl:w-12 2xl:font-bold  2xl:text-lg 2xl:text-black 2xl:bg-[#f0e2d3] 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:bg-[#c3a995] 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#c3a995] 2xl:hover:cursor-none' >
                {/* <ArrowBigDown className='mx-auto' /> */}
                <ChevronsDown className='mx-auto'/>
            </button>
        </Link>
    </div>

    </div>

    </>
  )
}

export default Hero
