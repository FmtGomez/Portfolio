import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Logo from "../Assets/LogoGMZ.png"
import { Link } from 'react-scroll';



const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#4872b1fd] bg-gradient-to-l from-black text-gray-300'>

            <div>
                <img src={Logo} alt="Logo image" style={{ width: "100px", paddingTop:"10px" }} />
            </div>

            {/*--- Menú ---*/}

            <ul className='hidden md:flex'>
                <li>
                    <Link className='hover:border-b-4 border-pink-600 duration-100' to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 border-pink-600 duration-100' to="about" smooth={true} duration={500} >
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 border-pink-600 duration-100' to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 border-pink-600 duration-100' to="work" smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link className='hover:border-b-4 border-pink-600 duration-100' to="contact" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>




            {/*--- Hambuerger ---*/}

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>



            {/*--- Mobile Menú ---*/}

            <ul className={!nav ? "hidden" : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        Sobre mi
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
            </ul>



            {/*--- Social icons ---*/}

            <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/federico-gomez-19689323b" target="_blank">Linkedin <FaLinkedin size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/FmtGomez" target="_blank">Github <FaGithub size={30} /> </a>
                    </li>
                    {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Email <HiOutlineMail size={30} /> </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">Curriculum <BsFillPersonLinesFill size={30} /> </a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar