import React from 'react'

function Header() {
  return (
    <>

      <div className=' fixed top-0 z-10 bg-opacity-65 h-12 w-full flex flex-row justify-center items-center bg-[#faf5f0] ' >

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer ' >
          &lt;Home /&gt;
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer '>
          &lt; Who Am I /&gt;
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer '>
          &lt;Skills I Possess /&gt;
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer ' >
          &lt;Projects /&gt;
        </p>

        <p className='mx-16 text-base font-bold text-[#0a0908] hover:cursor-pointer ' >
          &lt;Contact /&gt;
        </p>
        
        {/* <p className='mx-14 text-xl font-bold text-purple-950'>&lt;Contact Me /&gt;</p> */}


      </div>

      

      

      
    </>
  )
}

export default Header
