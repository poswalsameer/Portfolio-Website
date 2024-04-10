import React from 'react'

function Header() {
  return (
    <>

      <div className=' fixed top-0 z-10 bg-opacity-65 h-12 w-full flex flex-row justify-center items-center bg-[#faf5f0] ' >

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer ' >
          <a href="#home" >&lt;Home /&gt;</a>
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer '>
        <a href="#about" >&lt;Who Am I /&gt;</a>
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer '>
          <a href="#skills" >&lt;Skills I Possess /&gt;</a> 
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer ' >
          <a href="#projects" >&lt;Projects /&gt;</a>
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer ' >
          <a href="#contact" >&lt;Contact /&gt;</a>
        </p>
        
        {/* <p className='mx-14 text-xl font-bold text-purple-950'>&lt;Contact Me /&gt;</p> */}


      </div>

      

      

      
    </>
  )
}

export default Header
