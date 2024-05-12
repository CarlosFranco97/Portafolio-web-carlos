import { HiArrowNarrowRight } from "react-icons/hi"

export const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-red-300'>
            Hola, mi nombre es
          </p>
           <h1 className='text-5xl md:text-6xl font-extrabold text-[#c9e9fc]'>
            Carlos Franco
            </h1>
          <h2 className='text-5xl md:text-6xl font-bold text-[#e4f4fd]'>
            Desarrollador Front-End con React
          </h2>
          <p className='text-[#e4f4fd] py-4 max-w-[700px]'>
            Soy un desarrollador Front-End especializado en React, 
            manejando librerías para el desarrollo Front-End de páginas web,
            enfocado en la responsividad, para desarrollo de Back-End Nojde.js y como base de datos MongoDB. 
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-300 hover:border-red-300'>
                Ver Proyectos 
                <span className='group-hover:rotate-90 duration-300 ml-3'>
                  <HiArrowNarrowRight/>
                </span>
            </button>
          </div>
        </div>
    </div>
  )
}
