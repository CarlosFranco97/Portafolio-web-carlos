import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

export const Home = () => {
  return (
    <section name='home' className='bg-gradient-to-r from-blue-800 to-indigo-900 w-full h-screen'>
        
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-lime-300'>
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
            <Link to='projects' smooth={true} duration={500}  className='text-white group border-2 px-6 py-3 my-2 flex items-center w-[185px] hover:bg-gradient-to-r from-lime-500 to-lime-300 hover:border-lime-200 cursor-pointer'>
                Ver Proyectos 
                <span className='group-hover:rotate-90 duration-300 ml-3'>
                  <HiArrowNarrowRight/>
                </span>
            </Link>
          </div>
        </div>
    </section>
  )
}
