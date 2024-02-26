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
    <div className=' my-20 flex flex-row justify-between items-center ' >
        
        <div className=' flex flex-col items-start ' >

            <h1 className='text-8xl text-purple-400 font-extrabold mx-14 my-3'>
                <span className='text-yellow-200'>SAMEER</span> POSWAL
            </h1>

            <div className='flex flex-row text-5xl text-purple-400 font-bold mx-14 my-3' >
                <h1 className='text-yellow-200'><TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition></h1>
                <h1 className='absolute ml-56'>Developer</h1>
            </div>

            <div className='flex flex-row mx-14 my-5' >
                <a href="https://github.com/poswalsameer" target="_blank"><img src="github.png" alt="" className='bg-purple-300 p-2 rounded-xl h-14 w-14 border-2 border-purple-900 hover:bg-purple-400 hover:border-2 hover:border-purple-900 '/></a> 

                <a href="https://leetcode.com/poswalsameer/" target="_blank"><img src="leetcode.png" alt="" className='bg-yellow-100 p-2 rounded-xl h-14 w-14 border-2 border-yellow-900 hover:bg-yellow-200 hover:border-2 hover:border-yellow-900 mx-8'/></a>

                <a href="https://twitter.com/sameerposwal03" target="_blank"><img src="twitter.png" alt="" className='bg-purple-300 p-2 rounded-xl h-14 w-14 border-2 border-purple-900 hover:bg-purple-400 hover:border-2 hover:border-purple-900'/></a>

                <a href="https://www.linkedin.com/in/sameerposwal/" target="_blank"><img src="linkedin.png" alt="" className='bg-yellow-100 p-2 rounded-xl h-14 w-14 border-2 border-yellow-900 hover:bg-yellow-200 hover:border-2 hover:border-yellow-900 mx-8'/></a>
            </div>

            <button className='h-14 w-44 font-bold text-purple-950 bg-purple-400 rounded-xl mx-14 my-5 border-[3px] border-purple-950 hover:bg-purple-950 hover:text-purple-400 hover:border-[3px] hover:border-purple-400 '>Download Resume</button>
        </div>

        <img src="meInSuit.jpg" alt="" id='imageDiv' className='h-[30rem] w-80 rounded-xl my-10 mr-36' />


    </div>
  )
}

export default Hero
