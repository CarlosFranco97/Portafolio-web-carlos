import { useState } from 'react';
import { FaBars, FaTimes,FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import FotoCarlos from '../assets/foto-carlos.jpg'
import CV from '../assets/CV-CARLOS FRANCO-DEV.pdf';

export const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
   
    const handleClickToggle = () => {
        setOpenNavbar(!openNavbar);
    }

    return (
        <nav className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-gradient-to-r from-blue-800 to-indigo-900 text-gray-300'>
            {/* logo */}
            <div className="logo-name text-4xl">
              <img src={FotoCarlos} className='w-20 rounded-full shadow-xl hover:scale-110 duration-500' alt="foto_carlos" />
            </div>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li>
                        <Link
                            className='hover:border-b-2 hover:border-lime-300 duration-100' 
                            to='home'
                            smooth={true} 
                            duration={500} 
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='hover:border-b-2 hover:border-lime-300 duration-100'
                            to='about'
                            smooth={true} 
                            duration={500} 
                        >
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='hover:border-b-2 hover:border-lime-300 duration-100'
                            to='skills'
                            smooth={true} 
                            duration={500} 
                        >
                            Habilidades
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='hover:border-b-2 hover:border-lime-300 duration-100'
                            to='projects'
                            smooth={true} 
                            duration={500} 
                        >
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className='hover:border-b-2 hover:border-lime-300 duration-100'
                            to='contact'
                            smooth={true} 
                            duration={500} 
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>

            {/* Hamburger */}
            <div 
                onClick={handleClickToggle}
                className='md:hidden z-50 text-3xl'>
                    {
                        (!openNavbar) ? <FaBars /> : <FaTimes />
                    }
            </div>

            {/* Mobile Menu */}
            <ul className={ (!openNavbar) ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col justify-center items-center z-40' }>
                <li className='text-3xl py-6'>
                        <Link 
                            onClick={handleClickToggle}
                            to='home'
                                smooth={true} 
                                duration={500} 
                        >
                            Inicio
                        </Link>
                 </li>
                <li className='text-3xl py-6'>
                        <Link 
                            onClick={handleClickToggle}
                            to='about'
                            smooth={true} 
                            duration={500} 
                        >
                            Sobre mí
                        </Link>
                </li>
                <li className='text-3xl py-6'>
                        <Link 
                            onClick={handleClickToggle}
                            to='skills'
                            smooth={true} 
                            duration={500} 
                        >
                            Habilidades
                        </Link>
                </li>
                <li className='text-3xl py-6'>
                        <Link 
                            onClick={handleClickToggle}
                            to='projects'
                            smooth={true} 
                            duration={500} 
                        >
                            Proyectos
                        </Link>
                </li>
                <li className='text-3xl py-6'>
                        <Link 
                            onClick={handleClickToggle}
                            to='contact'
                            smooth={true} 
                            duration={500} 
                        >
                            Contacto
                        </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/carlos-franco-713573282/' target='_blank' rel='noopener'>
                            <span>Linkedin</span> <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db4a39]'>
                        <a 
                            className='flex justify-between items-center w-full'
                            href='mailto:carlosfranco63.cf@gmail.com'>
                             <span>Email</span> <HiOutlineMail size={30}/>
                            
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9b9b9b]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href={CV} target='_blank' role='noopener'>
                            <span>Curriculum</span> <BsPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/CarlosFranco97/' target='_blank' rel='noopener'>
                                <span>GitHub</span> <FaGithub size={30}/>
                        </a>    
                    </li>
                </ul>
            </div>
        </nav> 
        
    )
}



