import React from 'react'

export const About = () => {
    return (
        <div name="about" className='w-full h-screen  bg-[#0a192f] text-gray-300'>
            <div className='w-full h-screen bg-gradient-to-b from-black'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                    <div className='xl:text-start sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre mi</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p> Hola, mi nombre es Federico y soy una persona apasionada por la programación.</p>
                    </div>
                    <div>
                        <p>Este año decidi cambiar mi vida y adentrarme a este fantástico mundo. Empecé a realizar las primeras líneas de código
                            en el bootcamp de Soy Henry, donde fue un gran desafío y dio comienzo a mi camino como progamador. Ahora busco la
                            oportunidad de poder seguir desarrollando y aportando lo aprendido.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
