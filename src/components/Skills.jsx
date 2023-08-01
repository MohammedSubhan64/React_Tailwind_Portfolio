import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
// import fire from '../assets/firebase.png'
import dj from '../assets/djg.png'
// import aws from '../assets/aws.png'
const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300 ">
         <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={html} alt="" />
                    <p className='my-2'>HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={css} alt="" />
                    <p className='my-2'>CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={js} alt="" />
                    <p className='my-2'>Javascript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={react} alt="" />
                    <p className='my-2'>React</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={github} alt="" />
                    <p className='my-2'>GitHub</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={tailwind} alt="" />
                    <p className='my-2'>Tailwind</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={node} alt="" />
                    <p className='my-2'>Node Js</p>
                </div>
           
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className='w-20 mx-auto' src={dj} alt="" />
                    <p className='my-4'>Django</p>
                </div>
            </div>
         </div>

    </div>
  )
}

export default Skills