import React from 'react'

function Hero() {
  return (
    <div className=' my-20 flex flex-row justify-between items-center ' >
        
        <div className=' flex flex-col ' >

            <h1 className='text-8xl text-purple-400 font-extrabold mx-14 my-3'>
                <span className='text-yellow-200'>SAMEER</span> POSWAL
            </h1>

            <h1 className='text-6xl text-yellow-200 font-bold mx-14 my-3' >
                <span className='text-purple-400'>Front-End</span> Developer
            </h1>

            <div className='flex flex-row mx-14 my-5' >
                <a href="https://github.com/poswalsameer" ><img src="github.png" alt="" className='bg-purple-300 p-2 rounded-xl h-14 w-14 border-2 border-purple-900 '/></a> 

                <a href="https://leetcode.com/poswalsameer/"><img src="leetcode.png" alt="" className='bg-yellow-100 p-2 rounded-xl h-14 w-14 border-2 border-yellow-900 mx-8'/></a>
            </div>
        </div>

        <img src="meInSuit.jpg" alt="" className='h-[30rem] w-80 rounded-xl mr-36' />


    </div>
  )
}

export default Hero
