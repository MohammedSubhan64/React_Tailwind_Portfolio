import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import {Link} from 'react-router-dom'
// import { Link } from "react-scroll";
const Header = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
    return (
      <div className="fixed w-full h-[100px] text-gray-300 flex justify-between items-center px-4 bg-[#0a192f]">
        <div className="">
          {/* <img src={Logo} alt="logo image" style={{ width: "50px" }} /> */}
         <p className="text-2xl">MSP</p>
        </div>
        {/* menu */}
        <ul className=" hidden md:flex">
          <li>
            <Link to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
  
  
        {/* moblie icons */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 py-3 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl ">
           
            <Link  onClick={handleClick}  to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl ">
           
            <Link  onClick={handleClick}  to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl ">
          
            <Link  onClick={handleClick}  to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl ">
         
            <Link  onClick={handleClick}  to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl ">
         
            <Link   onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* social media */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[106px] h-[60] flex justify-between items-center hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                href="/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[106px] h-[60] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                href="/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[106px] h-[60] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                href="/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Mail <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[106px] h-[60] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                href="/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                Phone <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );


}

export default Header