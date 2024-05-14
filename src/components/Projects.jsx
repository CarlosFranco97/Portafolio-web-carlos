import  GifExpertApp from '../assets/gif-expert-app.png';
import SuperCars from '../assets/super-cars.png';
import JournalApp from '../assets/journal-app.png';
import HeroPage from '../assets/hero-page.png';
import CalendarApp from '../assets/calendar-app.png';
import AlefMonterrey from '../assets/alef-monterrey.png';
import BoxRegister from '../assets/proyect-box-register.png';
import CalendarBackend from '../assets/calendar-backend.png';
import CajaBackend from '../assets/caja-backend.png';

export const Projects = () => {
    

    return (
        <div name='projects' className='w-full h-full bg-[#0a192f] text-gray-300'>
           
            {/* container */}
            <div className='max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4'>
                <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-red-300'>
                            Proyectos
                        </p>
                        
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        
                        <div
                            style={{backgroundImage: `url(${GifExpertApp})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación React JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://carlosfranco97.github.io/gif-expert-app-react/' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a  href='https://github.com/CarlosFranco97/gif-expert-app-react' target='_blank' rel='nooponer'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                       
                        <div
                            style={{backgroundImage: `url(${SuperCars})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación HTML CSS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://carlosfranco97.github.io/SUPER_CARS_PROYECTO1/' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/CarlosFranco97/SUPER_CARS_PROYECTO1' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>

                        <div
                            style={{backgroundImage: `url(${JournalApp})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación React JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://carlosfranco97.github.io/Journal-App/' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/CarlosFranco97/Journal-App' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                        <div
                            style={{backgroundImage: `url(${HeroPage})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación React JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://hero-page-carlos.netlify.app/' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/CarlosFranco97/Heroes-App' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                        <div
                            style={{backgroundImage: `url(${BoxRegister})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación React JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://carlosfranco97.github.io/BoxRegister/#/auth/login' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/CarlosFranco97/BoxRegister' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                        <div
                            style={{backgroundImage: `url(${AlefMonterrey})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación Bootstrap
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://alef-monterrey.netlify.app/' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/CarlosFranco97/Alef-Monterrey' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                        <div
                            style={{backgroundImage: `url(${CalendarApp})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación React JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://calendar-app-carlos.netlify.app/auth/login' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='https://github.com/CarlosFranco97/Calendar-App' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                        <div
                            style={{backgroundImage: `url(${CalendarBackend})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación Node JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://github.com/CarlosFranco97/mern-calendar' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                        <div
                            style={{backgroundImage: `url(${CajaBackend})` }}  
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div-projects'>
                           
                           {/* Hover Effects */}                    
                           <div 
                                className='opacity-0 group-hover:opacity-100'
                            >
                             <span className='text-2xl font-bold text-white tracking-wider'>
                                Aplicación Node JS
                             </span>
                             <div className="pt-8 text-center">
                                <a href='https://github.com/CarlosFranco97/RecordedSales-Backend' target='_blank' rel='noopener'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                       Code 
                                    </button>
                             </a>
                             </div>
                           
                         </div>
                        </div>
                            
                </div>
            </div>  
        </div>
    )
}