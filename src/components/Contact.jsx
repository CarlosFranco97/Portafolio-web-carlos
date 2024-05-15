import { useState } from "react"

export const Contact = () => {
  
    return (
    <div name='contact' className='bg-[#0a192f] h-screen w-full flex justify-center items-center p-4'>
        {/* container */}
        <div className='max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl inline border-b-4 border-red-300 text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'>Dejame un mensaje para comunicarme contigo.</p>
            </div>
          
            <form method='POST' action='https://getform.io/f/eapdyyza' className="max-w-[600px] w-full flex flex-col mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electrónico</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea name="floating_textarea" id="floating_textarea" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ></textarea>
                    <label htmlFor="floating_textarea" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensaje</label>
                </div>
                <button className='text-white border-2 hover:bg-red-300 hover:border-red-300 px-4 py-3 my-4 mx-auto'>
                    Contactame
                </button>
            </form>
        </div>
    </div>
  )
}
