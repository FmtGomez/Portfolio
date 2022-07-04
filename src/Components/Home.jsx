import React, { useState } from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-scroll';

export const Home = () => {
    const [input, setInput] = useState(false);
    const handleClick = ()=> setInput(!input)
    const bgImgStyle = {
        backgroundImage: `url("https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize:"cover"
    }
    return (
        <div name="home" className='text-white' style={bgImgStyle}>

            {/*--Container-- */}
            <div className='w-full h-screen bg-gradient-to-t from-black'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hola mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Federico Gomez</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8993b1]'>Soy Full Stack Developer</h2>
                <p className='text-[#fdfdfd] py-4 max-w-[700px]'>Día a día intento mejorar mis skills, 
                    soy un entusiasta del aprendisaje continuo.
                    Aquí podras encontrar mis proyectos en las cuales utilizo tecnologias como
                    Javascript/React/Redux/Redux-toolkit/Tailwind para el Front-End  y
                    Node.js/Express/Sequelize/PostgreSQL para el Back-End.</p>
                <div>
                    <Link className='inline-block' onClick={handleClick} to="work" smooth={true} duration={500} >

                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>Ver Proyectos
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>

            </div>
            </div>

        </div>
    )
}
