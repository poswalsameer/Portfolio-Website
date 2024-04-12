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
    <div className=' mt-32 flex flex-row justify-center items-center ' id='home'>
        
        <div className=' flex flex-col justify-center items-center ' >

            <h1 className='text-8xl text-[#faf5f0] font-extrabold my-6'>
                <b className='transition-all ease-in hover:text-[#c3a995]'>S</b><b className='transition-all ease-in hover:text-[#c3a995]'>A</b><b className='transition-all ease-in hover:text-[#c3a995]'>M</b><b className='transition-all ease-in hover:text-[#c3a995]'>E</b><b className='transition-all ease-in hover:text-[#c3a995]'>E</b><b className='transition-all ease-in hover:text-[#c3a995]'>R</b> <b className='transition-all ease-in hover:text-[#c3a995]'>P</b><b className='transition-all ease-in hover:text-[#c3a995]'>O</b><b className='transition-all ease-in hover:text-[#c3a995]'>S</b><b className='transition-all ease-in hover:text-[#c3a995]'>W</b><b className='transition-all ease-in hover:text-[#c3a995]'>A</b><b className='transition-all ease-in hover:text-[#c3a995]'>L</b>
            </h1>

            <div className='flex flex-row text-5xl text-[#c3a995] font-semibold my-3 ' >
                <h1 className='absolute -ml-[15%] text-[#c3a995]'><TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition></h1>
                <h1 className='absolute ml-[0%]'>Developer</h1>
            </div>

            <div className='flex flex-row mt-20' >
                <a href="https://github.com/poswalsameer" target="_blank"><img src="github.png" alt="" className='bg-[#f0e2d3] p-2 rounded-xl h-12 w-12 border-2 border-[#f0e2d3] transition-all ease-in delay-75 hover:scale-110 hover:cursor-none'/></a> 

                <a href="https://leetcode.com/poswalsameer/" target="_blank"><img src="leetcode.png" alt="" className='bg-[#f0e2d3] p-2 rounded-xl h-12 w-12 border-2 border-[#f0e2d3] mx-8 transition-all ease-in hover:scale-110 hover:cursor-none'/></a>

                <a href="https://twitter.com/sameerposwal03" target="_blank"><img src="twitter.png" alt="" className='bg-[#f0e2d3] p-2 rounded-xl h-12 w-12 border-2 border-[#f0e2d3] transition-all ease-in hover:scale-110 hover:cursor-none'/></a>

                <a href="https://www.linkedin.com/in/sameerposwal/" target="_blank"><img src="linkedin.png" alt="" className='bg-[#f0e2d3] p-2 rounded-xl h-12 w-12 border-2 border-[#f0e2d3] mx-8 transition-all ease-in hover:scale-110 hover:cursor-none'/></a>
            </div>

            <button className='h-12 w-44 flex flex-row justify-center items-center font-bold text-lg text-black bg-[#c3a995] rounded-xl -ml-10 my-12 transition-all ease-in hover:bg-[#f0e2d3] hover:text-black hover:border-2 hover:border-[#fefae0] hover:cursor-none '>
                <p className='mx-2'>Resume</p> 
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </button>

        </div>

        {/* <img src="meInSuit.jpg" alt="" id='imageDiv' className='h-[30rem] w-[22rem] rounded-xl my-10 mr-36' /> */}


    </div>
  )
}

export default Hero
