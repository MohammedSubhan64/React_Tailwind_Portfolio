import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] bgcolor '>
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-color">
        <p className="text-pink-600 hcolor mytext ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">Mohammed Subhan</h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'M a Full Stack developer</h1>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Passionate Data scientist and web developer seeking impactful problem-solving opportunities.</p>
        <div className="">
            <button className=' group text-white border-2 px-6 py-3 my-2 flex items-center btncolor'>
            <Link   to="work" smooth={true} duration={500}>
            View Work
          </Link>
               
            <span className='group-hover:rotate-90 duration-300' ><HiArrowNarrowRight className='ml-3' /></span>
            </button>
        </div>

        </div>

        
    </div>
  )
}

export default Home