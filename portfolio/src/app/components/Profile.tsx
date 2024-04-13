import React from 'react'

function Profile() {
  return (
    <div className='w-full ' id='about'>

    <h1 className='text-5xl font-bold mx-16 mt-40 mb-5 text-[#faf5f0]' >
            &lt;WHO AM I /&gt;
    </h1>

        <div className='mx-16 my-16 flex flex-row items-center text-white text-base text-center font-normal'>

            {/* <div className='h-full w-[30%] '>
                <img src="cloudEnd.jpg" alt="" className='ml-6 h-[40%] w-[80%] rounded-3xl shadow-white ' />
            </div> */}

            <div className= 'p-2 text-left text-xl font-medium h-[60%] w-[70%] mr-7'>

                <p className='my-5'>
                  Embarking on a programming journey at 15, I discovered my boundless passion for crafting exceptional software which started with the fascination of ' HOW CAN I MAKE THESE THINGS WHICH I USE DAILY? '
                </p> 
                  
                <p className='my-5'>
                  With a commitment to excellence, I prioritize user-centric design and seamless functionality. Thriving in collaborative environments, I'm eager to synergize with fellow developers, designers, and stakeholders.
                </p> 
                  
                <p className='my-5'>
                  Beyond this world of semicolons and bugs, I find myself inclined in retro gaming and emulation, I also used to play volleyball in my earlier days of college life. 
                </p>

                <p className='my-5'>
                  Looking forward to collaborate and grow in the industry, striving to leverage my skills and expertise to drive better solutions for humanity and this technologically advanced world. 
                </p>

            </div>

            <div className='h-full w-[30%] '>
                <img src="cloudEnd.jpg" alt="" className='ml-6 h-[50%] w-[85%] rounded-3xl shadow-white ' />
            </div>

        </div>
      
    </div>
  )
}

export default Profile
