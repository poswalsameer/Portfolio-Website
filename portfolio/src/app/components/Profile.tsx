import React from 'react'

function Profile() {
  return (
    <div className='w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full ' id='about'>

    <h1 className='text-2xl font-bold mx-4 mt-40 mb-1 text-[#faf5f0]
    
    sm:text-4xl sm:font-bold sm:mx-6 sm:mt-40 sm:mb-1 sm:text-[#faf5f0]
    
    md:text-4xl md:font-bold md:mx-8 md:mt-40 md:mb-1 md:text-[#faf5f0]
    
    lg:text-5xl lg:font-bold lg:mx-10 lg:mt-40 lg:mb-5 lg:text-[#faf5f0]
    
    xl:text-5xl xl:font-bold xl:mx-10 xl:mt-40 xl:mb-5 xl:text-[#faf5f0]
    
    2xl:text-5xl 2xl:font-bold 2xl:mx-12 2xl:mt-40 2xl:mb-5 2xl:text-[#faf5f0]' >
            &lt;WHO AM I /&gt;
    </h1>

        <div className='mx-5 my-8 flex flex-col-reverse items-center text-white text-sm text-center font-normal
        
        sm:mx-8 sm:my-8 sm:flex sm:flex-col-reverse sm:items-center sm:text-white sm:text-sm sm:text-center sm:font-normal
        
        md:mx-6 md:my-8 md:flex md:flex-row md:items-center md:text-white md:text-sm md:text-center md:font-normal
        
        lg:mx-12 lg:my-8 lg:flex lg:flex-row lg:items-center lg:text-white lg:text-base lg:text-center lg:font-normal
        
        xl:mx-12 xl:my-8 xl:flex xl:flex-row xl:items-center xl:text-white xl:text-base xl:text-center xl:font-normal
        
        2xl:mx-12 2xl:my-6 2xl:flex 2xl:flex-row 2xl:items-center 2xl:text-white 2xl:text-base 2xl:text-center 2xl:font-normal'>

            <div className='p-2 text-center text-xs font-medium h-[50%] w-[100%] mr-3
            
            sm:p-2 sm:text-center sm:text-sm sm:font-medium sm:h-[50%] sm:w-[100%] sm:mr-3
            
            md:p-1 md:text-left md:text-sm md:font-medium md:h-[50%] md:w-[75%] md:mr-3
            
            lg:p-2 lg:text-left lg:text-base lg:font-medium lg:h-[50%] lg:w-[70%] lg:mr-7
            
            xl:p-2 xl:text-left xl:text-lg xl:font-medium xl:h-[50%] xl:w-[70%] xl:mr-7
            
            2xl:p-2 2xl:text-left 2xl:text-xl 2xl:font-medium 2xl:h-[60%] 2xl:w-[70%] 2xl:mr-7'>

                <p className='my-2 sm:my-3 md:my-3 lg:my-5 xl:my-5 2xl:my-5'>
                  Embarking on a programming journey at 15, I discovered my boundless passion for crafting exceptional software which started with the fascination of ' HOW CAN I MAKE THESE THINGS WHICH I USE DAILY? '
                </p> 
                  
                <p className='my-2 sm:my-3 md:my-3 lg:my-5 xl:my-5 2xl:my-5'>
                  With a commitment to excellence, I prioritize user-centric design and seamless functionality. Thriving in collaborative environments, I'm eager to synergize with fellow developers, designers, and stakeholders.
                </p> 
                  
                <p className='my-2 sm:my-3 md:my-3 lg:my-5 xl:my-5 2xl:my-5'>
                  Beyond this world of semicolons and bugs, I find myself inclined in retro gaming and emulation, I also used to play volleyball in my earlier days of college life. 
                </p>

                <p className='my-2 sm:my-3 md:my-3 lg:my-5 xl:my-5 2xl:my-5'>
                  Looking forward to collaborate and grow in the industry, striving to leverage my skills and expertise to drive better solutions for humanity and this technologically advanced world. 
                </p>

            </div>

            <div className='my-3 h-[50%] w-[50%] 
            
            sm:my-3 sm:h-[50%] sm:w-[50%]
            
            md:h-[330px] md:w-[46%]
            
            lg:h-[350px] lg:w-[40%]
            
            xl:h-full xl:w-[30%]
            
            2xl:h-full 2xl:w-[30%] '>
                <img src="cloudEnd.jpg" alt="" className='ml-1 h-[100%] w-[100%] rounded-full
                
                sm:ml-1 sm:h-[100%] sm:w-[100%] sm:rounded-full
                
                md:ml-1 md:h-[100%] md:w-[100%] md:rounded-3xl
                
                lg:ml-1 lg:h-[100%] lg:w-[100%] lg:rounded-3xl
                
                xl:ml-6 xl:h-[60%] xl:w-[95%] xl:rounded-3xl
                
                2xl:ml-6 2xl:h-[50%] 2xl:w-[85%] 2xl:rounded-3xl ' />
            </div>

        </div>
      
    </div>
  )
}

export default Profile
