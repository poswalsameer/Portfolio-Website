import React from 'react'

function Contact() {
  return (

    <>

    <h1 className='text-5xl font-bold mx-16 mt-28 mb-5 text-[#fefae0]' id='contact'>
        &lt;CONTACT /&gt;
    </h1>

    <div className='mt-14 py-10 mx-20 bg-[#322c24] rounded-xl p-5 text-white text-lg flex flex-col justify-center items-center' >

        <div className=' my-5 flex flex-col justify-center items-center'>
            <p>
                YOU CAN ALWAYS CONNECT WITH ME TO DISCUSS ABOUT TECH, ENGINEERING, GAMES, EMULATION!
            </p>

            {/* <p>
                Here's my contact number and email address:
            </p> */}
        </div>

        <div className=' my-5 flex flex-row w-full justify-center items-center '>
            
            <div className='bg-[#faf5f0] text-[#1e1b17] text-sm flex flex-row mr-3 p-2 justify-center items-center font-bold w-[20%] rounded-xl transition-all ease-in hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-3 lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                
                <p className='mx-3'>
                    7982108619 
                </p>
            </div>

            <div className='bg-[#faf5f0] text-[#1e1b17] text-sm flex flex-row justify-center items-center ml-3 p-2 rounded-xl font-bold transition-all ease-in hover:scale-105'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" mx-3 lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

                <p className='mx-3'>
                    poswalsameer2003@gmail.com
                </p>
            </div>

        </div>

        <div className=' my-5 flex flex-col justify-center items-center'>
            <p>
                FEEL FREE TO REACH OUT TO ME USING THESE DETAILS OR BY THE SOCIAL LINKS ATTACHED IN THE UPPER SECTION
            </p>
        </div>
      
    </div>

    <p className='my-10'>‎
    ‎ 
    ‎ ‎ ‎ 
    ‎ 
    ‎ 
    ‎ 
    ‎ 
    ‎ 
    ‎ 
    </p>

    </>
  )
}

export default Contact
