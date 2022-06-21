import React from 'react'

export const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre mi</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hola! un placer conocerte. Por favor navega libremente por mi porftfolio</p>
                    </div>
                    <div>
                        <p>
                            Mi nombre es Federico tengo 30 años, soy una persona apasionada por la programación y todo este inmenso mundo IT.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
