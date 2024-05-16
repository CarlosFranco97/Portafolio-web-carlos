
export const About = () => {
  
    return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className="max-w-[1000px] w-full flex">
                <div className='text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-lime-300'>Acerca de mí</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
               <div>
                    <p className='md:text-right text-4xl font-bold'>Hola soy Carlos, un placer tenerte acá, por favor echa un vistazo.</p>
               </div>
               <div>
                    <p>Soy una persona apasionada y proactiva por la programación y el desarrollo de software, he realizado proyectos y APP'S donde he aprendido muchas cosas sobre este hermoso mundo. </p>
               </div>
            </div>
        </div>
    </div>
    )

}
