import React from 'react'
import workimg1 from '../assets/projects/realestate.jpg'
import workimg2 from '../assets/projects/workImg.jpeg'
const Work = () => {
  return (
    <div name='work' className=" w-full md:h-screen bg-[#0a192f] text-gray-300 bgcolor">
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 hcolor'>Work</p>
                {/* <p className='py-6 '>// Check out some of my recent work</p> */}
            </div>
    
             {/* container */}
            <div className=" grid sm:grid-cols-2 md:gird-cols-3 gap-4">

                {/* grid item */}
                <div style={{backgroundImage:`url(${workimg1})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* hover effets */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>
                   {/* grid item end */}

                {/* grid item start */}
                <div style={{backgroundImage:`url(${workimg2})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* hover effets */}

                    <div className="opacity-0 group-hover:opacity-100">
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                        </div>
                    </div>
                </div>
                   {/* grid item end */}
             

              
            </div>



        </div>
    </div>
  )
}

export default Work