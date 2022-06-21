import React, { useState } from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from 'react-scroll';

export const Home = () => {
    const [input, setInput] = useState(false);
    const handleClick = ()=> setInput(!input)
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f]'>

            {/*--Container-- */}

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hola mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Federico Gomez</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Full Stack Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Actualmente estoy finalizando un bootcamp como Full
                    Stack Developer en el cual estoy mejorando mis skills,
                    desarrollando aplicaciones con:
                    Javascript/React/Redux para el Front-End y
                    Node.js/Express/Sequelize/PostgreSQL para el Back-End.</p>
                <div>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >

                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>Ver Proyectos
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}
