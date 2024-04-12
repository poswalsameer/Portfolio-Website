import React from 'react'

function Profile() {
  return (
    <div className='w-full ' id='about'>

    <h1 className='text-5xl font-bold mx-16 mt-40 mb-5 text-[#faf5f0]' >
            &lt;WHO AM I /&gt;
    </h1>

        <div className='mx-16 my-16 flex flex-row items-center text-white text-base text-center font-normal'>

            <div className='h-full w-[30%] '>
                <img src="myPhoto.jpg" alt="" className='ml-6 h-[40%] w-[80%] rounded-[2.4rem] shadow-white ' />
            </div>

            <div className= 'p-2 text-left text-xl font-medium h-[60%] w-[70%] ml-10 mr-7'>

                <p className='my-5'>
                  Embarking on a programming journey at 15, I discovered my boundless passion for crafting exceptional software which started with the fascination of ' HOW CAN I MAKE THESE THINGS WHICH I USE DAILY? '
                </p> 
                  
                <p className='my-5'>
                  With a commitment to excellence, I prioritize user-centric design and seamless functionality. Thriving in collaborative environments, I'm eager to synergize with fellow developers, designers, and stakeholders.
                </p> 
                  
                <p className='my-5'>
                  Beyond this world of semicolons and bugs, I find myself inclined in retro gaming and emulation, I also used to play volleyball in my earlier days of college life always seeking new opportunities for growth. 
            
                </p>

                {/* <p className='my-4'>I am a passionate software developer/engineer who loves technology and computer science. My obsession for crafting and shipping exceptional softwares and their frontends is what thrives me on turning ideas into reality through clean, efficient and maintainable code by following industry principles. I stepped into the world of programming and computer science at the age of 15 because of games and was fascinated by the unlimited possibilites of the web and what we can do if we know the right things.</p>

                <p className='my-4'>Since then, I have never looked back and it's been a rollercoaster of a ride, continuously learning, adapting and honing my skills to stay at the forefront of latest technology trends. In my work, I prioritize user-centric design and seamless functionality. Whether it's developing responsive web applications, designing elegant user interfaces, or optimizing code for performance, I'm committed to delivering solutions that not only meet but exceed expectations. Collaboration is at the heart of my approach. I thrive in dynamic team environments where ideas are shared, challenges are tackled together, and innovation flourishes. I'm always eager to collaborate with fellow developers, designers, and stakeholders to bring projects to life.</p> */}
                
                {/* <p className='my-4'>In my work, I prioritize user-centric design and seamless functionality. Whether it's developing responsive web applications, designing elegant user interfaces, or optimizing code for performance, I'm committed to delivering solutions that not only meet but exceed expectations.</p>

                <p className='my-4'>Collaboration is at the heart of my approach. I thrive in dynamic team environments where ideas are shared, challenges are tackled together, and innovation flourishes. I'm always eager to collaborate with fellow developers, designers, and stakeholders to bring projects to life.</p> */}

                {/* <p className='my-4'>Outside of this programming world, you can find me on my couch playing games (did I tell you I am a fan of retro gaming), learning more about emulation, playing volleyball, or simply enjoying a good tech series munching on my favourite snack. I believe in the power of continuous learning and am constantly seeking out new opportunities to expand my knowledge and skill set.</p> */}
            </div>

        </div>
      
    </div>
  )
}

export default Profile
