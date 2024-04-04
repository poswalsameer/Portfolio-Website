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
    <div className=' mt-32 flex flex-row justify-center items-center ' >
        
        <div className=' flex flex-col justify-center items-center ' >

            <h1 className='text-8xl text-[#dda15e] font-extrabold my-6'>
                <span className='text-[#fefae0]'>SAMEER</span> POSWAL
            </h1>

            <div className='flex flex-row text-5xl text-[#dda15e] font-semibold my-4 ' >
                <h1 className='absolute -ml-[14%] text-[#fefae0]'><TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition></h1>
                <h1 className='absolute ml-[0%]'>Developer</h1>
            </div>

            <div className='flex flex-row mt-20' >
                <a href="https://github.com/poswalsameer" target="_blank"><img src="github.png" alt="" className='bg-[#fefae0] p-2 rounded-xl h-14 w-14 border-2 border-[#644c2f] transition-all ease-in delay-75 hover:scale-110'/></a> 

                <a href="https://leetcode.com/poswalsameer/" target="_blank"><img src="leetcode.png" alt="" className='bg-[#dda15e] p-2 rounded-xl h-14 w-14 border-2 border-[#fefae0] mx-8 transition-all ease-in hover:scale-110'/></a>

                <a href="https://twitter.com/sameerposwal03" target="_blank"><img src="twitter.png" alt="" className='bg-[#fefae0] p-2 rounded-xl h-14 w-14 border-2 border-[#644c2f] transition-all ease-in hover:scale-110'/></a>

                <a href="https://www.linkedin.com/in/sameerposwal/" target="_blank"><img src="linkedin.png" alt="" className='bg-[#dda15e] p-2 rounded-xl h-14 w-14 border-2 border-[#fefae0] mx-8 transition-all ease-in hover:scale-110'/></a>
            </div>

            <button className='h-14 w-44 font-bold text-[#54412b] bg-[#fefae0] rounded-xl -ml-2 my-12 transition-all ease-in hover:bg-[#54412b] hover:text-[#fefae0] hover:border-2 hover:border-[#fefae0] '>
                Download Resume
            </button>

        </div>

        {/* <img src="meInSuit.jpg" alt="" id='imageDiv' className='h-[30rem] w-[22rem] rounded-xl my-10 mr-36' /> */}


    </div>
  )
}

export default Hero
