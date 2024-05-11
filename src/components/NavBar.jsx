import { useState } from 'react';
import { FaBars, FaTimes,FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
export const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
   
    const handleClickToggle = () => {
        setOpenNavbar(!openNavbar);
    }

    return (
        <nav className='fixed w-full h-[90px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            {/* logo */}
            <div className="logo-name text-4xl">
                <h1>
                    Carlos Franco
                </h1>
            </div>

            {/* menu */}
                <ul className='hidden md:flex'>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Sobre mí</a>
                    </li>
                    <li>
                        <a href="">Habilidades</a>
                    </li>
                    <li>
                        <a href="">Proyectos</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>

            {/* Hamburger */}
            <div 
                onClick={handleClickToggle}
                className='md:hidden z-20 text-3xl'>
                    {
                        (!openNavbar) ? <FaBars /> : <FaTimes />
                    }
            </div>

            {/* Mobile Menu */}
            <ul className={ (!openNavbar) ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10' }>
                <li className='text-3xl py-6'>
                    <a href="">Inicio</a>
                 </li>
                <li className='text-3xl py-6'>
                    <a href="">Sobre mí</a>
                </li>
                <li className='text-3xl py-6'>
                     <a href="">Habilidades</a>
                </li>
                <li className='text-3xl py-6'>
                    <a href="">Proyectos</a>
                </li>
                <li className='text-3xl py-6'>
                    <a href="">Contacto</a>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                            <span>Linkedin</span> <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db4a39]'>
                        <a 
                            className='flex justify-between items-center w-full'
                            href="/">
                             <span>Email</span> <HiOutlineMail size={30}/>
                            
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9b9b9b]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href="">
                            <span>Curriculum</span> <BsPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a 
                            className='flex justify-between items-center w-full text-gray-300'
                            href="/">
                                <span>GitHub</span> <FaGithub size={30}/>
                        </a>    
                    </li>
                </ul>
            </div>
        </nav> 
        
    )
}



