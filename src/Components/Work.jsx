import React from 'react';
import realEstate from "../Assets/realestate.jpg";
import yovoy from "../Assets/yovoy.jpg"
import movies from "../Assets/demo-movies.jpg"
import task from "../Assets/tasks.jpg"


export const Work = () => {
    return (
        <div name="work" className='w-full md:h-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Proyectos</p>
                    <p className='py-6'>Mira mis proyetos recientes</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-2  gap-3'>
                    {/*Pi food */}
                    <div className='flex flex-wrap -m-4'>

                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={realEstate} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Proyecto para bootcamp</h1>
                                    <p className=' leading-relaxed mb-3'>Proyecto realizado desde el backend hasta el frontend, utilizando Node.js, Express,
                                        Sequelize, PostgreSQL para el back-End y Javascript, React-Redux y css para el Front-End. Se consume API externa
                                    </p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://recipe-c6rcvpj8r-fmtgomez.vercel.app/" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        <a href="https://github.com/FmtGomez/PI-Food1" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/*PF Yovoy!*/}
                    <div className='flex flex-wrap -m-4'>

                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={yovoy} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Proyecto final para bootcamp</h1>
                                    <p className=' leading-relaxed mb-3'>Proyecto realizado de forma grupal, trabajando en equipo desde el backend hasta el frontend,
                                    se utilizo redux-toolkit, pasarela de pagos con sandbox de mercado pago y autenticacion con google.
                                    </p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://yovoy-frontend.herokuapp.com/home" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        {/* <a href="https://github.com/FmtGomez/PI-Food1" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a> */}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Movies-app */}
                    <div className='flex flex-wrap -m-4'>

                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={movies} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Proyecto-Practico</h1>
                                    <p className=' leading-relaxed mb-3'>Se realiza este proyecto a modo de practica, autenticacion y base de datos
                                     con Firebase, se consume API externa , usuario de test, test@test.com contraseña: password. 
                                    </p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://fir-movies-33332.web.app/" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        <a href="https://github.com/FmtGomez/proyect-movies" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Task-apps */}
                    <div className='flex flex-wrap -m-4'>

                        <div className='p-4 sm:w-full lg:w-[500px]'>
                            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden '>
                                <img src={task} alt="img" className=' lg:h-72 md:h-48 w-full object-cover object-center ' />
                                <div className='p-6 hover:bg-blue-900 hover:text-white transition duration-300 ease-in'>
                                    {/* <h2 className='text-base front-medium text-indigo-300 mb-1' >Julio 3</h2> */}
                                    <h1 className='text-2xl font-semibold mb-3'>Proyecto-Practico</h1>
                                    <p className=' leading-relaxed mb-3'>Proyecto para practicar y mejorar habilidades con redux-tool-kit, se 
                                    utiliza Tailwind para los estilos. Como adicional en este proyecto se utiliza el concepto de aplicación CRUD.
                                    </p>
                                    <div className='flex flex-wrap justify-center items-center'>
                                        <a href="https://tareastodo-app.netlify.app/" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                        <a href="https://github.com/FmtGomez/proyect---tasks" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    {/*Grid Item */}
                    {/* <div style={{ backgroundImage: `url(${realEstate})` }}
                     className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}

                    {/*--Hover Effects--*/}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://recipe-c6rcvpj8r-fmtgomez.vercel.app/home" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                <a href="https://github.com/FmtGomez/PI-Food1" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                            </div>
                        </div> */}

                    {/* </div> */}


                    {/* <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}

                    {/*--Hover Effects--*/}
                    {/* <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://clima-app-gmz.netlify.app/"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Ver Demo</button></a>
                                <a href="https://github.com/FmtGomez/clima" target="_blank"><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Código</button></a>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </div>
    )
}
