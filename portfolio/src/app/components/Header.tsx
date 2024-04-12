import React from 'react'

function Header() {
  return (
    <>

      <div className=' fixed top-0 z-10 h-12 w-full flex flex-row justify-center items-center bg-[#cbbdaf] ' >

        <p className='mx-16 text-base font-bold text-[#0a0908] ' >
          <a href="#home" className='hover:cursor-none'>&lt;Home /&gt;</a>
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] '>
        <a href="#about" className='hover:cursor-none'>&lt;Who Am I /&gt;</a>
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] '>
          <a href="#skills" className='hover:cursor-none' >&lt;Skills I Possess /&gt;</a> 
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] ' >
          <a href="#projects" className='hover:cursor-none'>&lt;Projects /&gt;</a>
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] ' >
          <a href="#contact" className='hover:cursor-none'>&lt;Contact /&gt;</a>
        </p>
        
        {/* <p className='mx-14 text-xl font-bold text-purple-950'>&lt;Contact Me /&gt;</p> */}


      </div>

      

      

      
    </>
  )
}

export default Header
