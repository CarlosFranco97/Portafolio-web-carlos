import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import React from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] flex flex-col justify-center mx-auto p-4 w-full h-full'>
            <div>
                <p className='text-4xl inline font-bold border-b-4 border-red-300'>Habilidades</p>
            </div>
            <div className='w-full grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-10 py-8 text-center'>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Html} alt="logo_html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Css} alt="logo_css" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Javascript} alt="logo_javascript" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={React} alt="logo_react" />
                    <p className='my-4'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Firebase} alt="logo_firebase" />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Mongo} alt="logo_mongo" />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Node} alt="logo_node" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Git} alt="logo_git" />
                    <p className='my-4'>Git</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Tailwind} alt="logo_react" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='mx-auto w-20 md:w-28' src={Bootstrap} alt="logo_react" />
                    <p className='my-4'>Bootstrap</p>
                </div>
            </div>
        </div>
    </div>
  )
}
