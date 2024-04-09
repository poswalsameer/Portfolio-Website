import React from 'react'

function Contact() {
  return (

    <>

    <h1 className='text-6xl font-bold mx-10 mt-40 mb-5 text-[#fefae0]' >
        &lt;CONTACT /&gt;
    </h1>

    <div className='mt-10 text-white text-lg flex flex-col justify-center items-center'>

        <div className=' my-5 flex flex-col justify-center items-center'>
            <p>
                You can always contact me to discuss about tech, games, emulation, sports, and for any hiring related talk too!
            </p>

            <p>
                Here's my contact number and email address:
            </p>
        </div>

        <div className=' my-5 flex flex-row w-full justify-center items-center'>
            
            <div className='flex flex-row w-[30%]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-3 lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                
                <p className='mx-3'>
                    7982108619 
                </p>
            </div>

            <div className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" mx-3 lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>

                <p className='mx-3'>
                    poswalsameer2003@gmail.com
                </p>
            </div>

        </div>

        <div className=' my-5 flex flex-col justify-center items-center'>
            <p>
                Feel free to reach out to me using these details or by the social links attached in the upper section
            </p>
        </div>
      
    </div>

    </>
  )
}

export default Contact
