import React from 'react'

function Header() {
  return (
    <>

      <div className=' xl:fixed xl:top-0 xl:z-10 xl:h-12 xl:w-full xl:flex xl:flex-row xl:justify-center xl:items-center xl:bg-[#cbbdaf]
      
      2xl:fixed 2xl:top-0 2xl:z-10 2xl:h-12 2xl:w-full 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:bg-[#cbbdaf] ' >

        <p className='xl:mx-16 xl:text-base xl:font-bold xl:text-[#0a0908]
        
        2xl:mx-16 2xl:text-base 2xl:font-bold 2xl:text-[#0a0908] ' >

          <a href="#home" className='hover:cursor-none'>
            &lt;Home /&gt;
          </a>

        </p>

        <p className='xl:mx-16 xl:text-base xl:font-bold xl:text-[#0a0908]
        
        2xl:mx-16 2xl:text-base 2xl:font-bold 2xl:text-[#0a0908] '>
        <a href="#about" className='hover:cursor-none'>&lt;Who Am I /&gt;</a>
        </p>

        <p className='xl:mx-16 xl:text-base xl:font-bold xl:text-[#0a0908]
        
        2xl:mx-16 2xl:text-base 2xl:font-bold 2xl:text-[#0a0908] '>
          <a href="#skills" className='hover:cursor-none' >&lt;Skills I Possess /&gt;</a> 
        </p>

        <p className='xl:mx-16 xl:text-base xl:font-bold xl:text-[#0a0908]
        
        2xl:mx-16 2xl:text-base 2xl:font-bold 2xl:text-[#0a0908] ' >
          <a href="#projects" className='hover:cursor-none'>&lt;Projects /&gt;</a>
        </p>

        <p className='xl:mx-16 xl:text-base xl:font-bold xl:text-[#0a0908]
        
        2xl:mx-16 2xl:text-base 2xl:font-bold 2xl:text-[#0a0908] ' >
          <a href="#contact" className='hover:cursor-none'>&lt;Contact /&gt;</a>
        </p>
        
        {/* <p className='mx-14 text-xl font-bold text-purple-950'>&lt;Contact Me /&gt;</p> */}


      </div>

      

      

      
    </>
  )
}

export default Header
