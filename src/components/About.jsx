import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300  ">
        <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">

            <p className='text-4xl font-bold inline border-b-4 border-pink-600 hcolor'>About</p>
            </div>
            <div className=""></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">

                <p>I'm <strong>Subhan </strong> , Nice to meet you. Please take look around.</p>
            </div>
                <div className="">
                Passionate data scientist and web developer with a completed bachelor's in computer science. Seeking opportunities to apply technical skills and solve real-life data science problems. Strong foundation in programming, statistics, and machine learning. Eager to contribute expertise and make a meaningful impact.
            </div>
            </div>
           
        </div>
        


    </div>
  )
}

export default About