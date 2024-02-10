import React from 'react'

function Header() {
  return (
    <>

      <div className=' h-16 flex flex-row justify-center items-center bg-purple-600 ' >

        <p className='mx-14 text-xl font-bold text-black' >&lt;Home /&gt;</p>
        <p className='mx-14 text-xl font-bold text-black' >&lt;Skills I Possess /&gt;</p>
        <p className='mx-14 text-xl font-bold text-black'>&lt;Projects /&gt;</p>
        <p className='mx-14 text-xl font-bold text-black'>&lt;Contact Me /&gt;</p>


      </div>

      {/* <button className='block mx-auto my-10 h-14 w-44 bg-purple-400 text-black font-bold rounded-lg ' >
          Download Resume
      </button> */}

      

      
    </>
  )
}

export default Header
