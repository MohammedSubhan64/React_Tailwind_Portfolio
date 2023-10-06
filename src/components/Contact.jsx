import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center px-4  ">
        <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 hcolor'>Contact</p>
            {/* <p className=' text-gray-300 my-4'>// Submit the form below or shoot me an email - mohdsubhan746@gmail.com</p> */}
        </div>
        <input  className="p-2  bg-[#ccd6f6]" type="text" name="name" id="" placeholder='Name' />
        <input  className="my-4 p-2 bg-[#ccd6f6]" type="email" name="name" id="" placeholder='Email' />
        <textarea className=" bg-[#ccd6f6] p-2" name="message" placeholder='Message'  id="" rows="6"></textarea>
        <button className=' py-3 px-4 my-4 mx-auto flex items-center text-white border-2  btncolor '>Send Message</button>
        </form>


    </div>
  )
}

export default Contact